(ns notes.core
    (:import [goog.ui IdGenerator])
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require [notes.dev :refer [is-dev?]]
              [om.core :as om :include-macros true]
              [cljs-time.core :as time-core]
              [cljs-time.format :as time-format]
              [om-tools.dom :as dom-tools :include-macros true]
              [cljs.core.async :refer [put! chan <!]]
              [clojure.data :as data]
              [clojure.string :as string]
              [om.dom :as dom :include-macros true]))

(defn now [] (new js/Date))
(defn guid []
  (.getNextUniqueId (.getInstance IdGenerator)))
(def custom-formatter (time-format/formatter "dd/MM/yyyy"))
(def app-title (str "Notes " (time-format/unparse custom-formatter (time-core/date-time (.getFullYear (now)) (+ 1 (.getMonth (now))) (.getDate (now))))))
(defn new-note [tab] { :id (guid) :tab tab :title "" :status "edited" })
(def app-state (atom {:notes [(new-note 0)]}))

(defn edit [e note owner comm]
  (let [note-val @note
        node (om/get-node owner "editField")]
    (put! comm [:edit note-val])
    ))

(defn change [e note owner]
  (om/set-state! owner :edit-text (.. e -target -value)))

(defn submit [e note owner comm]
  (when-let [edit-text (om/get-state owner :title)]
    (if (string/blank? (.trim edit-text))
      (do
        (om/update! note :title edit-text)
        (put! comm [:save @note]))
      (put! comm [:destroy @note])
    ))
  false)

(defn destroy-note [app {:keys [id]}]
  (om/transact! app :notes
    (fn [notes] (into [] (remove #(= (:id %) id) notes)))
    [:delete id]))

(defn mark-edited [n edited-id]
  (if (= (:id n) edited-id)
    (assoc n :status "edited")
    (assoc n :status "entered")))

(defn notes-with-editing-row-updated [notes-list id]
    (vec (map #(mark-edited % id) notes-list))
)


(defn edit-note [app {:keys [id]}]
  (let [note-list (:notes @app)
        final-list (notes-with-editing-row-updated note-list id)]
    (om/update! app :notes final-list)
  )
)

(defn save-note [app note]
  (let [existing-list (:notes @app)
        updated-list (conj existing-list note)
        final-list (notes-with-editing-row-updated updated-list (:id note))]
    (om/update! app :notes final-list)
  )
)

(defn hidden [is-hidden]
  (if is-hidden
    #js {:display "none"}
    #js {}))

(defn focus-input [note owner]
  (when (= (:status note) "edited")
    (let [node (om/get-node owner "editField")
    len  (.. node -value -length)]
    (.focus node)
    (.setSelectionRange node len len)))
)
(defn indent-element [content tab]
  (if (== 0 tab) content
    (reduce (fn [res _] (dom/ul nil res)) content (range 0 tab))))

(defn handle-new-note-keydown [e note owner comm]
  (let [code (event->key e)
        which (.-which e)
        key (.toLowerCase (js/String.fromCharCode which))]
  (if (or (alphanumeric key) (== code "space"))
  (do
    (om/transact! note :title
      #(str % key)
      [:title nil])
  )
  (do
  (case code
    "enter"
    (do
      (let [new-field (om/get-node owner "editField")]
      (when-not (string/blank? (.. new-field -value trim))
        (let [note (new-note (:tab @note))]
          (put! comm [:save note])
        )))
        false)
    "tab" (do
      (om/transact! note :tab
        #(+ % 1)
        [:tab nil])
      false)
    "shift+tab" (do
      (om/transact! note :tab
        #(- % 1)
        [:tab nil])
      false)
    "up" (do
      (put! comm [:up note])
      false)
    "down" (do
      (put! comm [:down note])
      false)
    "escape" (do
      (put! comm [:up note])
      (put! comm [:destroy @note])
      false)
    nil)))))


(defn note-view  [note owner]
  (reify
    om/IInitState
    (init-state [_]
      {:edit-text (:title note)})
    om/IDidMount
    (did-mount [this]
      (focus-input note owner))
    om/IDidUpdate
    (did-update [_ _ _]
      (focus-input note owner))
    om/IRenderState
    (render-state [_ {:keys [comm] :as state}]
        (indent-element (dom/li nil
          (dom/div #js {:className "view"
            :style (hidden (= (:status note) "edited"))
            }
            (dom/label
              #js {:onDoubleClick #(edit % note owner comm)}
              (:title note))
            (dom/button
              #js {:className "destroy"
                   :onClick (fn [_] (put! comm [:destroy @note]))}
              "Delete")
          )
          (dom/input
            #js {:ref "editField"
                 :className "edit"
                 :placeholder "Enter note here..."
                 :style (hidden (not (= (:status note) "edited")))
                 :value (om/get-state owner :edit-text)
                 :onBlur #(submit % note owner comm)
                 :onChange #(change % note owner)
                 :onKeyDown #(handle-new-note-keydown % note owner comm)})) (:tab note)))))

(def code->key
  "map from a character code (read from events with event.which)
  to a string representation of it.
  Only need to add 'special' things here."
  {13 "enter"
   9  "tab"
   37 "left"
   38 "up"
   39 "right"
   40 "down"
   46 "del"
   32 "space"
   27 "escape"
   186 ";"})
 
(defn event-modifiers
  "Given a keydown event, return the modifier keys that were being held."
  [e]
  (into [] (filter identity [(if (.-shiftKey e) "shift")
                             (if (.-altKey e) "alt")
                             (if (.-ctrlKey e) "ctrl")
                             (if (.-metaKey e) "meta")])))

(def mod-keys
  "A vector of the modifier keys that we use to compare against to make
  sure that we don't report things like pressing the shift key as independent events.
  This may not be desirable behavior, depending on the use case, but it works for
  what I need."
  [;; shift
   (js/String.fromCharCode 16)
   ;; ctrl
   (js/String.fromCharCode 17)
   ;; alt
   (js/String.fromCharCode 18)
   ])

(defn event->key
  "Given an event, return a string like 'up' or 'shift+l' or 'ctrl+;'
  describing the key that was pressed.
  This fn will never return just 'shift' or any other lone modifier key."
  [event]
  (let [mods (event-modifiers event)
        which (.-which event)
        key (or (code->key which) (.toLowerCase (js/String.fromCharCode which)))]
    (if (and key (not (empty? key)) (not (some #{key} mod-keys)))
      (string/join "+" (conj mods key)))))

(defn alphanumeric [s]
  (re-find #"^[a-z0-9]+$" s))

(defn focus-on-input []
  (let [element (.querySelector js/document "input")
        value (.-value element)
        length (.-length value)]
    (do (.focus element)
       (.setSelectionRange element length length))))

(defn index-of [coll v]
  (let [i (count (take-while #(not= v %) coll))]
    (when (or (< i (count coll))
            (= v (last coll)))
      i)))

(defn go-up [app note]
  (let [existing-list (:notes @app)
        index (index-of (:notes @app) @note)
        note-above (get existing-list (- index 1))
        final-list (notes-with-editing-row-updated existing-list (:id note-above))]
    (if (> index 0)
      (om/update! app :notes final-list)
    )
  )
)

(defn go-down [app note]
  (let [existing-list (:notes @app)
        index (index-of (:notes @app) @note)
        last-row-index (- (.-length (clj->js existing-list)) 1)]
    (if (= index last-row-index)
      (let [n (new-note (:tab @note))]
        (save-note app n)
      )
      (let [note-above (get existing-list (+ index 1))
            final-list (notes-with-editing-row-updated existing-list (:id note-above))]
        (om/update! app :notes final-list)))
  )
)

(defn handle-event [type app val]
  (case type
    :destroy (destroy-note app val)
    :edit    (edit-note app val)
    :up      (go-up app val)
    :down    (go-down app val)
    :save    (save-note app val)
    :cancel  (destroy-note app val)
    nil))

(defn notes-app [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [comm (chan)]
        (om/set-state! owner :comm comm)
        (go (while true
              (let [[type value] (<! comm)]
                (handle-event type app value))))))
    om/IRenderState
    (render-state [_ {:keys [comm]}]
      (dom/div nil
        (dom/h1 nil app-title)
        (apply dom/ul nil
          (om/build-all note-view (:notes app)
          {:init-state {:comm comm}
           :key :id }
          ))))))

(om/root
  notes-app
  app-state
  {:target (. js/document (getElementById "app"))})

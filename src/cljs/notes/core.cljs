; TODO: 2) onblur see if it saves!
(ns notes.core
    (:require-macros [cljs.core.async.macros :refer [go]]
                     [datomic-cljs.macros :refer [<?]])
    (:require [notes.dev :refer [is-dev?]]
              [notes.utils :refer [date-str alphanumeric]]
              [notes.event-handling :refer [event->key]]
              [notes.storage-client :refer [persist-create persist-update find-all]]
              [om.core :as om :include-macros true]
              [om-tools.dom :as dom-tools :include-macros true]
              [cljs.core.async :refer [put! chan <!]]
              [datomic-cljs.api :as d]
              [clojure.data :as data]
              [clojure.string :as string]
              [om.dom :as dom :include-macros true]))

(def app-title (str "Notes " (date-str)))
(defn new-note [tab] { :db/id nil :note/indent tab :note/title "" :status "edited" })
(def app-state (atom {:notes [(new-note 0)]}))

(defn edit [e note owner comm]
  (let [note-val @note
        node (om/get-node owner "editField")]
    (put! comm [:edit note-val])
    ))

(defn change [e note owner]
  (om/set-state! owner :edit-text (.. e -target -value)))

(defn on-blur [e note owner comm]
  (when-let [edit-text (om/get-state owner :edit-text)]
    (if (string/blank? (.trim edit-text))
      (do
        (om/update! note :note/title edit-text)
        (put! comm [:down note]))
    ))
  false)

(defn destroy-note [app note]
  (let [id (:db/id note)]
  (om/transact! app :notes
    (fn [notes] (into [] (remove #(= (:db/id %) id) notes)))
    [:delete id])))

(defn mark-edited [n edited-id]
  (if (= (:db/id n) edited-id)
    (assoc n :status "edited")
    (assoc n :status "entered")))

(defn notes-with-editing-row-updated [notes-list id]
    (vec (map #(mark-edited % id) notes-list))
)

(defn edit-note [app note]
  (let [note-list (:notes @app)
        id (:db/id note)
        final-list (vec (notes-with-editing-row-updated note-list id))]
    (om/update! app :notes final-list)
  )
)

(defn save-or-update [app [current-note new-blank-note]]
  (let [existing-list (:notes @app)
        updated-list (conj existing-list new-blank-note)
        final-list (notes-with-editing-row-updated updated-list (:db/id new-blank-note))]
    (om/update! app :notes final-list)
    (if (:db/id current-note)
      (do
        (persist-update current-note))
      (do
        (persist-create current-note))
      )
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
(defn nested-element [content tab]
  (if (== 0 tab) content
    (reduce (fn [res _] (dom/ul #js { :className "note-ul" } res)) content (range 0 tab))))

(defn indent-element [content tab]
    (dom/div #js { :className "note-container" } (nested-element content tab)))

(defn handle-new-note-keydown [e note owner comm]
   (let [code (event->key e)
        which (.-which e)
        key (.toLowerCase (js/String.fromCharCode which))]
  (do
  (case code
    "enter"
    (do
      (put! comm [:down note])
      false)
    "tab" (do
      (om/transact! note :note/indent
        #(+ % 1)
        [:note/indent nil])
      false)
    "shift+tab" (do
      (om/transact! note :note/indent
        #(- % 1)
        [:note/indent nil])
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
    nil))))

(defn handle-new-note-keyup [e note owner comm]
  (let [code (event->key e)
        which (.-which e)
        key (.toLowerCase (js/String.fromCharCode which))]
    (if (or (alphanumeric key) (== code "space") (== code "backspace"))
      (do
        (om/transact! note :note/title
                      (fn [s]
                        (.. e -target -value))
                      [:note/title nil])
        )
      )))

(defn note-view  [note owner]
  (reify
    om/IInitState
    (init-state [_]
      {:edit-text (:note/title note)})
    om/IDidMount
    (did-mount [this]
      (focus-input note owner))
    om/IDidUpdate
    (did-update [_ _ _]
      (focus-input note owner))
    om/IRenderState
    (render-state [_ {:keys [comm] :as state}]
        (indent-element (dom/li #js { :className "note-item" }
          (dom/div #js {:className "view"
            :style (hidden (= (:status note) "edited"))
            }
            (dom/label
              #js {:onDoubleClick #(edit % note owner comm)}
              (:note/title note))
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
                 :onBlur #(on-blur % note owner comm)
                 :onChange #(change % note owner)
                 :onKeyUp #(handle-new-note-keyup % note owner comm)
                 :onKeyDown #(handle-new-note-keydown % note owner comm)})) (:note/indent note)))))

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
        final-list (notes-with-editing-row-updated existing-list (:db/id note-above))]
    (if (> index 0)
      (do
      (om/update! app :notes final-list)
      (persist-update @note)
      )
    )
  )
)

(defn go-down [app note]
  (let [existing-list (:notes @app)
        index (index-of (:notes @app) @note)
        last-row-index (- (.-length (clj->js existing-list)) 1)]
    (if (= index last-row-index)
      (if (not (string/blank? (:note/title @note)))
      (let [new-blank-note (new-note (:note/indent @note))
            current-note (get existing-list last-row-index)]
        (save-or-update app [current-note new-blank-note])
      ))
      (let [note-above (get existing-list (+ index 1))
            final-list (notes-with-editing-row-updated existing-list (:db/id note-above))]
        (persist-update @note)
        (om/update! app :notes final-list)))
  )
)

(defn handle-event [type app val]
  (case type
    :destroy (destroy-note app val)
    :edit    (edit-note app val)
    :up      (go-up app val)
    :down    (go-down app val)
    :cancel  (destroy-note app val)
    nil))

(defn notes-app [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [comm (chan)]
        (find-all
          (fn [res]
            (om/transact! app :notes
              (fn [_]
                (let [nn (new-note 0) final-list (vec (concat (map #(assoc % :status "entered") res) [nn]))]
                  final-list)
              )
            )
          )
        )
        (om/set-state! owner :comm comm)
        (go (while true
              (let [[type value] (<! comm)]
                (handle-event type app value))))
      )
    )
    om/IRenderState
    (render-state [_ {:keys [comm]}]
      (dom/div nil
        (dom/h1 nil app-title)
        (apply dom/ul nil
          (om/build-all note-view (:notes app)
          {:init-state {:comm comm}
           :key :db/id }
          ))))))

(om/root
  notes-app
  app-state
  {:target (. js/document (getElementById "app"))})

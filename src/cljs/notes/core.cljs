(ns notes.core
    (:require-macros [cljs.core.async.macros :refer [go]]
                     [datomic-cljs.macros :refer [<?]])
    (:require [notes.dev :refer [is-dev?]]
              [notes.utils :refer [date-str index-of]]
              [notes.event-handling :refer [event->key]]
              [notes.storage-gateway :refer [persist-create persist-update find-all remove-entry]]
              [om.core :as om :include-macros true]
              [om-tools.dom :as dom-tools :include-macros true]
              [cljs.core.async :refer [put! chan <!]]
              [datomic-cljs.api :as d]
              [clojure.data :as data]
              [clojure.string :as string]
              [om.dom :as dom :include-macros true]))

(def app-title (str "Notes " (date-str)))
(defn new-note [tab index] { :db/id nil :note/indent tab :note/title "" :status "edited" :note/index index})
(def app-state (atom {:notes [(new-note 0 0)]}))

(defn edit [e note owner comm]
  (let [note-val @note
        node (om/get-node owner "editField")]
    (put! comm [:edit note-val])
    ))

(defn change [e note owner]
  (om/set-state! owner :edit-text (.. e -target -value)))

(defn on-blur [e note owner comm]
  (do
    (put! comm [:save note])
    false))

(defn destroy-note [app note]
  (let [id (:db/id note)]
    (om/transact! app :notes
                  (fn [notes] (into [] (remove #(= (:db/id %) id) notes)))
                  [:delete id])
    (remove-entry note (fn [res]
                         (do
                           (println "DELETE response:" res)
                           )))))

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

(defn save-or-update-note [app note]
  (if (:db/id @note)
    (do
      (if (not (string/blank? (:note/title @note)))
        (persist-update @note (fn [res]
          (do
            (println "PATCH response:" res)
        )))
        (do
          (om/transact! app :notes
              (fn [notes] (into [] (remove #(= (:db/id %) (:db/id @note)) notes)))
                        [])
        (remove-entry @note (fn [res]
                             (do
                               (println "DELETE response:" res)
                               )))
        )
      ))
      (if (not (string/blank? (:note/title @note)))
      (persist-create @note (fn [res]
        (do
         (println "PATCH response:" res)
          (om/transact! app :notes
                        (fn [notes] (do
                                      (let [updated-note (merge @note { :db/id (:db/id res) :status "entered" })
                                            final-list (map #(if (and (= (:db/id %) nil) (not (string/blank? (:note/title %)))) updated-note %) notes)]
                                        (vec final-list))))
                        [])
          ))
      ))
    )
  )

(defn save-or-update [app [current-note new-blank-note]]
  (let [existing-list (:notes @app)
        updated-list (conj existing-list new-blank-note)
        final-list (notes-with-editing-row-updated updated-list (:db/id new-blank-note))]
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
  (om/transact! note :note/title
                (fn [s]
                  (.. e -target -value))
                [:note/title nil])
  )

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

(defn go-up [app note]
  (let [existing-list (:notes @app)
        index (index-of (:notes @app) @note)
        id (:db/id @note)
        note-above (get existing-list (- index 1))
        final-list (notes-with-editing-row-updated existing-list (:db/id note-above))]
    (if (> index 0)
      (if (not (string/blank? (:note/title @note)))
        (do
          (om/update! app :notes final-list)
        )
        (do
          (om/update! app :notes (into [] (remove #(= (:db/id %) id) final-list)))
          )
      )
      )
    )
  )

(defn go-down [app note]
  (let [existing-list (:notes @app)
        index (index-of (:notes @app) @note)
        length (clj->js existing-list)
        last-row-index (- (.-length length) 1)]
    (if (= index last-row-index)
      (if (not (string/blank? (:note/title @note)))
      (let [new-blank-note (new-note (:note/indent @note) (count existing-list))
            current-note (get existing-list last-row-index)]
        (save-or-update app [current-note new-blank-note])
      ))
      (let [note-above (get existing-list (+ index 1))
            final-list (notes-with-editing-row-updated existing-list (:db/id note-above))]
        (om/update! app :notes final-list))
    )
  )
)

(defn refresh-notes [app res]
  (om/update! app :notes
              (let [nn (new-note 0 (count res)) final-list (vec (concat (map #(assoc % :status "entered") res) [nn]))]
                (vec (sort-by :note/index final-list)))
              )
)

(defn go-back-in-time [app params]
  (find-all params #(refresh-notes app %)))

(defn handle-event [type app val]
  (case type
    :destroy (destroy-note app val)
    :edit    (edit-note app val)
    :up      (go-up app val)
    :down    (go-down app val)
    :save    (save-or-update-note app val)
    :refresh (go-back-in-time app val)
    nil))

(defn handle-time-change [owner comm]
  (let [elem (js/$ "#datepicker")
        date (.val elem)]
    (put! comm [:refresh { :time date }])
  ))

(defn date-picker [input owner]
  (reify
    om/IDidMount
    (did-mount [_]
      (let [elem (js/$ "#datepicker")]
        (.datepicker elem)
        (.datepicker elem "option" "dateFormat" "ddmmyy")))
    om/IRenderState
    (render-state [_ {:keys [comm] :as state}]
      (dom/div nil
        (dom/input #js { :id "datepicker" })
        (dom/input #js { :type "submit" :onClick #(handle-time-change owner comm) })
        )
      )
    )
 )

(defn notes-app [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [comm (chan)]
        (find-all {}  #(refresh-notes app %))
        (om/set-state! owner :comm comm)
        (go (while true
              (let [[type value] (<! comm)]
                (handle-event type app value))))
      )
    )
    om/IRenderState
    (render-state [_ {:keys [comm]}]
      (dom/div nil
      (dom/div #js { :id "app" }
       (dom/h1 nil app-title)
        (apply dom/ul nil
          (om/build-all note-view (:notes app)
          {:init-state {:comm comm}
           :key :db/id }
          ))
        )
       (om/build date-picker (:notes app)
                           {:init-state {:comm comm} })
      ))))

(om/root
  notes-app
  app-state
  {:target (. js/document (getElementById "app-container"))})

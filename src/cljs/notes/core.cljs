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
(def custom-formatter (time-format/formatter "dd/MM/yyyy"))
(def app-title (str "Notes " (time-format/unparse custom-formatter (time-core/date-time (.getFullYear (now)) (+ 1 (.getMonth (now))) (.getDate (now))))))
(def app-state (atom {:notes [] :tab 0 }))

(defn note-view  [note owner]
  (reify
    om/IRender
    (render [this]
      (indent-element (dom/li nil (:title note)) (:tab note))
      )))

(defn indent-element [content tab]
  (if (== 0 tab) content
    (reduce (fn [res _] (dom/ul nil res)) content (range 0 tab))))

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

(defn handle-new-note-keydown [e app owner]
  (let [code (event->key e)]
  (case code
    "enter"
    (do
      (let [new-field (om/get-node owner "newNote")]
      (when-not (string/blank? (.. new-field -value trim))
        (let [new-note {:id (guid)
                        :title (.-value new-field)
                        :status "pending"
                        :tab (:tab @app) }]
          (om/transact! app :notes
            #(conj % new-note)
            [:create new-note]))
        (set! (.-value new-field) "")))
        false)
    "tab" (do
      (om/transact! app :tab
        #(+ % 1)
        [:tab nil])
      false)
    "shift+tab" (do
      (om/transact! app :tab
        #(- % 1)
        [:tab nil])
      false)
    nil
    )))

(defn list-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:delete (chan)})
    om/IWillMount
    (will-mount [_]
      (let [delete (om/get-state owner :delete)]
        (go (loop []
              (let [note (<! delete)]
                (om/transact! app :notes
                  (fn [xs] (vec (remove #(= note %) xs))))
                (recur))))))
    om/IRenderState
    (render-state [this state]
      (dom/div nil
        (dom/h1 nil app-title)
        (apply dom/ul nil
          (om/build-all note-view (:notes app)
            {:init-state state}))
        (dom/ul nil
          (indent-element
            (dom/li nil (dom/input #js {:type "text" :ref "newNote"
              :placeholder "Enter note here..."
              :onKeyDown #(handle-new-note-keydown % app owner)
            })) (:tab app)
          )
          ;(dom/button #js {:onClick #(add-note app owner)} "Add note")
        )))))

(defn guid []
  (.getNextUniqueId (.getInstance IdGenerator)))

(defn add-note [app owner]
  (let [new-note (-> (om/get-node owner "newNote")
                        .-value)]
    (when new-note
      (om/transact! app :notes #(conj % new-note)))))

(om/root
  (fn [app owner]
    (reify om/IRender
      (render [_]
        (dom/div nil
          (om/build list-view app)
          ))))
  app-state
  {:target (. js/document (getElementById "app"))})

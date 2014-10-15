(ns notes.core
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
(def app-state (atom {:notes [] :title app-title}))

(defn note-view  [note owner]
  (reify
    om/IRender
    (render [this]
      (dom/li nil note))))

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
        (dom/h1 nil (:title app))
        (apply dom/ul nil
          (om/build-all note-view (:notes app)
            {:init-state state}))
        (dom/div nil
          (dom/input #js {:type "text" :ref "new-note"})
          (dom/button #js {:onClick #(add-note app owner)} "Add note"))))))

(defn add-note [app owner]
  (let [new-note (-> (om/get-node owner "new-note")
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

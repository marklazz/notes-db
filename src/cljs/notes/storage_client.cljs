(ns notes.storage-client
  (:require [cljs.reader :as reader]
            [goog.events :as events])
  (:import [goog.net XhrIo]))

(def ^:private meths
  {:get "GET"
   :put "PUT"
   :post "POST"
   :patch "PATCH"
   :delete "DELETE"})

(defn persist-create [note]
  (edn-xhr
    {:method :post
     :url "/notes"
     :data note
     :on-complete
     (fn [res]
       (println "POST response:" res))}))


(defn persist-update [note]
  (edn-xhr
    {:method :patch
     :url (str "/notes/" (:db/id note))
     :data note
     :on-complete
     (fn [res]
       (println "PATCH response:" res))}))

(defn find-all [cb]
  (edn-xhr
    { :method :get
      :url "/notes"
      :on-complete cb}))

(defn edn-xhr [{:keys [method url data on-complete]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.COMPLETE
      (fn [e]
        (on-complete (reader/read-string (.getResponseText xhr)))))
    (. xhr
      (send url (meths method) (when data (pr-str data))
        #js {"Content-Type" "application/edn"}))))

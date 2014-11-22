(ns notes.storage-client
  (:require [cljs.reader :as reader]
            [goog.events :as events])
  (:import [goog.net XhrIo]))

(def ^:private meths
  {:get "GET"
   :put "PUT"
   :post "POST"
   :delete "DELETE"})

(defn persist-save [id title]
  (edn-xhr
    {:method :post
     :url "/notes"
     :data { :note/id id :note/title title}
     :on-complete
     (fn [res]
       (println "server response:" res))}))

(defn edn-xhr [{:keys [method url data on-complete]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.COMPLETE
      (fn [e]
        (on-complete (reader/read-string (.getResponseText xhr)))))
    (. xhr
      (send url (meths method) (when data (pr-str data))
        #js {"Content-Type" "application/edn"}))))

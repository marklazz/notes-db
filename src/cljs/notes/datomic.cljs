(ns notes.storage
  (:import [goog.net XhrIo]))

;(defn classes []
  ;(let [db (d/db conn)
        ;classes
        ;(vec (map #(d/touch (d/entity db (first %)))
               ;(d/q '[:find ?class
                      ;:where
                      ;[?class :class/id]]
                 ;db)))]
    ;(generate-response classes)))

(defn edn-xhr [{:keys [method url data on-complete]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.COMPLETE
      (fn [e]
        (on-complete (reader/read-string (.getResponseText xhr)))))
    (. xhr
      (send url (meths method) (when data (pr-str data))
        #js {"Content-Type" "application/edn"}))))

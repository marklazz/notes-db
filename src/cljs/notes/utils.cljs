(ns notes.utils
  (:import [goog.ui IdGenerator])
  (:require [cljs-time.core :as time-core]
            [cljs-time.format :as time-format]
 ))

(defn guid []
  (.getNextUniqueId (.getInstance IdGenerator)))

(defn now [] (new js/Date))

(def custom-formatter (time-format/formatter "dd/MM/yyyy"))

(defn date-str [] (time-format/unparse custom-formatter (time-core/date-time (.getFullYear (now)) (+ 1 (.getMonth (now))) (.getDate (now)))))

(defn alphanumeric [s]
  (re-find #"^[a-z0-9]+$" s))

(ns notes.core
    (:require [notes.dev :refer [is-dev?]]
              [om.core :as om :include-macros true]
              ;[cljs-time.core :as time-core]
              ;[cljs-time.format :as time-format]
              [om.dom :as dom :include-macros true]))

;(def format-map
  ;(let [f goog.i18n.DateTimeFormat.Format]
;{:FULL_DATE (.-FULL_DATE f)
;:FULL_DATETIME (.-FULL_DATETIME f)
;:FULL_TIME (.-FULL_TIME f)
;:LONG_DATE (.-LONG_DATE f)
;:LONG_DATETIME (.-LONG_DATETIME f)
;:LONG_TIME (.-LONG_TIME f)
;:MEDIUM_DATE (.-MEDIUM_DATE f)
;:MEDIUM_DATETIME (.-MEDIUM_DATETIME f)
;:MEDIUM_TIME (.-MEDIUM_TIME f)
;:SHORT_DATE (.-SHORT_DATE f)
;:SHORT_DATETIME (.-SHORT_DATETIME f)
 ;:SHORT_TIME (.-SHORT_TIME f)}))

;(defn format-date-generic
  ;"Format a date using either the built-in goog.i18n.DateTimeFormat.Format enum
;or a formatting string like \"dd MMMM yyyy\""
  ;[date-format date]
  ;(.format (goog.i18n.DateTimeFormat.
            ;(or (date-format format-map) date-format))
           ;(js/Date. date)))

(defn now [] (new js/Date))
;(def custom-formatter (time-format/formatter "dd/MM/YYYY"))
;(def notes-title (str "Notes " (time-format/unparse custom-formatter now)))
(def notes-title (str "Notes for " (now)))
;(def notes-title (str "Notes for " (format-date-generic :FULL_DATE (now))))
(def app-state (atom {:notes [] :title notes-title}))
(.log js/console "Hello world 2!")

(om/root
  (fn [app owner]
    (reify om/IRender
      (render [_]
        (dom/h1  nil (:title app)))))
  app-state
  {:target (. js/document (getElementById "app"))})

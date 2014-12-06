(ns notes.event-handling
  (:require [clojure.string :as string]))

(def code->key
  "map from a character code (read from events with event.which)
  to a string representation of it.
  Only need to add 'special' things here."
  {13 "enter"
   8  "backspace"
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

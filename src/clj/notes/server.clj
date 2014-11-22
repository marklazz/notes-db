(ns notes.server
    (:require [clojure.java.io :as io]
              [notes.dev :refer [is-dev? inject-devmode-html browser-repl]]
              [compojure.core :refer [GET POST defroutes]]
              [ring.middleware.edn :refer [wrap-edn-params]]
              [compojure.route :refer [files resources] :as r]
              [compojure.handler :refer [api]]
              [net.cgrand.enlive-html :refer [deftemplate]]
              [ring.middleware.reload :as reload]
              [environ.core :refer [env]]
              [notes.storage :refer [notes create-note]]
              [ring.adapter.jetty :refer [run-jetty]])
)

;(go
  ;(let [[[eid]] (<! (d/q '[:find ?e :where [?e :owner/name "Bob"]]
                         ;(d/db conn)))]
    ;(<! (d/transact conn [[:db/add eid :owner/name "Boba"]]))))
(deftemplate page
  (io/resource "index.html") [] [:body] (if is-dev? inject-devmode-html identity))

(defroutes routes
  (GET "/" req (page))
  (GET "/notes" [] (notes))
  (POST "/notes" {params :params edn-params :edn-params} (create-note edn-params))
  (resources "/react" {:root "react"})
  (files "/" {:root "resources/public"}))

(defn logging [chain] (fn [req] (do (println (str "REQUEST: " req)) (chain req))))

(def http-handler
  (if is-dev?
    ;(reload/wrap-reload (api #'routes))
    (-> routes  wrap-edn-params logging)
    (api routes)))

(defn run [& [port]]
  (defonce ^:private server
    (run-jetty http-handler {:port (Integer. (or port (env :port) 10555))
                                 :join? false}))
  server)

(defn -main [& [port]]
  (run port))

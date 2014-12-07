(ns notes.server
    (:require [clojure.java.io :as io]
              [notes.dev :refer [is-dev? inject-devmode-html browser-repl]]
              [compojure.core :refer [GET POST PATCH DELETE defroutes]]
              [ring.middleware.edn :refer [wrap-edn-params]]
              [compojure.route :refer [files resources] :as r]
              [compojure.handler :refer [api]]
              [net.cgrand.enlive-html :refer [deftemplate]]
              [ring.middleware.reload :as reload]
              [environ.core :refer [env]]
              [notes.storage :refer [find-all create-note update-note delete-note]]
              [ring.adapter.jetty :refer [run-jetty]])
)

(deftemplate page
  (io/resource "index.html") [] [:body] (if is-dev? inject-devmode-html identity))

(defroutes routes
  (GET "/" req (page))
  (GET "/notes" [] (find-all))
  (POST "/notes" {params :params edn-params :edn-params} (create-note edn-params))
  (PATCH "/notes/:id" {params :params edn-params :edn-params} (update-note edn-params))
  (DELETE "/notes/:id" {params :params edn-params :edn-params} (delete-note edn-params))
  (resources "/react" {:root "react"})
  (files "/" {:root "resources/public"}))

(defn logging [chain] (fn [req] (do (println (str "REQUEST: " req)) (chain req))))

(def http-handler
  (if is-dev?
    ;(reload/wrap-reload (api #'routes))
    (-> routes wrap-edn-params)
    (api routes)))

(defn run [& [port]]
  (defonce ^:private server
    (run-jetty http-handler {:port (Integer. (or port (env :port) 10555))
                                 :join? false}))
  server)

(defn -main [& [port]]
  (run port))

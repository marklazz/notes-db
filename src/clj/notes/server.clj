(ns notes.server
    (:require [clojure.java.io :as io]
              [notes.dev :refer [is-dev? inject-devmode-html browser-repl]]
              [compojure.core :refer [GET PUT defroutes]]
              [compojure.route :refer [files resources] :as r]
              [compojure.handler :refer [api]]
              [net.cgrand.enlive-html :refer [deftemplate]]
              [ring.middleware.reload :as reload]
              [environ.core :refer [env]]
              [datomic.api :as d]
              [ring.adapter.jetty :refer [run-jetty]]))

(def uri "datomic:free://localhost:4334/pet-owners-db")
(def conn (d/connect uri))
;(go
  ;(let [[[eid]] (<! (d/q '[:find ?e :where [?e :owner/name "Bob"]]
                         ;(d/db conn)))]
    ;(<! (d/transact conn [[:db/add eid :owner/name "Boba"]]))))
(defn generate-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn"}
   :body (pr-str data)})

(deftemplate page
  (io/resource "index.html") [] [:body] (if is-dev? inject-devmode-html identity))

(defroutes routes
  (resources "/react" {:root "react"})
  (GET "/" req (page))
  (files "/" {:root "resources/public"}))

(def http-handler
  (if is-dev?
    (reload/wrap-reload (api #'routes))
    (api routes)))

(defn run [& [port]]
  (defonce ^:private server
    (run-jetty http-handler {:port (Integer. (or port (env :port) 10555))
                                 :join? false}))
  server)

(defn -main [& [port]]
  (run port))

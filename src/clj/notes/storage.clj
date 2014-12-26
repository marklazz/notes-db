(ns notes.storage
  (:require [datomic.api :as d])
  (:require [environ.core :refer [env]])
  )

(def uri (env :my-datomic-storage-uri))
(def schema (load-file "resources/datomic/schema.edn"))

(defn generate-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn"}
   :body (pr-str data)})

(defn re-create-db []
   (d/delete-database uri)
    (d/create-database uri))

(defn use-schema []
    (let [conn (d/connect uri)]
   @(d/transact conn schema)
    conn))

(def conn (d/connect uri))

(defn parse-date [date-str] (.parse (java.text.SimpleDateFormat. "ddMMyyyy") date-str))

(defn database [params]
    (if (contains? params :time)
      (let [time-s (:time params)
            date (parse-date time-s)]
        (d/as-of (d/db conn) date)
      )
      (d/db conn)
    ))

(defn find-all [params]
  (let [db (database params)
        notes
        (vec (map #(d/touch (d/entity db (first %)))
               (d/q '[:find ?note
                      :where
                      [?note :note/title]]
                 db)))]
    (generate-response notes)))

(defn find-note-id [params]
  (let [db    (database params)
        title (:title params)]
    (ffirst
      (d/q '[:find ?note
             :in $ ?title
             :where
             [?note :note/title ?title]]
           db title))
))

(defn create-note [params]
  (let [db    (database params)
        title (:note/title params)
        indent (:note/indent params)
        index (:note/index params)
        eid (d/tempid :db.part/user)]
    @(d/transact conn [{:db/id eid :note/title title :note/indent indent :note/index index}])
    (generate-response {:status :ok :db/id (find-note-id (merge params { :title title }))})))

(defn update-note [params]
  (let [id    (:db/id params)
        db    (database params)
        indent (:note/indent params)
        title (:note/title params)]
    @(d/transact conn [{:db/id id :note/title title :note/indent indent}])
    (generate-response {:status :ok})))

(defn delete-note [params]
  (let [id    (:db/id params)
        db    (database params)
        indent (:note/indent params)
        title (:note/title params)]
    @(d/transact conn [[:db.fn/retractEntity id]])
    (generate-response {:status :ok})))

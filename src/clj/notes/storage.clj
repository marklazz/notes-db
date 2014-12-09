(ns notes.storage
  (:require [datomic.api :as d]))
; Steps to recreate DB
; (use 'notes.storage)
; 1) run (re-create-db) in one session
; 2) run (use-schema) in another session

(def uri "datomic:free://localhost:4334/notes-db")
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

(defn find-all []
  (let [conn (d/connect uri)
       db (d/db conn)
        notes
        (vec (map #(d/touch (d/entity db (first %)))
               (d/q '[:find ?note
                      :where
                      [?note :note/title]]
                 db)))]
    (generate-response notes)))

(defn find-note-id [title]
  (let [conn (d/connect uri)
        db    (d/db conn)]
    (ffirst
      (d/q '[:find ?note
             :in $ ?title
             :where
             [?note :note/title ?title]]
           db title))
))

(defn create-note [params]
  (let [conn (d/connect uri)
        db    (d/db conn)
        title (:note/title params)
        indent (:note/indent params)
        index (:note/index params)
        eid (d/tempid :db.part/user)]
    @(d/transact conn [{:db/id eid :note/title title :note/indent indent :note/index index}])
    (generate-response {:status :ok :db/id (find-note-id title)})))

(defn update-note [params]
  (let [conn (d/connect uri)
        id    (:db/id params)
        db    (d/db conn)
        indent (:note/indent params)
        title (:note/title params)]
    @(d/transact conn [{:db/id id :note/title title :note/indent indent}])
    (generate-response {:status :ok})))

(defn delete-note [params]
  (let [conn (d/connect uri)
        id    (:db/id params)
        db    (d/db conn)
        indent (:note/indent params)
        title (:note/title params)]
    @(d/transact conn [[:db.fn/retractEntity id]])
    (generate-response {:status :ok})))

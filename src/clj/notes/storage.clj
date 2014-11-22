(ns notes.storage
  (:require [datomic.api :as d]))
; Steps to recreate DB
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

(defn notes []
  (let [conn (d/connect uri)
       db (d/db conn)
        notes
        (vec (map #(d/touch (d/entity db (first %)))
               (d/q '[:find ?note
                      :where
                      [?note :note/title]]
                 db)))]
    (generate-response notes)))

(defn find-note-id [id title]
  (let [conn (d/connect uri)
        db    (d/db conn)]
    (ffirst
      (d/q '[:find ?note
             :in $ ?id ?title
             :where
             [?note :note/guid ?id]
             [?note :note/title ?title]]
           db id title))
))

(defn create-note [params]
  (let [conn (d/connect uri)
        db    (d/db conn)
        id (:note/id params)
        title (:note/title params)
        eid (d/tempid :db.part/user)]
    @(d/transact conn [{:db/id eid :note/guid id :note/title title}])
    (generate-response {:status :ok :db/id (find-note-id id title)})))

(defn update-note [params]
  (let [conn (d/connect uri)
        id    (:note/id params)
        db    (d/db conn)
        title (:note/title params)
        eid   (ffirst
                (d/q '[:find ?note
                       :in $ ?id
                       :where
                       [?note :note/id ?id]]
                  db id))
        finalid (or eid (d/tempid :db.part/user))]
    @(d/transact conn [{:db/id eid :note/title title}])
    (generate-response {:status :ok})))

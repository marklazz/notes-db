(defproject notes "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src/clj" "src/cljs"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2342"]
                [com.zachallaun/datomic-cljs "0.0.1-alpha-1"]
                 [ring "1.3.1"]
                 [compojure "1.1.9"]
                 [enlive "1.1.5"]
                 [om "0.7.1"]
                 [figwheel "0.1.5-SNAPSHOT"]
                 [clj-time "0.8.0"]
                 [com.andrewmcveigh/cljs-time "0.2.1"]
                 [environ "1.0.0"]
                 [com.cemerick/piggieback "0.1.3"]
                 [prismatic/om-tools "0.3.4"]
                 [expectations "2.0.12"]
                 [fogus/ring-edn "0.2.0"]
                 ;[com.datomic/datomic-free "0.9.5052"]
                 [com.datomic/datomic-pro "0.9.5052"]
                 [org.postgresql/postgresql "9.3-1102-jdbc41"]
                 [weasel "0.4.0-SNAPSHOT"]]
  :main notes.server

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-environ "1.0.0"]]

  :min-lein-version "2.0.0"

  :uberjar-name "notes.jar"
  :repositories [["my.datomic.com" {:url "https://my.datomic.com/repo"
                                    :username ~(System/getenv "MY_DATOMIC_USERNAME")
                                    :password ~(System/getenv "MY_DATOMIC_PASSWORD")}]]

  :cljsbuild {:builds {:app {:source-paths ["src/clj" "src/cljs"]
                             :compiler {:output-to     "resources/public/app.js"
                                        :output-dir    "resources/public/out"
                                        :source-map    "resources/public/out.js.map"
                                        :preamble      ["react/react.min.js"]
                                        :externs       ["react/externs/react.js"]
                                        :optimizations :none
                                        :pretty-print  true}}}}

  :profiles {:dev {:repl-options {:init-ns notes.server
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   :plugins [[lein-figwheel "0.1.4-SNAPSHOT"]]
                   :figwheel {:http-server-root "public"
                              :port 3449 }
                   :env {:is-dev true}
                   :datomic { :config "resources/datomic/sql-transactor-template.properties"
                             :db-uri ~(System/getenv "DATABASE_URL")}}
             :uberjar {:hooks [leiningen.cljsbuild]
                       :env {:production true}
                       :omit-source true
                       :aot :all
                       :cljsbuild {:builds {:app
                                            {:compiler
                                             {:optimizations :advanced
                                              :pretty-print false}}}}}})

// Compiled by ClojureScript 0.0-2342
goog.provide('notes.storage_gateway');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('cljs.reader');
notes.storage_gateway.meths = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$33,"GET",cljs.core.constant$keyword$34,"PUT",cljs.core.constant$keyword$35,"POST",cljs.core.constant$keyword$36,"PATCH",cljs.core.constant$keyword$37,"DELETE"], null);
notes.storage_gateway.persist_create = (function persist_create(note,cb){var G__18247 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$38,cljs.core.constant$keyword$35,cljs.core.constant$keyword$39,"/notes",cljs.core.constant$keyword$40,note,cljs.core.constant$keyword$41,cb], null);return (notes.storage_gateway.edn_xhr.cljs$core$IFn$_invoke$arity$1 ? notes.storage_gateway.edn_xhr.cljs$core$IFn$_invoke$arity$1(G__18247) : notes.storage_gateway.edn_xhr.call(null,G__18247));
});
notes.storage_gateway.persist_update = (function persist_update(note,cb){var G__18249 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$38,cljs.core.constant$keyword$36,cljs.core.constant$keyword$39,("/notes/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(note))),cljs.core.constant$keyword$40,note,cljs.core.constant$keyword$41,cb], null);return (notes.storage_gateway.edn_xhr.cljs$core$IFn$_invoke$arity$1 ? notes.storage_gateway.edn_xhr.cljs$core$IFn$_invoke$arity$1(G__18249) : notes.storage_gateway.edn_xhr.call(null,G__18249));
});
notes.storage_gateway.remove_entry = (function remove_entry(note,cb){var G__18251 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$38,cljs.core.constant$keyword$37,cljs.core.constant$keyword$39,("/notes/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(note))),cljs.core.constant$keyword$40,note,cljs.core.constant$keyword$41,cb], null);return (notes.storage_gateway.edn_xhr.cljs$core$IFn$_invoke$arity$1 ? notes.storage_gateway.edn_xhr.cljs$core$IFn$_invoke$arity$1(G__18251) : notes.storage_gateway.edn_xhr.call(null,G__18251));
});
notes.storage_gateway.find_all = (function find_all(cb){var G__18253 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$38,cljs.core.constant$keyword$33,cljs.core.constant$keyword$39,"/notes",cljs.core.constant$keyword$41,cb], null);return (notes.storage_gateway.edn_xhr.cljs$core$IFn$_invoke$arity$1 ? notes.storage_gateway.edn_xhr.cljs$core$IFn$_invoke$arity$1(G__18253) : notes.storage_gateway.edn_xhr.call(null,G__18253));
});
notes.storage_gateway.edn_xhr = (function edn_xhr(p__18254){var map__18261 = p__18254;var map__18261__$1 = ((cljs.core.seq_QMARK_(map__18261))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18261):map__18261);var on_complete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18261__$1,cljs.core.constant$keyword$41);var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18261__$1,cljs.core.constant$keyword$40);var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18261__$1,cljs.core.constant$keyword$39);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18261__$1,cljs.core.constant$keyword$38);var xhr = (new goog.net.XhrIo());var G__18262_18267 = xhr;var G__18263_18268 = goog.net.EventType.COMPLETE;var G__18264_18269 = ((function (G__18262_18267,G__18263_18268,xhr,map__18261,map__18261__$1,on_complete,data,url,method){
return (function (e){var G__18265 = cljs.reader.read_string(xhr.getResponseText());return (on_complete.cljs$core$IFn$_invoke$arity$1 ? on_complete.cljs$core$IFn$_invoke$arity$1(G__18265) : on_complete.call(null,G__18265));
});})(G__18262_18267,G__18263_18268,xhr,map__18261,map__18261__$1,on_complete,data,url,method))
;goog.events.listen(G__18262_18267,G__18263_18268,G__18264_18269);
return xhr.send(url,(function (){var G__18266 = method;return (notes.storage_gateway.meths.cljs$core$IFn$_invoke$arity$1 ? notes.storage_gateway.meths.cljs$core$IFn$_invoke$arity$1(G__18266) : notes.storage_gateway.meths.call(null,G__18266));
})(),(cljs.core.truth_(data)?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([data], 0)):null),{"Content-Type": "application/edn"});
});

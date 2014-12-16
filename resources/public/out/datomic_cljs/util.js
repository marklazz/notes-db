// Compiled by ClojureScript 0.0-2342
goog.provide('datomic_cljs.util');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
/**
* Returns a closed core.async channel containing only element.
*/
datomic_cljs.util.singleton_chan = (function singleton_chan(element){var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(c,element,((function (c){
return (function (){return cljs.core.async.close_BANG_(c);
});})(c))
);
return c;
});

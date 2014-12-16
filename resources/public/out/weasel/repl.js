// Compiled by ClojureScript 0.0-2342
goog.provide('weasel.repl');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.browser.event');
goog.require('weasel.impls.websocket');
goog.require('weasel.impls.websocket');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('clojure.browser.net');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('clojure.browser.event');
weasel.repl.ws_connection = (function (){var G__29175 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29175) : cljs.core.atom.call(null,G__29175));
})();
weasel.repl.alive_QMARK_ = (function alive_QMARK_(){return !(((function (){var G__29177 = weasel.repl.ws_connection;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29177) : cljs.core.deref.call(null,G__29177));
})() == null));
});
weasel.repl.process_message = (function (){var method_table__4505__auto__ = (function (){var G__29178 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29178) : cljs.core.atom.call(null,G__29178));
})();var prefer_table__4506__auto__ = (function (){var G__29179 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29179) : cljs.core.atom.call(null,G__29179));
})();var method_cache__4507__auto__ = (function (){var G__29180 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29180) : cljs.core.atom.call(null,G__29180));
})();var cached_hierarchy__4508__auto__ = (function (){var G__29181 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29181) : cljs.core.atom.call(null,G__29181));
})();var hierarchy__4509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$68,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("process-message",cljs.core.constant$keyword$129,cljs.core.constant$keyword$7,hierarchy__4509__auto__,method_table__4505__auto__,prefer_table__4506__auto__,method_cache__4507__auto__,cached_hierarchy__4508__auto__));
})();
weasel.repl.process_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$130,(function (message){return console.error(("Websocket REPL error "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(message))));
}));
weasel.repl.process_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$131,(function (message){var code = cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(message);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$129,cljs.core.constant$keyword$134,cljs.core.constant$keyword$133,(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,cljs.core.constant$keyword$138,cljs.core.constant$keyword$133,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(eval(code)))], null);
}catch (e29182){if((e29182 instanceof Error))
{var e = e29182;return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$135,cljs.core.constant$keyword$137,cljs.core.constant$keyword$133,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$136,(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], null);
} else
{var e = e29182;return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$135,cljs.core.constant$keyword$137,cljs.core.constant$keyword$133,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$136,"No stacktrace available."], null);

}
}})()], null);
}));
/**
* @param {...*} var_args
*/
weasel.repl.repl_print = (function() { 
var repl_print__delegate = function (args){var temp__4124__auto__ = (function (){var G__29185 = weasel.repl.ws_connection;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29185) : cljs.core.deref.call(null,G__29185));
})();if(cljs.core.truth_(temp__4124__auto__))
{var conn = temp__4124__auto__;return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2((function (){var G__29186 = weasel.repl.ws_connection;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29186) : cljs.core.deref.call(null,G__29186));
})(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$129,cljs.core.constant$keyword$139,cljs.core.constant$keyword$133,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,args)], null));
} else
{return null;
}
};
var repl_print = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return repl_print__delegate.call(this,args);};
repl_print.cljs$lang$maxFixedArity = 0;
repl_print.cljs$lang$applyTo = (function (arglist__29187){
var args = cljs.core.seq(arglist__29187);
return repl_print__delegate(args);
});
repl_print.cljs$core$IFn$_invoke$arity$variadic = repl_print__delegate;
return repl_print;
})()
;
/**
* @param {...*} var_args
*/
weasel.repl.console_print = (function() { 
var console_print__delegate = function (args){return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var console_print = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return console_print__delegate.call(this,args);};
console_print.cljs$lang$maxFixedArity = 0;
console_print.cljs$lang$applyTo = (function (arglist__29188){
var args = cljs.core.seq(arglist__29188);
return console_print__delegate(args);
});
console_print.cljs$core$IFn$_invoke$arity$variadic = console_print__delegate;
return console_print;
})()
;
weasel.repl.print_fns = new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$140,weasel.repl.repl_print,cljs.core.constant$keyword$141,weasel.repl.console_print,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$140,null,cljs.core.constant$keyword$141,null], null), null),(function() { 
var G__29189__delegate = function (args){cljs.core.apply.cljs$core$IFn$_invoke$arity$2(weasel.repl.console_print,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(weasel.repl.repl_print,args);
};
var G__29189 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29189__delegate.call(this,args);};
G__29189.cljs$lang$maxFixedArity = 0;
G__29189.cljs$lang$applyTo = (function (arglist__29190){
var args = cljs.core.seq(arglist__29190);
return G__29189__delegate(args);
});
G__29189.cljs$core$IFn$_invoke$arity$variadic = G__29189__delegate;
return G__29189;
})()
], true, false);
/**
* @param {...*} var_args
*/
weasel.repl.connect = (function() { 
var connect__delegate = function (repl_server_url,p__29191){var map__29198 = p__29191;var map__29198__$1 = ((cljs.core.seq_QMARK_(map__29198))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29198):map__29198);var print = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29198__$1,cljs.core.constant$keyword$139,cljs.core.constant$keyword$140);var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29198__$1,cljs.core.constant$keyword$142);var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29198__$1,cljs.core.constant$keyword$143);var on_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29198__$1,cljs.core.constant$keyword$144);var verbose = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29198__$1,cljs.core.constant$keyword$145,true);var repl_connection = weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(weasel.repl.ws_connection,cljs.core.constantly(repl_connection));
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$146,((function (repl_connection,map__29198,map__29198__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){cljs.core.set_print_fn_BANG_(((cljs.core.fn_QMARK_(print))?print:cljs.core.get.cljs$core$IFn$_invoke$arity$2(weasel.repl.print_fns,print)));
clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(repl_connection,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$129,cljs.core.constant$keyword$147], null)], 0)));
if(cljs.core.truth_(verbose))
{console.info("Opened Websocket REPL connection");
} else
{}
if(cljs.core.fn_QMARK_(on_open))
{return (on_open.cljs$core$IFn$_invoke$arity$0 ? on_open.cljs$core$IFn$_invoke$arity$0() : on_open.call(null));
} else
{return null;
}
});})(repl_connection,map__29198,map__29198__$1,print,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$74,((function (repl_connection,map__29198,map__29198__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){var map__29199 = cljs.reader.read_string(evt.message);var map__29199__$1 = ((cljs.core.seq_QMARK_(map__29199))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29199):map__29199);var message = map__29199__$1;var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29199__$1,cljs.core.constant$keyword$129);var response = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__29200 = message;return (weasel.repl.process_message.cljs$core$IFn$_invoke$arity$1 ? weasel.repl.process_message.cljs$core$IFn$_invoke$arity$1(G__29200) : weasel.repl.process_message.call(null,G__29200));
})()], 0));return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(repl_connection,response);
});})(repl_connection,map__29198,map__29198__$1,print,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$148,((function (repl_connection,map__29198,map__29198__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){var G__29201_29204 = weasel.repl.ws_connection;var G__29202_29205 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29201_29204,G__29202_29205) : cljs.core.reset_BANG_.call(null,G__29201_29204,G__29202_29205));
if(cljs.core.truth_(verbose))
{console.info("Closed Websocket REPL connection");
} else
{}
if(cljs.core.fn_QMARK_(on_close))
{return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else
{return null;
}
});})(repl_connection,map__29198,map__29198__$1,print,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$130,((function (repl_connection,map__29198,map__29198__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){if(cljs.core.truth_(verbose))
{console.error("WebSocket error",evt);
} else
{}
if(cljs.core.fn_QMARK_(on_error))
{var G__29203 = evt;return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__29203) : on_error.call(null,G__29203));
} else
{return null;
}
});})(repl_connection,map__29198,map__29198__$1,print,on_close,on_error,on_open,verbose))
);
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(repl_connection,repl_server_url);
};
var connect = function (repl_server_url,var_args){
var p__29191 = null;if (arguments.length > 1) {
  p__29191 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return connect__delegate.call(this,repl_server_url,p__29191);};
connect.cljs$lang$maxFixedArity = 1;
connect.cljs$lang$applyTo = (function (arglist__29206){
var repl_server_url = cljs.core.first(arglist__29206);
var p__29191 = cljs.core.rest(arglist__29206);
return connect__delegate(repl_server_url,p__29191);
});
connect.cljs$core$IFn$_invoke$arity$variadic = connect__delegate;
return connect;
})()
;

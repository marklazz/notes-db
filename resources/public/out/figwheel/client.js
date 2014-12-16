// Compiled by ClojureScript 0.0-2342
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__29343,args){var map__29345 = p__29343;var map__29345__$1 = ((cljs.core.seq_QMARK_(map__29345))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29345):map__29345);var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29345__$1,cljs.core.constant$keyword$149);if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array(args));
} else
{return null;
}
};
var log = function (p__29343,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__29343,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__29346){
var p__29343 = cljs.core.first(arglist__29346);
var args = cljs.core.rest(arglist__29346);
return log__delegate(p__29343,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__29347){var map__29349 = p__29347;var map__29349__$1 = ((cljs.core.seq_QMARK_(map__29349))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29349):map__29349);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29349__$1,cljs.core.constant$keyword$150);return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(clojure.string.replace_first(websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__29350,callback){var map__29353 = p__29350;var map__29353__$1 = ((cljs.core.seq_QMARK_(map__29353))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29353):map__29353);var msg = map__29353__$1;var dependency_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29353__$1,cljs.core.constant$keyword$151);var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29353__$1,cljs.core.constant$keyword$152);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29353__$1,cljs.core.constant$keyword$153);if(cljs.core.truth_((function (){var or__3626__auto__ = dependency_file;if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return (function (){var G__29354 = figwheel.client.add_cache_buster(request_url);return goog.net.jsloader.load(G__29354);
})().addCallback(((function (map__29353,map__29353__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__29353,map__29353__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();figwheel.client.js_reload(file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,url);
return cljs.core.async.close_BANG_(out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into(cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__29355,p__29356){var map__29360 = p__29355;var map__29360__$1 = ((cljs.core.seq_QMARK_(map__29360))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29360):map__29360);var opts = map__29360__$1;var url_rewriter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29360__$1,cljs.core.constant$keyword$154);var map__29361 = p__29356;var map__29361__$1 = ((cljs.core.seq_QMARK_(map__29361))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29361):map__29361);var d = map__29361__$1;var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29361__$1,cljs.core.constant$keyword$155);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.constant$keyword$153,(function (){var G__29362 = ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file));return (url_rewriter.cljs$core$IFn$_invoke$arity$1 ? url_rewriter.cljs$core$IFn$_invoke$arity$1(G__29362) : url_rewriter.call(null,G__29362));
})());
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__29363,p__29364){var map__29407 = p__29363;var map__29407__$1 = ((cljs.core.seq_QMARK_(map__29407))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29407):map__29407);var opts = map__29407__$1;var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29407__$1,cljs.core.constant$keyword$156);var before_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29407__$1,cljs.core.constant$keyword$157);var map__29408 = p__29364;var map__29408__$1 = ((cljs.core.seq_QMARK_(map__29408))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29408):map__29408);var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29408__$1,cljs.core.constant$keyword$158);var c__13062__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto__,map__29407,map__29407__$1,opts,on_jsload,before_jsload,map__29408,map__29408__$1,files){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto__,map__29407,map__29407__$1,opts,on_jsload,before_jsload,map__29408,map__29408__$1,files){
return (function (state_29431){var state_val_29432 = (state_29431[(1)]);if((state_val_29432 === (6)))
{var inst_29413 = (state_29431[(7)]);var inst_29422 = (state_29431[(2)]);var inst_29423 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29424 = [inst_29413];var inst_29425 = (new cljs.core.PersistentVector(null,1,(5),inst_29423,inst_29424,null));var inst_29426 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(on_jsload,inst_29425);var state_29431__$1 = (function (){var statearr_29433 = state_29431;(statearr_29433[(8)] = inst_29422);
return statearr_29433;
})();var statearr_29434_29449 = state_29431__$1;(statearr_29434_29449[(2)] = inst_29426);
(statearr_29434_29449[(1)] = (5));
return cljs.core.constant$keyword$18;
} else
{if((state_val_29432 === (5)))
{var inst_29429 = (state_29431[(2)]);var state_29431__$1 = state_29431;return cljs.core.async.impl.ioc_helpers.return_chan(state_29431__$1,inst_29429);
} else
{if((state_val_29432 === (4)))
{var state_29431__$1 = state_29431;var statearr_29435_29450 = state_29431__$1;(statearr_29435_29450[(2)] = null);
(statearr_29435_29450[(1)] = (5));
return cljs.core.constant$keyword$18;
} else
{if((state_val_29432 === (3)))
{var inst_29413 = (state_29431[(7)]);var inst_29416 = console.debug("Figwheel: loaded these files");var inst_29417 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$155,inst_29413);var inst_29418 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_29417], 0));var inst_29419 = console.log(inst_29418);var inst_29420 = cljs.core.async.timeout((10));var state_29431__$1 = (function (){var statearr_29436 = state_29431;(statearr_29436[(9)] = inst_29416);
(statearr_29436[(10)] = inst_29419);
return statearr_29436;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29431__$1,(6),inst_29420);
} else
{if((state_val_29432 === (2)))
{var inst_29413 = (state_29431[(7)]);var inst_29413__$1 = (state_29431[(2)]);var inst_29414 = cljs.core.not_empty(inst_29413__$1);var state_29431__$1 = (function (){var statearr_29437 = state_29431;(statearr_29437[(7)] = inst_29413__$1);
return statearr_29437;
})();if(cljs.core.truth_(inst_29414))
{var statearr_29438_29451 = state_29431__$1;(statearr_29438_29451[(1)] = (3));
} else
{var statearr_29439_29452 = state_29431__$1;(statearr_29439_29452[(1)] = (4));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_29432 === (1)))
{var inst_29409 = (function (){var G__29440 = files;return (before_jsload.cljs$core$IFn$_invoke$arity$1 ? before_jsload.cljs$core$IFn$_invoke$arity$1(G__29440) : before_jsload.call(null,G__29440));
})();var inst_29410 = figwheel.client.add_request_urls(opts,files);var inst_29411 = figwheel.client.load_all_js_files(inst_29410);var state_29431__$1 = (function (){var statearr_29441 = state_29431;(statearr_29441[(11)] = inst_29409);
return statearr_29441;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29431__$1,(2),inst_29411);
} else
{return null;
}
}
}
}
}
}
});})(c__13062__auto__,map__29407,map__29407__$1,opts,on_jsload,before_jsload,map__29408,map__29408__$1,files))
;return ((function (switch__13047__auto__,c__13062__auto__,map__29407,map__29407__$1,opts,on_jsload,before_jsload,map__29408,map__29408__$1,files){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_29445 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29445[(0)] = state_machine__13048__auto__);
(statearr_29445[(1)] = (1));
return statearr_29445;
});
var state_machine__13048__auto____1 = (function (state_29431){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_29431);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e29446){if((e29446 instanceof Object))
{var ex__13051__auto__ = e29446;var statearr_29447_29453 = state_29431;(statearr_29447_29453[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_29431);
return cljs.core.constant$keyword$18;
} else
{throw e29446;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__29454 = state_29431;
state_29431 = G__29454;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_29431){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_29431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto__,map__29407,map__29407__$1,opts,on_jsload,before_jsload,map__29408,map__29408__$1,files))
})();var state__13064__auto__ = (function (){var statearr_29448 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_29448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto__);
return statearr_29448;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto__,map__29407,map__29407__$1,opts,on_jsload,before_jsload,map__29408,map__29408__$1,files))
);
return c__13062__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__29455,link_href){var map__29457 = p__29455;var map__29457__$1 = ((cljs.core.seq_QMARK_(map__29457))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29457):map__29457);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29457__$1,cljs.core.constant$keyword$153);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29457__$1,cljs.core.constant$keyword$155);var trunc_href = figwheel.client.truncate_url(link_href);return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file,trunc_href)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(figwheel.client.truncate_url(request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some((function (l){if(figwheel.client.matches_file_QMARK_(f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links());
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster(url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster(url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__13062__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto__,parent){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto__,parent){
return (function (state_29478){var state_val_29479 = (state_29478[(1)]);if((state_val_29479 === (2)))
{var inst_29475 = (state_29478[(2)]);var inst_29476 = parent.removeChild(orig_link);var state_29478__$1 = (function (){var statearr_29480 = state_29478;(statearr_29480[(7)] = inst_29475);
return statearr_29480;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_29478__$1,inst_29476);
} else
{if((state_val_29479 === (1)))
{var inst_29473 = cljs.core.async.timeout((200));var state_29478__$1 = state_29478;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29478__$1,(2),inst_29473);
} else
{return null;
}
}
});})(c__13062__auto__,parent))
;return ((function (switch__13047__auto__,c__13062__auto__,parent){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_29484 = [null,null,null,null,null,null,null,null];(statearr_29484[(0)] = state_machine__13048__auto__);
(statearr_29484[(1)] = (1));
return statearr_29484;
});
var state_machine__13048__auto____1 = (function (state_29478){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_29478);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e29485){if((e29485 instanceof Object))
{var ex__13051__auto__ = e29485;var statearr_29486_29488 = state_29478;(statearr_29486_29488[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_29478);
return cljs.core.constant$keyword$18;
} else
{throw e29485;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__29489 = state_29478;
state_29478 = G__29489;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_29478){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_29478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto__,parent))
})();var state__13064__auto__ = (function (){var statearr_29487 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_29487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto__);
return statearr_29487;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto__,parent))
);
return c__13062__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__29490){var map__29492 = p__29490;var map__29492__$1 = ((cljs.core.seq_QMARK_(map__29492))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29492):map__29492);var f_data = map__29492__$1;var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29492__$1,cljs.core.constant$keyword$153);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29492__$1,cljs.core.constant$keyword$155);var temp__4124__auto__ = figwheel.client.get_correct_link(f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$2(link,figwheel.client.clone_link(link,request_url));
} else
{return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$1(figwheel.client.create_link(request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__29493,files_msg){var map__29516 = p__29493;var map__29516__$1 = ((cljs.core.seq_QMARK_(map__29516))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29516):map__29516);var opts = map__29516__$1;var on_cssload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29516__$1,cljs.core.constant$keyword$159);var seq__29517_29538 = cljs.core.seq(figwheel.client.add_request_urls(opts,cljs.core.constant$keyword$158.cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__29518_29539 = null;var count__29519_29540 = (0);var i__29520_29541 = (0);while(true){
if((i__29520_29541 < count__29519_29540))
{var f_29542 = chunk__29518_29539.cljs$core$IIndexed$_nth$arity$2(null,i__29520_29541);figwheel.client.reload_css_file(f_29542);
{
var G__29543 = seq__29517_29538;
var G__29544 = chunk__29518_29539;
var G__29545 = count__29519_29540;
var G__29546 = (i__29520_29541 + (1));
seq__29517_29538 = G__29543;
chunk__29518_29539 = G__29544;
count__29519_29540 = G__29545;
i__29520_29541 = G__29546;
continue;
}
} else
{var temp__4126__auto___29547 = cljs.core.seq(seq__29517_29538);if(temp__4126__auto___29547)
{var seq__29517_29548__$1 = temp__4126__auto___29547;if(cljs.core.chunked_seq_QMARK_(seq__29517_29548__$1))
{var c__4395__auto___29549 = cljs.core.chunk_first(seq__29517_29548__$1);{
var G__29550 = cljs.core.chunk_rest(seq__29517_29548__$1);
var G__29551 = c__4395__auto___29549;
var G__29552 = cljs.core.count(c__4395__auto___29549);
var G__29553 = (0);
seq__29517_29538 = G__29550;
chunk__29518_29539 = G__29551;
count__29519_29540 = G__29552;
i__29520_29541 = G__29553;
continue;
}
} else
{var f_29554 = cljs.core.first(seq__29517_29548__$1);figwheel.client.reload_css_file(f_29554);
{
var G__29555 = cljs.core.next(seq__29517_29548__$1);
var G__29556 = null;
var G__29557 = (0);
var G__29558 = (0);
seq__29517_29538 = G__29555;
chunk__29518_29539 = G__29556;
count__29519_29540 = G__29557;
i__29520_29541 = G__29558;
continue;
}
}
} else
{}
}
break;
}
var c__13062__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto__,map__29516,map__29516__$1,opts,on_cssload){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto__,map__29516,map__29516__$1,opts,on_cssload){
return (function (state_29527){var state_val_29528 = (state_29527[(1)]);if((state_val_29528 === (2)))
{var inst_29523 = (state_29527[(2)]);var inst_29524 = cljs.core.constant$keyword$158.cljs$core$IFn$_invoke$arity$1(files_msg);var inst_29525 = (function (){var G__29529 = inst_29524;return (on_cssload.cljs$core$IFn$_invoke$arity$1 ? on_cssload.cljs$core$IFn$_invoke$arity$1(G__29529) : on_cssload.call(null,G__29529));
})();var state_29527__$1 = (function (){var statearr_29530 = state_29527;(statearr_29530[(7)] = inst_29523);
return statearr_29530;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_29527__$1,inst_29525);
} else
{if((state_val_29528 === (1)))
{var inst_29521 = cljs.core.async.timeout((100));var state_29527__$1 = state_29527;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29527__$1,(2),inst_29521);
} else
{return null;
}
}
});})(c__13062__auto__,map__29516,map__29516__$1,opts,on_cssload))
;return ((function (switch__13047__auto__,c__13062__auto__,map__29516,map__29516__$1,opts,on_cssload){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_29534 = [null,null,null,null,null,null,null,null];(statearr_29534[(0)] = state_machine__13048__auto__);
(statearr_29534[(1)] = (1));
return statearr_29534;
});
var state_machine__13048__auto____1 = (function (state_29527){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_29527);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e29535){if((e29535 instanceof Object))
{var ex__13051__auto__ = e29535;var statearr_29536_29559 = state_29527;(statearr_29536_29559[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_29527);
return cljs.core.constant$keyword$18;
} else
{throw e29535;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__29560 = state_29527;
state_29527 = G__29560;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_29527){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_29527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto__,map__29516,map__29516__$1,opts,on_cssload))
})();var state__13064__auto__ = (function (){var statearr_29537 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_29537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto__);
return statearr_29537;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto__,map__29516,map__29516__$1,opts,on_cssload))
);
return c__13062__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){var G__29562 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$160);return (compile_fail_callback.cljs$core$IFn$_invoke$arity$1 ? compile_fail_callback.cljs$core$IFn$_invoke$arity$1(G__29562) : compile_fail_callback.call(null,G__29562));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{var G__29564_29565 = figwheel.client.add_cache_buster(src);goog.net.jsloader.load(G__29564_29565);
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__29566){var map__29578 = p__29566;var map__29578__$1 = ((cljs.core.seq_QMARK_(map__29578))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29578):map__29578);var opts = map__29578__$1;var on_compile_fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29578__$1,cljs.core.constant$keyword$161);var jsload_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29578__$1,cljs.core.constant$keyword$162);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29578__$1,cljs.core.constant$keyword$150);var retry_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29578__$1,cljs.core.constant$keyword$163);console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__29578,map__29578__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string(msg_str.data);var pred__29579 = cljs.core._EQ_;var expr__29580 = cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_((function (){var G__29582 = cljs.core.constant$keyword$164;var G__29583 = expr__29580;return (pred__29579.cljs$core$IFn$_invoke$arity$2 ? pred__29579.cljs$core$IFn$_invoke$arity$2(G__29582,G__29583) : pred__29579.call(null,G__29582,G__29583));
})()))
{return figwheel.client.reload_js_files(opts,msg);
} else
{if(cljs.core.truth_((function (){var G__29584 = cljs.core.constant$keyword$165;var G__29585 = expr__29580;return (pred__29579.cljs$core$IFn$_invoke$arity$2 ? pred__29579.cljs$core$IFn$_invoke$arity$2(G__29584,G__29585) : pred__29579.call(null,G__29584,G__29585));
})()))
{return figwheel.client.reload_css_files(opts,msg);
} else
{if(cljs.core.truth_((function (){var G__29586 = cljs.core.constant$keyword$166;var G__29587 = expr__29580;return (pred__29579.cljs$core$IFn$_invoke$arity$2 ? pred__29579.cljs$core$IFn$_invoke$arity$2(G__29586,G__29587) : pred__29579.call(null,G__29586,G__29587));
})()))
{return figwheel.client.compile_failed(msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__29578,map__29578__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__29578,map__29578__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base();
return console.debug("Figwheel: socket connection established");
});})(socket,map__29578,map__29578__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__29578,map__29578__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket closed or failed to open"], 0));
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__29578,map__29578__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$163,(retry_count - (1))));
});})(socket,map__29578,map__29578__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__29578,map__29578__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__29578,map__29578__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket error "], 0));
});})(socket,map__29578,map__29578__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj29591 = {"detail":url};return obj29591;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons(cljs.core.select_keys(ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,cljs.core.constant$keyword$167], null)),get_essential_messages(cljs.core.constant$keyword$168.cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__29593){var map__29595 = p__29593;var map__29595__$1 = ((cljs.core.seq_QMARK_(map__29595))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29595):map__29595);var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29595__$1,cljs.core.constant$keyword$167);var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29595__$1,cljs.core.constant$keyword$74);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__29596){var map__29603 = p__29596;var map__29603__$1 = ((cljs.core.seq_QMARK_(map__29603))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29603):map__29603);var ed = map__29603__$1;var exception_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29603__$1,cljs.core.constant$keyword$169);var formatted_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29603__$1,cljs.core.constant$keyword$170);console.debug("Figwheel: Compile Exception");
var seq__29604_29609 = cljs.core.seq((function (){var G__29608 = exception_data;return (figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(G__29608) : figwheel.client.format_messages.call(null,G__29608));
})());var chunk__29605_29610 = null;var count__29606_29611 = (0);var i__29607_29612 = (0);while(true){
if((i__29607_29612 < count__29606_29611))
{var msg_29613 = chunk__29605_29610.cljs$core$IIndexed$_nth$arity$2(null,i__29607_29612);console.log(msg_29613);
{
var G__29614 = seq__29604_29609;
var G__29615 = chunk__29605_29610;
var G__29616 = count__29606_29611;
var G__29617 = (i__29607_29612 + (1));
seq__29604_29609 = G__29614;
chunk__29605_29610 = G__29615;
count__29606_29611 = G__29616;
i__29607_29612 = G__29617;
continue;
}
} else
{var temp__4126__auto___29618 = cljs.core.seq(seq__29604_29609);if(temp__4126__auto___29618)
{var seq__29604_29619__$1 = temp__4126__auto___29618;if(cljs.core.chunked_seq_QMARK_(seq__29604_29619__$1))
{var c__4395__auto___29620 = cljs.core.chunk_first(seq__29604_29619__$1);{
var G__29621 = cljs.core.chunk_rest(seq__29604_29619__$1);
var G__29622 = c__4395__auto___29620;
var G__29623 = cljs.core.count(c__4395__auto___29620);
var G__29624 = (0);
seq__29604_29609 = G__29621;
chunk__29605_29610 = G__29622;
count__29606_29611 = G__29623;
i__29607_29612 = G__29624;
continue;
}
} else
{var msg_29625 = cljs.core.first(seq__29604_29619__$1);console.log(msg_29625);
{
var G__29626 = cljs.core.next(seq__29604_29619__$1);
var G__29627 = null;
var G__29628 = (0);
var G__29629 = (0);
seq__29604_29609 = G__29626;
chunk__29605_29610 = G__29627;
count__29606_29611 = G__29628;
i__29607_29612 = G__29629;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$155,files)], 0)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$163,(100),cljs.core.constant$keyword$162,figwheel.client.default_on_jsload,cljs.core.constant$keyword$156,(function (){var or__3626__auto__ = cljs.core.constant$keyword$162.cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),cljs.core.constant$keyword$159,figwheel.client.default_on_cssload,cljs.core.constant$keyword$157,figwheel.client.default_before_load,cljs.core.constant$keyword$161,figwheel.client.default_on_compile_fail,cljs.core.constant$keyword$154,cljs.core.identity,cljs.core.constant$keyword$150,("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts], 0)));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__29630){var map__29632 = p__29630;var map__29632__$1 = ((cljs.core.seq_QMARK_(map__29632))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29632):map__29632);var opts = map__29632__$1;return figwheel.client.watch_and_reload_with_opts(opts);
};
var watch_and_reload = function (var_args){
var p__29630 = null;if (arguments.length > 0) {
  p__29630 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__29630);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__29633){
var p__29630 = cljs.core.seq(arglist__29633);
return watch_and_reload__delegate(p__29630);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

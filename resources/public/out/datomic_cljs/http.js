// Compiled by ClojureScript 0.0-2342
goog.provide('datomic_cljs.http');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
datomic_cljs.http.node_context_QMARK_ = (typeof exports !== 'undefined') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(exports,(function (){var context = this;return context.exports;
})()));
datomic_cljs.http.urlencode_kvs = (function urlencode_kvs(kvs){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",(function (){var iter__4364__auto__ = (function iter__27939(s__27940){return (new cljs.core.LazySeq(null,(function (){var s__27940__$1 = s__27940;while(true){
var temp__4126__auto__ = cljs.core.seq(s__27940__$1);if(temp__4126__auto__)
{var s__27940__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__27940__$2))
{var c__4362__auto__ = cljs.core.chunk_first(s__27940__$2);var size__4363__auto__ = cljs.core.count(c__4362__auto__);var b__27942 = cljs.core.chunk_buffer(size__4363__auto__);if((function (){var i__27941 = (0);while(true){
if((i__27941 < size__4363__auto__))
{var vec__27951 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4362__auto__,i__27941);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27951,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27951,(1),null);if(!((v == null)))
{cljs.core.chunk_append(b__27942,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__27952 = cljs.core.name(k);return encodeURIComponent(G__27952);
})())+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__27953 = v;return encodeURIComponent(G__27953);
})())));
{
var G__27957 = (i__27941 + (1));
i__27941 = G__27957;
continue;
}
} else
{{
var G__27958 = (i__27941 + (1));
i__27941 = G__27958;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27942),iter__27939(cljs.core.chunk_rest(s__27940__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27942),null);
}
} else
{var vec__27954 = cljs.core.first(s__27940__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27954,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27954,(1),null);if(!((v == null)))
{return cljs.core.cons((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__27955 = cljs.core.name(k);return encodeURIComponent(G__27955);
})())+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__27956 = v;return encodeURIComponent(G__27956);
})())),iter__27939(cljs.core.rest(s__27940__$2)));
} else
{{
var G__27959 = cljs.core.rest(s__27940__$2);
s__27940__$1 = G__27959;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4364__auto__(kvs);
})());
});
datomic_cljs.http.urlencode_qs = (function urlencode_qs(qs_kvs){return ("?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datomic_cljs.http.urlencode_kvs(qs_kvs)));
});
datomic_cljs.http.parse_headers = (function parse_headers(header_str){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4364__auto__ = (function iter__27974(s__27975){return (new cljs.core.LazySeq(null,(function (){var s__27975__$1 = s__27975;while(true){
var temp__4126__auto__ = cljs.core.seq(s__27975__$1);if(temp__4126__auto__)
{var s__27975__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__27975__$2))
{var c__4362__auto__ = cljs.core.chunk_first(s__27975__$2);var size__4363__auto__ = cljs.core.count(c__4362__auto__);var b__27977 = cljs.core.chunk_buffer(size__4363__auto__);if((function (){var i__27976 = (0);while(true){
if((i__27976 < size__4363__auto__))
{var header = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4362__auto__,i__27976);var vec__27984 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(header,/:/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27984,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27984,(1),null);var vec__27985 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trim(k),clojure.string.trim(v)], null);var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27985,(0),null);var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27985,(1),null);cljs.core.chunk_append(b__27977,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(k__$1)),v__$1], null));
{
var G__27988 = (i__27976 + (1));
i__27976 = G__27988;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27977),iter__27974(cljs.core.chunk_rest(s__27975__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27977),null);
}
} else
{var header = cljs.core.first(s__27975__$2);var vec__27986 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(header,/:/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27986,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27986,(1),null);var vec__27987 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trim(k),clojure.string.trim(v)], null);var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27987,(0),null);var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27987,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(k__$1)),v__$1], null),iter__27974(cljs.core.rest(s__27975__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4364__auto__(clojure.string.split_lines(header_str));
})());
});
datomic_cljs.http.browser_request = (function browser_request(p__27989,callback){var map__28003 = p__27989;var map__28003__$1 = ((cljs.core.seq_QMARK_(map__28003))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28003):map__28003);var opts = map__28003__$1;var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28003__$1,cljs.core.constant$keyword$201);var qs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28003__$1,cljs.core.constant$keyword$202);var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28003__$1,cljs.core.constant$keyword$203,cljs.core.PersistentArrayMap.EMPTY);var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28003__$1,cljs.core.constant$keyword$204);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28003__$1,cljs.core.constant$keyword$38,"GET");var js_req = (new XMLHttpRequest());var query_str = (cljs.core.truth_(qs)?datomic_cljs.http.urlencode_qs(qs):"");var url = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_str));var headers__$1 = (cljs.core.truth_(form)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers,"Content-Type","application/x-www-form-urlencoded"):headers);js_req.addEventListener("load",((function (js_req,query_str,url,headers__$1,map__28003,map__28003__$1,opts,form,qs,headers,uri,method){
return (function (){js_req.headers = datomic_cljs.http.parse_headers(js_req.getAllResponseHeaders());
js_req.statusCode = js_req.status;
var G__28004 = null;var G__28005 = js_req;var G__28006 = js_req.response;return (callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(G__28004,G__28005,G__28006) : callback.call(null,G__28004,G__28005,G__28006));
});})(js_req,query_str,url,headers__$1,map__28003,map__28003__$1,opts,form,qs,headers,uri,method))
);
js_req.addEventListener("error",((function (js_req,query_str,url,headers__$1,map__28003,map__28003__$1,opts,form,qs,headers,uri,method){
return (function (e){e.preventDefault();
var G__28007 = e;var G__28008 = js_req;var G__28009 = null;return (callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(G__28007,G__28008,G__28009) : callback.call(null,G__28007,G__28008,G__28009));
});})(js_req,query_str,url,headers__$1,map__28003,map__28003__$1,opts,form,qs,headers,uri,method))
);
js_req.open(method,url,true);
var seq__28010_28016 = cljs.core.seq((function (){var or__3626__auto__ = headers__$1;if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})());var chunk__28011_28017 = null;var count__28012_28018 = (0);var i__28013_28019 = (0);while(true){
if((i__28013_28019 < count__28012_28018))
{var vec__28014_28020 = chunk__28011_28017.cljs$core$IIndexed$_nth$arity$2(null,i__28013_28019);var k_28021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28014_28020,(0),null);var v_28022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28014_28020,(1),null);js_req.setRequestHeader(cljs.core.name(k_28021),v_28022);
{
var G__28023 = seq__28010_28016;
var G__28024 = chunk__28011_28017;
var G__28025 = count__28012_28018;
var G__28026 = (i__28013_28019 + (1));
seq__28010_28016 = G__28023;
chunk__28011_28017 = G__28024;
count__28012_28018 = G__28025;
i__28013_28019 = G__28026;
continue;
}
} else
{var temp__4126__auto___28027 = cljs.core.seq(seq__28010_28016);if(temp__4126__auto___28027)
{var seq__28010_28028__$1 = temp__4126__auto___28027;if(cljs.core.chunked_seq_QMARK_(seq__28010_28028__$1))
{var c__4395__auto___28029 = cljs.core.chunk_first(seq__28010_28028__$1);{
var G__28030 = cljs.core.chunk_rest(seq__28010_28028__$1);
var G__28031 = c__4395__auto___28029;
var G__28032 = cljs.core.count(c__4395__auto___28029);
var G__28033 = (0);
seq__28010_28016 = G__28030;
chunk__28011_28017 = G__28031;
count__28012_28018 = G__28032;
i__28013_28019 = G__28033;
continue;
}
} else
{var vec__28015_28034 = cljs.core.first(seq__28010_28028__$1);var k_28035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28015_28034,(0),null);var v_28036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28015_28034,(1),null);js_req.setRequestHeader(cljs.core.name(k_28035),v_28036);
{
var G__28037 = cljs.core.next(seq__28010_28028__$1);
var G__28038 = null;
var G__28039 = (0);
var G__28040 = (0);
seq__28010_28016 = G__28037;
chunk__28011_28017 = G__28038;
count__28012_28018 = G__28039;
i__28013_28019 = G__28040;
continue;
}
}
} else
{}
}
break;
}
js_req.responseType = "text";
if(cljs.core.truth_(form))
{return js_req.send(datomic_cljs.http.urlencode_kvs(form));
} else
{return js_req.send();
}
});
datomic_cljs.http.js_request = null;
if(cljs.core.truth_(datomic_cljs.http.node_context_QMARK_))
{datomic_cljs.http.js_request = (function (){var req = (function (){try{var G__28042 = "request";return require(G__28042);
}catch (e28041){if((e28041 instanceof Error))
{var e = e28041;console.log("Error: Cannot find module 'request'.\nSee datomic-cljs README for installation and dependency notes.");
return process.exit((1));
} else
{throw e28041;

}
}})();return ((function (req){
return (function (opts,cb){var G__28043 = cljs.core.clj__GT_js(opts);var G__28044 = cb;return (req.cljs$core$IFn$_invoke$arity$2 ? req.cljs$core$IFn$_invoke$arity$2(G__28043,G__28044) : req.call(null,G__28043,G__28044));
});
;})(req))
})();
} else
{datomic_cljs.http.js_request = datomic_cljs.http.browser_request;
}
datomic_cljs.http.response_handler = (function response_handler(c_resp,edn_QMARK_){return (function (err,resp,body){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(c_resp,(function (){var or__3626__auto__ = err;if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{var headers = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(resp.headers,cljs.core.array_seq([cljs.core.constant$keyword$11,true], 0));return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$135,resp.statusCode,cljs.core.constant$keyword$203,headers,cljs.core.constant$keyword$205,(cljs.core.truth_((function (){var and__3614__auto__ = edn_QMARK_;if(cljs.core.truth_(and__3614__auto__))
{return cljs.core.re_find(/edn/,cljs.core.constant$keyword$207.cljs$core$IFn$_invoke$arity$1(headers));
} else
{return and__3614__auto__;
}
})())?cljs.reader.read_string(body):body),cljs.core.constant$keyword$206,resp], null);
}
})(),(function (){return cljs.core.async.close_BANG_(c_resp);
}));
});
});
/**
* Make an async request to the given uri, returning a core.async
* channel eventually containing either an error or a response map
* containing the following:
* 
* :status, the HTTP status code;
* :headers, a map of HTTP response headers;
* :body, the response body;
* :js-resp, the original JS response object.
* 
* opts is the same options map described in the Request docs:
* https://github.com/mikeal/request#requestoptions-callback
* 
* Additionally, opts supports {:edn true} which sets the Accept
* header to application/edn and parses the response body as edn
* if the response content-type is application/edn.
*/
datomic_cljs.http.request = (function() {
var request = null;
var request__2 = (function (method,uri){return request.cljs$core$IFn$_invoke$arity$3(method,uri,cljs.core.PersistentArrayMap.EMPTY);
});
var request__3 = (function (method,uri,opts){var c_resp = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var map__28052 = opts;var map__28052__$1 = ((cljs.core.seq_QMARK_(map__28052))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28052):map__28052);var edn_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28052__$1,cljs.core.constant$keyword$208);var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28052__$1,cljs.core.constant$keyword$203);var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$38,(function (){var G__28053 = (((method instanceof cljs.core.Keyword))?method.fqn:null);switch (G__28053) {
case "head":
return "HEAD";

break;
case "put":
return "PUT";

break;
case "post":
return "POST";

break;
case "get":
return "GET";

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method))));

}
})(),cljs.core.array_seq([cljs.core.constant$keyword$203,(cljs.core.truth_(edn_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__3626__auto__ = headers;if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.constant$keyword$209,"application/edn"):headers)], 0));var G__28054_28057 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.constant$keyword$204,uri);var G__28055_28058 = datomic_cljs.http.response_handler(c_resp,edn_QMARK_);(datomic_cljs.http.js_request.cljs$core$IFn$_invoke$arity$2 ? datomic_cljs.http.js_request.cljs$core$IFn$_invoke$arity$2(G__28054_28057,G__28055_28058) : datomic_cljs.http.js_request.call(null,G__28054_28057,G__28055_28058));
return c_resp;
});
request = function(method,uri,opts){
switch(arguments.length){
case 2:
return request__2.call(this,method,uri);
case 3:
return request__3.call(this,method,uri,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
request.cljs$core$IFn$_invoke$arity$2 = request__2;
request.cljs$core$IFn$_invoke$arity$3 = request__3;
return request;
})()
;
/**
* Expects a response channel, and returns a channel that will
* eventually contain either the response body (on successful status
* code) or an error (if the request fails or an unsuccessful status
* code was returned).
*/
datomic_cljs.http.body = (function body(c_resp){var c_body = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var c__13062__auto___28163 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto___28163,c_body){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto___28163,c_body){
return (function (state_28140){var state_val_28141 = (state_28140[(1)]);if((state_val_28141 === (7)))
{var inst_28112 = (state_28140[(7)]);var inst_28123 = cljs.core.constant$keyword$135.cljs$core$IFn$_invoke$arity$1(inst_28112);var inst_28124 = ("Unsuccessful HTTP status code returned: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28123));var inst_28125 = (new Error(inst_28124));var state_28140__$1 = state_28140;var statearr_28142_28164 = state_28140__$1;(statearr_28142_28164[(2)] = inst_28125);
(statearr_28142_28164[(1)] = (9));
return cljs.core.constant$keyword$18;
} else
{if((state_val_28141 === (1)))
{var state_28140__$1 = state_28140;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28140__$1,(2),c_resp);
} else
{if((state_val_28141 === (4)))
{var inst_28112 = (state_28140[(7)]);var state_28140__$1 = state_28140;var statearr_28143_28165 = state_28140__$1;(statearr_28143_28165[(2)] = inst_28112);
(statearr_28143_28165[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_28141 === (6)))
{var inst_28135 = (state_28140[(2)]);var state_28140__$1 = state_28140;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28140__$1,(3),c_body,inst_28135);
} else
{if((state_val_28141 === (3)))
{var inst_28137 = (state_28140[(2)]);var inst_28138 = cljs.core.async.close_BANG_(c_body);var state_28140__$1 = (function (){var statearr_28144 = state_28140;(statearr_28144[(8)] = inst_28137);
return statearr_28144;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_28140__$1,inst_28138);
} else
{if((state_val_28141 === (12)))
{var inst_28131 = (state_28140[(2)]);var state_28140__$1 = state_28140;var statearr_28145_28166 = state_28140__$1;(statearr_28145_28166[(2)] = inst_28131);
(statearr_28145_28166[(1)] = (9));
return cljs.core.constant$keyword$18;
} else
{if((state_val_28141 === (2)))
{var inst_28112 = (state_28140[(7)]);var inst_28112__$1 = (state_28140[(2)]);var inst_28113 = (inst_28112__$1 instanceof Error);var state_28140__$1 = (function (){var statearr_28146 = state_28140;(statearr_28146[(7)] = inst_28112__$1);
return statearr_28146;
})();if(cljs.core.truth_(inst_28113))
{var statearr_28147_28167 = state_28140__$1;(statearr_28147_28167[(1)] = (4));
} else
{var statearr_28148_28168 = state_28140__$1;(statearr_28148_28168[(1)] = (5));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_28141 === (11)))
{var state_28140__$1 = state_28140;var statearr_28149_28169 = state_28140__$1;(statearr_28149_28169[(2)] = null);
(statearr_28149_28169[(1)] = (12));
return cljs.core.constant$keyword$18;
} else
{if((state_val_28141 === (9)))
{var inst_28133 = (state_28140[(2)]);var state_28140__$1 = state_28140;var statearr_28150_28170 = state_28140__$1;(statearr_28150_28170[(2)] = inst_28133);
(statearr_28150_28170[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_28141 === (5)))
{var inst_28112 = (state_28140[(7)]);var inst_28116 = cljs.core.constant$keyword$135.cljs$core$IFn$_invoke$arity$1(inst_28112);var inst_28117 = ((200) <= inst_28116);var inst_28118 = cljs.core.constant$keyword$135.cljs$core$IFn$_invoke$arity$1(inst_28112);var inst_28119 = (inst_28118 <= (299));var inst_28120 = (inst_28117) && (inst_28119);var inst_28121 = cljs.core.not(inst_28120);var state_28140__$1 = state_28140;if(inst_28121)
{var statearr_28151_28171 = state_28140__$1;(statearr_28151_28171[(1)] = (7));
} else
{var statearr_28152_28172 = state_28140__$1;(statearr_28152_28172[(1)] = (8));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_28141 === (10)))
{var inst_28112 = (state_28140[(7)]);var inst_28128 = cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(inst_28112);var state_28140__$1 = state_28140;var statearr_28153_28173 = state_28140__$1;(statearr_28153_28173[(2)] = inst_28128);
(statearr_28153_28173[(1)] = (12));
return cljs.core.constant$keyword$18;
} else
{if((state_val_28141 === (8)))
{var state_28140__$1 = state_28140;var statearr_28154_28174 = state_28140__$1;(statearr_28154_28174[(1)] = (10));

return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13062__auto___28163,c_body))
;return ((function (switch__13047__auto__,c__13062__auto___28163,c_body){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_28159 = [null,null,null,null,null,null,null,null,null];(statearr_28159[(0)] = state_machine__13048__auto__);
(statearr_28159[(1)] = (1));
return statearr_28159;
});
var state_machine__13048__auto____1 = (function (state_28140){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_28140);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e28160){if((e28160 instanceof Object))
{var ex__13051__auto__ = e28160;var statearr_28161_28175 = state_28140;(statearr_28161_28175[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_28140);
return cljs.core.constant$keyword$18;
} else
{throw e28160;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__28176 = state_28140;
state_28140 = G__28176;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_28140){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_28140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto___28163,c_body))
})();var state__13064__auto__ = (function (){var statearr_28162 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_28162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto___28163);
return statearr_28162;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto___28163,c_body))
);
return c_body;
});

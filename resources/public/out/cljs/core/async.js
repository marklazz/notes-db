// Compiled by ClojureScript 0.0-2342
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24058 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24058 = (function (f,fn_handler,meta24059){
this.f = f;
this.fn_handler = fn_handler;
this.meta24059 = meta24059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24058.cljs$lang$type = true;
cljs.core.async.t24058.cljs$lang$ctorStr = "cljs.core.async/t24058";
cljs.core.async.t24058.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write(writer__4203__auto__,"cljs.core.async/t24058");
});
cljs.core.async.t24058.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24060){var self__ = this;
var _24060__$1 = this;return self__.meta24059;
});
cljs.core.async.t24058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24060,meta24059__$1){var self__ = this;
var _24060__$1 = this;return (new cljs.core.async.t24058(self__.f,self__.fn_handler,meta24059__$1));
});
cljs.core.async.__GT_t24058 = (function __GT_t24058(f__$1,fn_handler__$1,meta24059){return (new cljs.core.async.t24058(f__$1,fn_handler__$1,meta24059));
});
}
return (new cljs.core.async.t24058(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24062 = buff;if(G__24062)
{var bit__4289__auto__ = null;if(cljs.core.truth_((function (){var or__3626__auto__ = bit__4289__auto__;if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{return G__24062.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24062.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24062);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24062);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_24073 = (function (){var G__24070 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24070) : cljs.core.deref.call(null,G__24070));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__24071_24074 = val_24073;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24071_24074) : fn1.call(null,G__24071_24074));
} else
{cljs.core.async.impl.dispatch.run(((function (val_24073,ret){
return (function (){var G__24072 = val_24073;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24072) : fn1.call(null,G__24072));
});})(val_24073,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.cljs$core$IFn$_invoke$arity$3(port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3614__auto__ = ret;if(cljs.core.truth_(and__3614__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3614__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{(fn0.cljs$core$IFn$_invoke$arity$0 ? fn0.cljs$core$IFn$_invoke$arity$0() : fn0.call(null));
} else
{cljs.core.async.impl.dispatch.run(fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4495__auto___24082 = n;var x_24083 = (0);while(true){
if((x_24083 < n__4495__auto___24082))
{(a[x_24083] = (0));
{
var G__24084 = (x_24083 + (1));
x_24083 = G__24084;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__24085 = (i + (1));
i = G__24085;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__24093 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24093) : cljs.core.atom.call(null,G__24093));
})();if(typeof cljs.core.async.t24094 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24094 = (function (flag,alt_flag,meta24095){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24095 = meta24095;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24094.cljs$lang$type = true;
cljs.core.async.t24094.cljs$lang$ctorStr = "cljs.core.async/t24094";
cljs.core.async.t24094.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write(writer__4203__auto__,"cljs.core.async/t24094");
});})(flag))
;
cljs.core.async.t24094.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24094.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__24097 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24097) : cljs.core.deref.call(null,G__24097));
});})(flag))
;
cljs.core.async.t24094.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__24098_24100 = self__.flag;var G__24099_24101 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24098_24100,G__24099_24101) : cljs.core.reset_BANG_.call(null,G__24098_24100,G__24099_24101));
return true;
});})(flag))
;
cljs.core.async.t24094.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24096){var self__ = this;
var _24096__$1 = this;return self__.meta24095;
});})(flag))
;
cljs.core.async.t24094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24096,meta24095__$1){var self__ = this;
var _24096__$1 = this;return (new cljs.core.async.t24094(self__.flag,self__.alt_flag,meta24095__$1));
});})(flag))
;
cljs.core.async.__GT_t24094 = ((function (flag){
return (function __GT_t24094(flag__$1,alt_flag__$1,meta24095){return (new cljs.core.async.t24094(flag__$1,alt_flag__$1,meta24095));
});})(flag))
;
}
return (new cljs.core.async.t24094(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24105 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24105 = (function (cb,flag,alt_handler,meta24106){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24106 = meta24106;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24105.cljs$lang$type = true;
cljs.core.async.t24105.cljs$lang$ctorStr = "cljs.core.async/t24105";
cljs.core.async.t24105.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write(writer__4203__auto__,"cljs.core.async/t24105");
});
cljs.core.async.t24105.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24105.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t24105.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t24105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24107){var self__ = this;
var _24107__$1 = this;return self__.meta24106;
});
cljs.core.async.t24105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24107,meta24106__$1){var self__ = this;
var _24107__$1 = this;return (new cljs.core.async.t24105(self__.cb,self__.flag,self__.alt_handler,meta24106__$1));
});
cljs.core.async.__GT_t24105 = (function __GT_t24105(cb__$1,flag__$1,alt_handler__$1,meta24106){return (new cljs.core.async.t24105(cb__$1,flag__$1,alt_handler__$1,meta24106));
});
}
return (new cljs.core.async.t24105(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__24114 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24114) : port.call(null,G__24114));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__24115 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24115) : port.call(null,G__24115));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){var G__24116 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24116) : fret.call(null,G__24116));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24108_SHARP_){var G__24117 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24108_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24117) : fret.call(null,G__24117));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24118 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24118) : cljs.core.deref.call(null,G__24118));
})(),(function (){var or__3626__auto__ = wport;if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__24119 = (i + (1));
i = G__24119;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3626__auto__ = ret;if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7))
{var temp__4126__auto__ = (function (){var and__3614__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3614__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3614__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__24120){var map__24122 = p__24120;var map__24122__$1 = ((cljs.core.seq_QMARK_(map__24122))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24122):map__24122);var opts = map__24122__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__24120 = null;if (arguments.length > 1) {
  p__24120 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24120);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24123){
var ports = cljs.core.first(arglist__24123);
var p__24120 = cljs.core.rest(arglist__24123);
return alts_BANG___delegate(ports,p__24120);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24137 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24137 = (function (ch,f,map_LT_,meta24138){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24138 = meta24138;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24137.cljs$lang$type = true;
cljs.core.async.t24137.cljs$lang$ctorStr = "cljs.core.async/t24137";
cljs.core.async.t24137.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write(writer__4203__auto__,"cljs.core.async/t24137");
});
cljs.core.async.t24137.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24137.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t24137.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24137.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t24140 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24140 = (function (fn1,_,meta24138,ch,f,map_LT_,meta24141){
this.fn1 = fn1;
this._ = _;
this.meta24138 = meta24138;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24141 = meta24141;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24140.cljs$lang$type = true;
cljs.core.async.t24140.cljs$lang$ctorStr = "cljs.core.async/t24140";
cljs.core.async.t24140.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write(writer__4203__auto__,"cljs.core.async/t24140");
});})(___$1))
;
cljs.core.async.t24140.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t24140.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var G__24143 = self__.fn1;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(G__24143) : cljs.core.async.impl.protocols.lock_id.call(null,G__24143));
});})(___$1))
;
cljs.core.async.t24140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__24124_SHARP_){var G__24144 = (((p1__24124_SHARP_ == null))?null:(function (){var G__24145 = p1__24124_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24145) : self__.f.call(null,G__24145));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__24144) : f1.call(null,G__24144));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t24140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24142){var self__ = this;
var _24142__$1 = this;return self__.meta24141;
});})(___$1))
;
cljs.core.async.t24140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24142,meta24141__$1){var self__ = this;
var _24142__$1 = this;return (new cljs.core.async.t24140(self__.fn1,self__._,self__.meta24138,self__.ch,self__.f,self__.map_LT_,meta24141__$1));
});})(___$1))
;
cljs.core.async.__GT_t24140 = ((function (___$1){
return (function __GT_t24140(fn1__$1,___$2,meta24138__$1,ch__$2,f__$2,map_LT___$2,meta24141){return (new cljs.core.async.t24140(fn1__$1,___$2,meta24138__$1,ch__$2,f__$2,map_LT___$2,meta24141));
});})(___$1))
;
}
return (new cljs.core.async.t24140(fn1,___$1,self__.meta24138,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3614__auto__ = ret;if(cljs.core.truth_(and__3614__auto__))
{return !(((function (){var G__24146 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24146) : cljs.core.deref.call(null,G__24146));
})() == null));
} else
{return and__3614__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__24147 = (function (){var G__24148 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24148) : cljs.core.deref.call(null,G__24148));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24147) : self__.f.call(null,G__24147));
})());
} else
{return ret;
}
});
cljs.core.async.t24137.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24137.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24139){var self__ = this;
var _24139__$1 = this;return self__.meta24138;
});
cljs.core.async.t24137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24139,meta24138__$1){var self__ = this;
var _24139__$1 = this;return (new cljs.core.async.t24137(self__.ch,self__.f,self__.map_LT_,meta24138__$1));
});
cljs.core.async.__GT_t24137 = (function __GT_t24137(ch__$1,f__$1,map_LT___$1,meta24138){return (new cljs.core.async.t24137(ch__$1,f__$1,map_LT___$1,meta24138));
});
}
return (new cljs.core.async.t24137(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24153 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24153 = (function (ch,f,map_GT_,meta24154){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24154 = meta24154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24153.cljs$lang$type = true;
cljs.core.async.t24153.cljs$lang$ctorStr = "cljs.core.async/t24153";
cljs.core.async.t24153.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write(writer__4203__auto__,"cljs.core.async/t24153");
});
cljs.core.async.t24153.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24153.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__24156 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24156) : self__.f.call(null,G__24156));
})(),fn0);
});
cljs.core.async.t24153.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24153.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24153.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24153.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24155){var self__ = this;
var _24155__$1 = this;return self__.meta24154;
});
cljs.core.async.t24153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24155,meta24154__$1){var self__ = this;
var _24155__$1 = this;return (new cljs.core.async.t24153(self__.ch,self__.f,self__.map_GT_,meta24154__$1));
});
cljs.core.async.__GT_t24153 = (function __GT_t24153(ch__$1,f__$1,map_GT___$1,meta24154){return (new cljs.core.async.t24153(ch__$1,f__$1,map_GT___$1,meta24154));
});
}
return (new cljs.core.async.t24153(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24161 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24161 = (function (ch,p,filter_GT_,meta24162){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24162 = meta24162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24161.cljs$lang$type = true;
cljs.core.async.t24161.cljs$lang$ctorStr = "cljs.core.async/t24161";
cljs.core.async.t24161.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write(writer__4203__auto__,"cljs.core.async/t24161");
});
cljs.core.async.t24161.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24161.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__24164 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__24164) : self__.p.call(null,G__24164));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t24161.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24161.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24161.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24161.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24163){var self__ = this;
var _24163__$1 = this;return self__.meta24162;
});
cljs.core.async.t24161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24163,meta24162__$1){var self__ = this;
var _24163__$1 = this;return (new cljs.core.async.t24161(self__.ch,self__.p,self__.filter_GT_,meta24162__$1));
});
cljs.core.async.__GT_t24161 = (function __GT_t24161(ch__$1,p__$1,filter_GT___$1,meta24162){return (new cljs.core.async.t24161(ch__$1,p__$1,filter_GT___$1,meta24162));
});
}
return (new cljs.core.async.t24161(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__13062__auto___24252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto___24252,out){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto___24252,out){
return (function (state_24230){var state_val_24231 = (state_24230[(1)]);if((state_val_24231 === (7)))
{var inst_24226 = (state_24230[(2)]);var state_24230__$1 = state_24230;var statearr_24232_24253 = state_24230__$1;(statearr_24232_24253[(2)] = inst_24226);
(statearr_24232_24253[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24231 === (1)))
{var state_24230__$1 = state_24230;var statearr_24233_24254 = state_24230__$1;(statearr_24233_24254[(2)] = null);
(statearr_24233_24254[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24231 === (4)))
{var inst_24212 = (state_24230[(7)]);var inst_24212__$1 = (state_24230[(2)]);var inst_24213 = (inst_24212__$1 == null);var state_24230__$1 = (function (){var statearr_24234 = state_24230;(statearr_24234[(7)] = inst_24212__$1);
return statearr_24234;
})();if(cljs.core.truth_(inst_24213))
{var statearr_24235_24255 = state_24230__$1;(statearr_24235_24255[(1)] = (5));
} else
{var statearr_24236_24256 = state_24230__$1;(statearr_24236_24256[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24231 === (6)))
{var inst_24212 = (state_24230[(7)]);var inst_24217 = (function (){var G__24237 = inst_24212;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24237) : p.call(null,G__24237));
})();var state_24230__$1 = state_24230;if(cljs.core.truth_(inst_24217))
{var statearr_24238_24257 = state_24230__$1;(statearr_24238_24257[(1)] = (8));
} else
{var statearr_24239_24258 = state_24230__$1;(statearr_24239_24258[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24231 === (3)))
{var inst_24228 = (state_24230[(2)]);var state_24230__$1 = state_24230;return cljs.core.async.impl.ioc_helpers.return_chan(state_24230__$1,inst_24228);
} else
{if((state_val_24231 === (2)))
{var state_24230__$1 = state_24230;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24230__$1,(4),ch);
} else
{if((state_val_24231 === (11)))
{var inst_24220 = (state_24230[(2)]);var state_24230__$1 = state_24230;var statearr_24240_24259 = state_24230__$1;(statearr_24240_24259[(2)] = inst_24220);
(statearr_24240_24259[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24231 === (9)))
{var state_24230__$1 = state_24230;var statearr_24241_24260 = state_24230__$1;(statearr_24241_24260[(2)] = null);
(statearr_24241_24260[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24231 === (5)))
{var inst_24215 = cljs.core.async.close_BANG_(out);var state_24230__$1 = state_24230;var statearr_24242_24261 = state_24230__$1;(statearr_24242_24261[(2)] = inst_24215);
(statearr_24242_24261[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24231 === (10)))
{var inst_24223 = (state_24230[(2)]);var state_24230__$1 = (function (){var statearr_24243 = state_24230;(statearr_24243[(8)] = inst_24223);
return statearr_24243;
})();var statearr_24244_24262 = state_24230__$1;(statearr_24244_24262[(2)] = null);
(statearr_24244_24262[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24231 === (8)))
{var inst_24212 = (state_24230[(7)]);var state_24230__$1 = state_24230;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24230__$1,(11),out,inst_24212);
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
});})(c__13062__auto___24252,out))
;return ((function (switch__13047__auto__,c__13062__auto___24252,out){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_24248 = [null,null,null,null,null,null,null,null,null];(statearr_24248[(0)] = state_machine__13048__auto__);
(statearr_24248[(1)] = (1));
return statearr_24248;
});
var state_machine__13048__auto____1 = (function (state_24230){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_24230);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e24249){if((e24249 instanceof Object))
{var ex__13051__auto__ = e24249;var statearr_24250_24263 = state_24230;(statearr_24250_24263[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24230);
return cljs.core.constant$keyword$18;
} else
{throw e24249;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__24264 = state_24230;
state_24230 = G__24264;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_24230){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_24230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto___24252,out))
})();var state__13064__auto__ = (function (){var statearr_24251 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_24251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto___24252);
return statearr_24251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto___24252,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13062__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto__){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto__){
return (function (state_24420){var state_val_24421 = (state_24420[(1)]);if((state_val_24421 === (7)))
{var inst_24416 = (state_24420[(2)]);var state_24420__$1 = state_24420;var statearr_24422_24460 = state_24420__$1;(statearr_24422_24460[(2)] = inst_24416);
(statearr_24422_24460[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24421 === (20)))
{var inst_24391 = (state_24420[(7)]);var inst_24402 = (state_24420[(2)]);var inst_24403 = cljs.core.next(inst_24391);var inst_24377 = inst_24403;var inst_24378 = null;var inst_24379 = (0);var inst_24380 = (0);var state_24420__$1 = (function (){var statearr_24423 = state_24420;(statearr_24423[(8)] = inst_24380);
(statearr_24423[(9)] = inst_24377);
(statearr_24423[(10)] = inst_24402);
(statearr_24423[(11)] = inst_24378);
(statearr_24423[(12)] = inst_24379);
return statearr_24423;
})();var statearr_24424_24461 = state_24420__$1;(statearr_24424_24461[(2)] = null);
(statearr_24424_24461[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24421 === (1)))
{var state_24420__$1 = state_24420;var statearr_24425_24462 = state_24420__$1;(statearr_24425_24462[(2)] = null);
(statearr_24425_24462[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24421 === (4)))
{var inst_24366 = (state_24420[(13)]);var inst_24366__$1 = (state_24420[(2)]);var inst_24367 = (inst_24366__$1 == null);var state_24420__$1 = (function (){var statearr_24429 = state_24420;(statearr_24429[(13)] = inst_24366__$1);
return statearr_24429;
})();if(cljs.core.truth_(inst_24367))
{var statearr_24430_24463 = state_24420__$1;(statearr_24430_24463[(1)] = (5));
} else
{var statearr_24431_24464 = state_24420__$1;(statearr_24431_24464[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24421 === (15)))
{var state_24420__$1 = state_24420;var statearr_24432_24465 = state_24420__$1;(statearr_24432_24465[(2)] = null);
(statearr_24432_24465[(1)] = (16));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24421 === (13)))
{var inst_24380 = (state_24420[(8)]);var inst_24377 = (state_24420[(9)]);var inst_24378 = (state_24420[(11)]);var inst_24379 = (state_24420[(12)]);var inst_24387 = (state_24420[(2)]);var inst_24388 = (inst_24380 + (1));var tmp24426 = inst_24377;var tmp24427 = inst_24378;var tmp24428 = inst_24379;var inst_24377__$1 = tmp24426;var inst_24378__$1 = tmp24427;var inst_24379__$1 = tmp24428;var inst_24380__$1 = inst_24388;var state_24420__$1 = (function (){var statearr_24433 = state_24420;(statearr_24433[(8)] = inst_24380__$1);
(statearr_24433[(14)] = inst_24387);
(statearr_24433[(9)] = inst_24377__$1);
(statearr_24433[(11)] = inst_24378__$1);
(statearr_24433[(12)] = inst_24379__$1);
return statearr_24433;
})();var statearr_24434_24466 = state_24420__$1;(statearr_24434_24466[(2)] = null);
(statearr_24434_24466[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24421 === (6)))
{var inst_24366 = (state_24420[(13)]);var inst_24371 = (function (){var G__24435 = inst_24366;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24435) : f.call(null,G__24435));
})();var inst_24376 = cljs.core.seq(inst_24371);var inst_24377 = inst_24376;var inst_24378 = null;var inst_24379 = (0);var inst_24380 = (0);var state_24420__$1 = (function (){var statearr_24436 = state_24420;(statearr_24436[(8)] = inst_24380);
(statearr_24436[(9)] = inst_24377);
(statearr_24436[(11)] = inst_24378);
(statearr_24436[(12)] = inst_24379);
return statearr_24436;
})();var statearr_24437_24467 = state_24420__$1;(statearr_24437_24467[(2)] = null);
(statearr_24437_24467[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24421 === (17)))
{var inst_24391 = (state_24420[(7)]);var inst_24395 = cljs.core.chunk_first(inst_24391);var inst_24396 = cljs.core.chunk_rest(inst_24391);var inst_24397 = cljs.core.count(inst_24395);var inst_24377 = inst_24396;var inst_24378 = inst_24395;var inst_24379 = inst_24397;var inst_24380 = (0);var state_24420__$1 = (function (){var statearr_24438 = state_24420;(statearr_24438[(8)] = inst_24380);
(statearr_24438[(9)] = inst_24377);
(statearr_24438[(11)] = inst_24378);
(statearr_24438[(12)] = inst_24379);
return statearr_24438;
})();var statearr_24439_24468 = state_24420__$1;(statearr_24439_24468[(2)] = null);
(statearr_24439_24468[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24421 === (3)))
{var inst_24418 = (state_24420[(2)]);var state_24420__$1 = state_24420;return cljs.core.async.impl.ioc_helpers.return_chan(state_24420__$1,inst_24418);
} else
{if((state_val_24421 === (12)))
{var inst_24411 = (state_24420[(2)]);var state_24420__$1 = state_24420;var statearr_24440_24469 = state_24420__$1;(statearr_24440_24469[(2)] = inst_24411);
(statearr_24440_24469[(1)] = (9));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24421 === (2)))
{var state_24420__$1 = state_24420;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24420__$1,(4),in$);
} else
{if((state_val_24421 === (19)))
{var inst_24406 = (state_24420[(2)]);var state_24420__$1 = state_24420;var statearr_24441_24470 = state_24420__$1;(statearr_24441_24470[(2)] = inst_24406);
(statearr_24441_24470[(1)] = (16));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24421 === (11)))
{var inst_24391 = (state_24420[(7)]);var inst_24377 = (state_24420[(9)]);var inst_24391__$1 = cljs.core.seq(inst_24377);var state_24420__$1 = (function (){var statearr_24442 = state_24420;(statearr_24442[(7)] = inst_24391__$1);
return statearr_24442;
})();if(inst_24391__$1)
{var statearr_24443_24471 = state_24420__$1;(statearr_24443_24471[(1)] = (14));
} else
{var statearr_24444_24472 = state_24420__$1;(statearr_24444_24472[(1)] = (15));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24421 === (9)))
{var inst_24413 = (state_24420[(2)]);var state_24420__$1 = (function (){var statearr_24445 = state_24420;(statearr_24445[(15)] = inst_24413);
return statearr_24445;
})();var statearr_24446_24473 = state_24420__$1;(statearr_24446_24473[(2)] = null);
(statearr_24446_24473[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24421 === (5)))
{var inst_24369 = cljs.core.async.close_BANG_(out);var state_24420__$1 = state_24420;var statearr_24447_24474 = state_24420__$1;(statearr_24447_24474[(2)] = inst_24369);
(statearr_24447_24474[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24421 === (14)))
{var inst_24391 = (state_24420[(7)]);var inst_24393 = cljs.core.chunked_seq_QMARK_(inst_24391);var state_24420__$1 = state_24420;if(inst_24393)
{var statearr_24448_24475 = state_24420__$1;(statearr_24448_24475[(1)] = (17));
} else
{var statearr_24449_24476 = state_24420__$1;(statearr_24449_24476[(1)] = (18));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24421 === (16)))
{var inst_24409 = (state_24420[(2)]);var state_24420__$1 = state_24420;var statearr_24450_24477 = state_24420__$1;(statearr_24450_24477[(2)] = inst_24409);
(statearr_24450_24477[(1)] = (12));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24421 === (10)))
{var inst_24380 = (state_24420[(8)]);var inst_24378 = (state_24420[(11)]);var inst_24385 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24378,inst_24380);var state_24420__$1 = state_24420;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24420__$1,(13),out,inst_24385);
} else
{if((state_val_24421 === (18)))
{var inst_24391 = (state_24420[(7)]);var inst_24400 = cljs.core.first(inst_24391);var state_24420__$1 = state_24420;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24420__$1,(20),out,inst_24400);
} else
{if((state_val_24421 === (8)))
{var inst_24380 = (state_24420[(8)]);var inst_24379 = (state_24420[(12)]);var inst_24382 = (inst_24380 < inst_24379);var inst_24383 = inst_24382;var state_24420__$1 = state_24420;if(cljs.core.truth_(inst_24383))
{var statearr_24451_24478 = state_24420__$1;(statearr_24451_24478[(1)] = (10));
} else
{var statearr_24452_24479 = state_24420__$1;(statearr_24452_24479[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
});})(c__13062__auto__))
;return ((function (switch__13047__auto__,c__13062__auto__){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_24456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24456[(0)] = state_machine__13048__auto__);
(statearr_24456[(1)] = (1));
return statearr_24456;
});
var state_machine__13048__auto____1 = (function (state_24420){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_24420);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e24457){if((e24457 instanceof Object))
{var ex__13051__auto__ = e24457;var statearr_24458_24480 = state_24420;(statearr_24458_24480[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24420);
return cljs.core.constant$keyword$18;
} else
{throw e24457;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__24481 = state_24420;
state_24420 = G__24481;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_24420){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_24420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto__))
})();var state__13064__auto__ = (function (){var statearr_24459 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_24459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto__);
return statearr_24459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto__))
);
return c__13062__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__13062__auto___24571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto___24571){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto___24571){
return (function (state_24550){var state_val_24551 = (state_24550[(1)]);if((state_val_24551 === (7)))
{var inst_24546 = (state_24550[(2)]);var state_24550__$1 = state_24550;var statearr_24552_24572 = state_24550__$1;(statearr_24552_24572[(2)] = inst_24546);
(statearr_24552_24572[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24551 === (1)))
{var state_24550__$1 = state_24550;var statearr_24553_24573 = state_24550__$1;(statearr_24553_24573[(2)] = null);
(statearr_24553_24573[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24551 === (4)))
{var inst_24533 = (state_24550[(7)]);var inst_24533__$1 = (state_24550[(2)]);var inst_24534 = (inst_24533__$1 == null);var state_24550__$1 = (function (){var statearr_24554 = state_24550;(statearr_24554[(7)] = inst_24533__$1);
return statearr_24554;
})();if(cljs.core.truth_(inst_24534))
{var statearr_24555_24574 = state_24550__$1;(statearr_24555_24574[(1)] = (5));
} else
{var statearr_24556_24575 = state_24550__$1;(statearr_24556_24575[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24551 === (6)))
{var inst_24533 = (state_24550[(7)]);var state_24550__$1 = state_24550;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24550__$1,(11),to,inst_24533);
} else
{if((state_val_24551 === (3)))
{var inst_24548 = (state_24550[(2)]);var state_24550__$1 = state_24550;return cljs.core.async.impl.ioc_helpers.return_chan(state_24550__$1,inst_24548);
} else
{if((state_val_24551 === (2)))
{var state_24550__$1 = state_24550;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24550__$1,(4),from);
} else
{if((state_val_24551 === (11)))
{var inst_24543 = (state_24550[(2)]);var state_24550__$1 = (function (){var statearr_24557 = state_24550;(statearr_24557[(8)] = inst_24543);
return statearr_24557;
})();var statearr_24558_24576 = state_24550__$1;(statearr_24558_24576[(2)] = null);
(statearr_24558_24576[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24551 === (9)))
{var state_24550__$1 = state_24550;var statearr_24559_24577 = state_24550__$1;(statearr_24559_24577[(2)] = null);
(statearr_24559_24577[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24551 === (5)))
{var state_24550__$1 = state_24550;if(cljs.core.truth_(close_QMARK_))
{var statearr_24560_24578 = state_24550__$1;(statearr_24560_24578[(1)] = (8));
} else
{var statearr_24561_24579 = state_24550__$1;(statearr_24561_24579[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24551 === (10)))
{var inst_24540 = (state_24550[(2)]);var state_24550__$1 = state_24550;var statearr_24562_24580 = state_24550__$1;(statearr_24562_24580[(2)] = inst_24540);
(statearr_24562_24580[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24551 === (8)))
{var inst_24537 = cljs.core.async.close_BANG_(to);var state_24550__$1 = state_24550;var statearr_24563_24581 = state_24550__$1;(statearr_24563_24581[(2)] = inst_24537);
(statearr_24563_24581[(1)] = (10));
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
});})(c__13062__auto___24571))
;return ((function (switch__13047__auto__,c__13062__auto___24571){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_24567 = [null,null,null,null,null,null,null,null,null];(statearr_24567[(0)] = state_machine__13048__auto__);
(statearr_24567[(1)] = (1));
return statearr_24567;
});
var state_machine__13048__auto____1 = (function (state_24550){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_24550);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e24568){if((e24568 instanceof Object))
{var ex__13051__auto__ = e24568;var statearr_24569_24582 = state_24550;(statearr_24569_24582[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24550);
return cljs.core.constant$keyword$18;
} else
{throw e24568;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__24583 = state_24550;
state_24550 = G__24583;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_24550){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_24550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto___24571))
})();var state__13064__auto__ = (function (){var statearr_24570 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_24570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto___24571);
return statearr_24570;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto___24571))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__13062__auto___24676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto___24676,tc,fc){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto___24676,tc,fc){
return (function (state_24653){var state_val_24654 = (state_24653[(1)]);if((state_val_24654 === (7)))
{var inst_24649 = (state_24653[(2)]);var state_24653__$1 = state_24653;var statearr_24655_24677 = state_24653__$1;(statearr_24655_24677[(2)] = inst_24649);
(statearr_24655_24677[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24654 === (1)))
{var state_24653__$1 = state_24653;var statearr_24656_24678 = state_24653__$1;(statearr_24656_24678[(2)] = null);
(statearr_24656_24678[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24654 === (4)))
{var inst_24634 = (state_24653[(7)]);var inst_24634__$1 = (state_24653[(2)]);var inst_24635 = (inst_24634__$1 == null);var state_24653__$1 = (function (){var statearr_24657 = state_24653;(statearr_24657[(7)] = inst_24634__$1);
return statearr_24657;
})();if(cljs.core.truth_(inst_24635))
{var statearr_24658_24679 = state_24653__$1;(statearr_24658_24679[(1)] = (5));
} else
{var statearr_24659_24680 = state_24653__$1;(statearr_24659_24680[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24654 === (6)))
{var inst_24634 = (state_24653[(7)]);var inst_24640 = (function (){var G__24660 = inst_24634;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24660) : p.call(null,G__24660));
})();var state_24653__$1 = state_24653;if(cljs.core.truth_(inst_24640))
{var statearr_24661_24681 = state_24653__$1;(statearr_24661_24681[(1)] = (9));
} else
{var statearr_24662_24682 = state_24653__$1;(statearr_24662_24682[(1)] = (10));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24654 === (3)))
{var inst_24651 = (state_24653[(2)]);var state_24653__$1 = state_24653;return cljs.core.async.impl.ioc_helpers.return_chan(state_24653__$1,inst_24651);
} else
{if((state_val_24654 === (2)))
{var state_24653__$1 = state_24653;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24653__$1,(4),ch);
} else
{if((state_val_24654 === (11)))
{var inst_24634 = (state_24653[(7)]);var inst_24644 = (state_24653[(2)]);var state_24653__$1 = state_24653;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24653__$1,(8),inst_24644,inst_24634);
} else
{if((state_val_24654 === (9)))
{var state_24653__$1 = state_24653;var statearr_24663_24683 = state_24653__$1;(statearr_24663_24683[(2)] = tc);
(statearr_24663_24683[(1)] = (11));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24654 === (5)))
{var inst_24637 = cljs.core.async.close_BANG_(tc);var inst_24638 = cljs.core.async.close_BANG_(fc);var state_24653__$1 = (function (){var statearr_24664 = state_24653;(statearr_24664[(8)] = inst_24637);
return statearr_24664;
})();var statearr_24665_24684 = state_24653__$1;(statearr_24665_24684[(2)] = inst_24638);
(statearr_24665_24684[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24654 === (10)))
{var state_24653__$1 = state_24653;var statearr_24666_24685 = state_24653__$1;(statearr_24666_24685[(2)] = fc);
(statearr_24666_24685[(1)] = (11));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24654 === (8)))
{var inst_24646 = (state_24653[(2)]);var state_24653__$1 = (function (){var statearr_24667 = state_24653;(statearr_24667[(9)] = inst_24646);
return statearr_24667;
})();var statearr_24668_24686 = state_24653__$1;(statearr_24668_24686[(2)] = null);
(statearr_24668_24686[(1)] = (2));
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
});})(c__13062__auto___24676,tc,fc))
;return ((function (switch__13047__auto__,c__13062__auto___24676,tc,fc){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_24672 = [null,null,null,null,null,null,null,null,null,null];(statearr_24672[(0)] = state_machine__13048__auto__);
(statearr_24672[(1)] = (1));
return statearr_24672;
});
var state_machine__13048__auto____1 = (function (state_24653){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_24653);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e24673){if((e24673 instanceof Object))
{var ex__13051__auto__ = e24673;var statearr_24674_24687 = state_24653;(statearr_24674_24687[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24653);
return cljs.core.constant$keyword$18;
} else
{throw e24673;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__24688 = state_24653;
state_24653 = G__24688;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_24653){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_24653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto___24676,tc,fc))
})();var state__13064__auto__ = (function (){var statearr_24675 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_24675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto___24676);
return statearr_24675;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto___24676,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13062__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto__){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto__){
return (function (state_24737){var state_val_24738 = (state_24737[(1)]);if((state_val_24738 === (7)))
{var inst_24733 = (state_24737[(2)]);var state_24737__$1 = state_24737;var statearr_24739_24757 = state_24737__$1;(statearr_24739_24757[(2)] = inst_24733);
(statearr_24739_24757[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24738 === (6)))
{var inst_24726 = (state_24737[(7)]);var inst_24723 = (state_24737[(8)]);var inst_24730 = (function (){var G__24740 = inst_24723;var G__24741 = inst_24726;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24740,G__24741) : f.call(null,G__24740,G__24741));
})();var inst_24723__$1 = inst_24730;var state_24737__$1 = (function (){var statearr_24742 = state_24737;(statearr_24742[(8)] = inst_24723__$1);
return statearr_24742;
})();var statearr_24743_24758 = state_24737__$1;(statearr_24743_24758[(2)] = null);
(statearr_24743_24758[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24738 === (5)))
{var inst_24723 = (state_24737[(8)]);var state_24737__$1 = state_24737;var statearr_24744_24759 = state_24737__$1;(statearr_24744_24759[(2)] = inst_24723);
(statearr_24744_24759[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24738 === (4)))
{var inst_24726 = (state_24737[(7)]);var inst_24726__$1 = (state_24737[(2)]);var inst_24727 = (inst_24726__$1 == null);var state_24737__$1 = (function (){var statearr_24745 = state_24737;(statearr_24745[(7)] = inst_24726__$1);
return statearr_24745;
})();if(cljs.core.truth_(inst_24727))
{var statearr_24746_24760 = state_24737__$1;(statearr_24746_24760[(1)] = (5));
} else
{var statearr_24747_24761 = state_24737__$1;(statearr_24747_24761[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24738 === (3)))
{var inst_24735 = (state_24737[(2)]);var state_24737__$1 = state_24737;return cljs.core.async.impl.ioc_helpers.return_chan(state_24737__$1,inst_24735);
} else
{if((state_val_24738 === (2)))
{var state_24737__$1 = state_24737;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24737__$1,(4),ch);
} else
{if((state_val_24738 === (1)))
{var inst_24723 = init;var state_24737__$1 = (function (){var statearr_24748 = state_24737;(statearr_24748[(8)] = inst_24723);
return statearr_24748;
})();var statearr_24749_24762 = state_24737__$1;(statearr_24749_24762[(2)] = null);
(statearr_24749_24762[(1)] = (2));
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
});})(c__13062__auto__))
;return ((function (switch__13047__auto__,c__13062__auto__){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_24753 = [null,null,null,null,null,null,null,null,null];(statearr_24753[(0)] = state_machine__13048__auto__);
(statearr_24753[(1)] = (1));
return statearr_24753;
});
var state_machine__13048__auto____1 = (function (state_24737){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_24737);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e24754){if((e24754 instanceof Object))
{var ex__13051__auto__ = e24754;var statearr_24755_24763 = state_24737;(statearr_24755_24763[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24737);
return cljs.core.constant$keyword$18;
} else
{throw e24754;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__24764 = state_24737;
state_24737 = G__24764;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_24737){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_24737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto__))
})();var state__13064__auto__ = (function (){var statearr_24756 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_24756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto__);
return statearr_24756;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto__))
);
return c__13062__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13062__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto__){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto__){
return (function (state_24829){var state_val_24830 = (state_24829[(1)]);if((state_val_24830 === (7)))
{var inst_24810 = (state_24829[(7)]);var inst_24815 = (state_24829[(2)]);var inst_24816 = cljs.core.next(inst_24810);var inst_24810__$1 = inst_24816;var state_24829__$1 = (function (){var statearr_24831 = state_24829;(statearr_24831[(8)] = inst_24815);
(statearr_24831[(7)] = inst_24810__$1);
return statearr_24831;
})();var statearr_24832_24850 = state_24829__$1;(statearr_24832_24850[(2)] = null);
(statearr_24832_24850[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24830 === (1)))
{var inst_24809 = cljs.core.seq(coll);var inst_24810 = inst_24809;var state_24829__$1 = (function (){var statearr_24833 = state_24829;(statearr_24833[(7)] = inst_24810);
return statearr_24833;
})();var statearr_24834_24851 = state_24829__$1;(statearr_24834_24851[(2)] = null);
(statearr_24834_24851[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24830 === (4)))
{var inst_24810 = (state_24829[(7)]);var inst_24813 = cljs.core.first(inst_24810);var state_24829__$1 = state_24829;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24829__$1,(7),ch,inst_24813);
} else
{if((state_val_24830 === (6)))
{var inst_24825 = (state_24829[(2)]);var state_24829__$1 = state_24829;var statearr_24835_24852 = state_24829__$1;(statearr_24835_24852[(2)] = inst_24825);
(statearr_24835_24852[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24830 === (3)))
{var inst_24827 = (state_24829[(2)]);var state_24829__$1 = state_24829;return cljs.core.async.impl.ioc_helpers.return_chan(state_24829__$1,inst_24827);
} else
{if((state_val_24830 === (2)))
{var inst_24810 = (state_24829[(7)]);var state_24829__$1 = state_24829;if(cljs.core.truth_(inst_24810))
{var statearr_24836_24853 = state_24829__$1;(statearr_24836_24853[(1)] = (4));
} else
{var statearr_24837_24854 = state_24829__$1;(statearr_24837_24854[(1)] = (5));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24830 === (9)))
{var state_24829__$1 = state_24829;var statearr_24838_24855 = state_24829__$1;(statearr_24838_24855[(2)] = null);
(statearr_24838_24855[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24830 === (5)))
{var state_24829__$1 = state_24829;if(cljs.core.truth_(close_QMARK_))
{var statearr_24839_24856 = state_24829__$1;(statearr_24839_24856[(1)] = (8));
} else
{var statearr_24840_24857 = state_24829__$1;(statearr_24840_24857[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24830 === (10)))
{var inst_24823 = (state_24829[(2)]);var state_24829__$1 = state_24829;var statearr_24841_24858 = state_24829__$1;(statearr_24841_24858[(2)] = inst_24823);
(statearr_24841_24858[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24830 === (8)))
{var inst_24820 = cljs.core.async.close_BANG_(ch);var state_24829__$1 = state_24829;var statearr_24842_24859 = state_24829__$1;(statearr_24842_24859[(2)] = inst_24820);
(statearr_24842_24859[(1)] = (10));
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
});})(c__13062__auto__))
;return ((function (switch__13047__auto__,c__13062__auto__){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_24846 = [null,null,null,null,null,null,null,null,null];(statearr_24846[(0)] = state_machine__13048__auto__);
(statearr_24846[(1)] = (1));
return statearr_24846;
});
var state_machine__13048__auto____1 = (function (state_24829){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_24829);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e24847){if((e24847 instanceof Object))
{var ex__13051__auto__ = e24847;var statearr_24848_24860 = state_24829;(statearr_24848_24860[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24829);
return cljs.core.constant$keyword$18;
} else
{throw e24847;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__24861 = state_24829;
state_24829 = G__24861;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_24829){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_24829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto__))
})();var state__13064__auto__ = (function (){var statearr_24849 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_24849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto__);
return statearr_24849;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto__))
);
return c__13062__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj24863 = {};return obj24863;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3614__auto__ = _;if(and__3614__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3614__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4262__auto__ = (((_ == null))?null:_);return (function (){var or__3626__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__24867 = x__4262__auto__;return goog.typeOf(G__24867);
})()]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj24869 = {};return obj24869;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__24873 = x__4262__auto__;return goog.typeOf(G__24873);
})()]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__24877 = x__4262__auto__;return goog.typeOf(G__24877);
})()]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__24881 = x__4262__auto__;return goog.typeOf(G__24881);
})()]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__25104 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25104) : cljs.core.atom.call(null,G__25104));
})();var m = (function (){if(typeof cljs.core.async.t25105 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25105 = (function (cs,ch,mult,meta25106){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25106 = meta25106;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25105.cljs$lang$type = true;
cljs.core.async.t25105.cljs$lang$ctorStr = "cljs.core.async/t25105";
cljs.core.async.t25105.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write(writer__4203__auto__,"cljs.core.async/t25105");
});})(cs))
;
cljs.core.async.t25105.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25105.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25105.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25105.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__25108_25326 = self__.cs;var G__25109_25327 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25108_25326,G__25109_25327) : cljs.core.reset_BANG_.call(null,G__25108_25326,G__25109_25327));
return null;
});})(cs))
;
cljs.core.async.t25105.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25105.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25105.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25107){var self__ = this;
var _25107__$1 = this;return self__.meta25106;
});})(cs))
;
cljs.core.async.t25105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25107,meta25106__$1){var self__ = this;
var _25107__$1 = this;return (new cljs.core.async.t25105(self__.cs,self__.ch,self__.mult,meta25106__$1));
});})(cs))
;
cljs.core.async.__GT_t25105 = ((function (cs){
return (function __GT_t25105(cs__$1,ch__$1,mult__$1,meta25106){return (new cljs.core.async.t25105(cs__$1,ch__$1,mult__$1,meta25106));
});})(cs))
;
}
return (new cljs.core.async.t25105(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__25110 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25110) : cljs.core.atom.call(null,G__25110));
})();var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13062__auto___25328 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto___25328,cs,m,dchan,dctr,done){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto___25328,cs,m,dchan,dctr,done){
return (function (state_25240){var state_val_25241 = (state_25240[(1)]);if((state_val_25241 === (7)))
{var inst_25236 = (state_25240[(2)]);var state_25240__$1 = state_25240;var statearr_25242_25329 = state_25240__$1;(statearr_25242_25329[(2)] = inst_25236);
(statearr_25242_25329[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (20)))
{var inst_25142 = (state_25240[(7)]);var inst_25152 = cljs.core.first(inst_25142);var inst_25153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25152,(0),null);var inst_25154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25152,(1),null);var state_25240__$1 = (function (){var statearr_25243 = state_25240;(statearr_25243[(8)] = inst_25153);
return statearr_25243;
})();if(cljs.core.truth_(inst_25154))
{var statearr_25244_25330 = state_25240__$1;(statearr_25244_25330[(1)] = (22));
} else
{var statearr_25245_25331 = state_25240__$1;(statearr_25245_25331[(1)] = (23));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (27)))
{var inst_25184 = (state_25240[(9)]);var inst_25182 = (state_25240[(10)]);var inst_25189 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25182,inst_25184);var state_25240__$1 = (function (){var statearr_25246 = state_25240;(statearr_25246[(11)] = inst_25189);
return statearr_25246;
})();var statearr_25247_25332 = state_25240__$1;(statearr_25247_25332[(2)] = null);
(statearr_25247_25332[(1)] = (32));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (1)))
{var state_25240__$1 = state_25240;var statearr_25248_25333 = state_25240__$1;(statearr_25248_25333[(2)] = null);
(statearr_25248_25333[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (24)))
{var inst_25142 = (state_25240[(7)]);var inst_25159 = (state_25240[(2)]);var inst_25160 = cljs.core.next(inst_25142);var inst_25122 = inst_25160;var inst_25123 = null;var inst_25124 = (0);var inst_25125 = (0);var state_25240__$1 = (function (){var statearr_25249 = state_25240;(statearr_25249[(12)] = inst_25159);
(statearr_25249[(13)] = inst_25124);
(statearr_25249[(14)] = inst_25125);
(statearr_25249[(15)] = inst_25123);
(statearr_25249[(16)] = inst_25122);
return statearr_25249;
})();var statearr_25250_25334 = state_25240__$1;(statearr_25250_25334[(2)] = null);
(statearr_25250_25334[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (39)))
{var inst_25202 = (state_25240[(17)]);var inst_25220 = (state_25240[(2)]);var inst_25221 = cljs.core.next(inst_25202);var inst_25181 = inst_25221;var inst_25182 = null;var inst_25183 = (0);var inst_25184 = (0);var state_25240__$1 = (function (){var statearr_25254 = state_25240;(statearr_25254[(18)] = inst_25181);
(statearr_25254[(9)] = inst_25184);
(statearr_25254[(10)] = inst_25182);
(statearr_25254[(19)] = inst_25183);
(statearr_25254[(20)] = inst_25220);
return statearr_25254;
})();var statearr_25255_25335 = state_25240__$1;(statearr_25255_25335[(2)] = null);
(statearr_25255_25335[(1)] = (25));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (4)))
{var inst_25113 = (state_25240[(21)]);var inst_25113__$1 = (state_25240[(2)]);var inst_25114 = (inst_25113__$1 == null);var state_25240__$1 = (function (){var statearr_25256 = state_25240;(statearr_25256[(21)] = inst_25113__$1);
return statearr_25256;
})();if(cljs.core.truth_(inst_25114))
{var statearr_25257_25336 = state_25240__$1;(statearr_25257_25336[(1)] = (5));
} else
{var statearr_25258_25337 = state_25240__$1;(statearr_25258_25337[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (15)))
{var inst_25124 = (state_25240[(13)]);var inst_25125 = (state_25240[(14)]);var inst_25123 = (state_25240[(15)]);var inst_25122 = (state_25240[(16)]);var inst_25138 = (state_25240[(2)]);var inst_25139 = (inst_25125 + (1));var tmp25251 = inst_25124;var tmp25252 = inst_25123;var tmp25253 = inst_25122;var inst_25122__$1 = tmp25253;var inst_25123__$1 = tmp25252;var inst_25124__$1 = tmp25251;var inst_25125__$1 = inst_25139;var state_25240__$1 = (function (){var statearr_25259 = state_25240;(statearr_25259[(13)] = inst_25124__$1);
(statearr_25259[(22)] = inst_25138);
(statearr_25259[(14)] = inst_25125__$1);
(statearr_25259[(15)] = inst_25123__$1);
(statearr_25259[(16)] = inst_25122__$1);
return statearr_25259;
})();var statearr_25260_25338 = state_25240__$1;(statearr_25260_25338[(2)] = null);
(statearr_25260_25338[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (21)))
{var inst_25163 = (state_25240[(2)]);var state_25240__$1 = state_25240;var statearr_25261_25339 = state_25240__$1;(statearr_25261_25339[(2)] = inst_25163);
(statearr_25261_25339[(1)] = (18));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (31)))
{var inst_25189 = (state_25240[(11)]);var inst_25190 = (state_25240[(2)]);var inst_25191 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25192 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25189);var state_25240__$1 = (function (){var statearr_25262 = state_25240;(statearr_25262[(23)] = inst_25190);
(statearr_25262[(24)] = inst_25191);
return statearr_25262;
})();var statearr_25263_25340 = state_25240__$1;(statearr_25263_25340[(2)] = inst_25192);
cljs.core.async.impl.ioc_helpers.process_exception(state_25240__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (32)))
{var inst_25189 = (state_25240[(11)]);var inst_25113 = (state_25240[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25240,(31),Object,null,(30));var inst_25196 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25189,inst_25113,done);var state_25240__$1 = state_25240;var statearr_25264_25341 = state_25240__$1;(statearr_25264_25341[(2)] = inst_25196);
cljs.core.async.impl.ioc_helpers.process_exception(state_25240__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (40)))
{var inst_25211 = (state_25240[(25)]);var inst_25212 = (state_25240[(2)]);var inst_25213 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25214 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25211);var state_25240__$1 = (function (){var statearr_25265 = state_25240;(statearr_25265[(26)] = inst_25213);
(statearr_25265[(27)] = inst_25212);
return statearr_25265;
})();var statearr_25266_25342 = state_25240__$1;(statearr_25266_25342[(2)] = inst_25214);
cljs.core.async.impl.ioc_helpers.process_exception(state_25240__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (33)))
{var inst_25202 = (state_25240[(17)]);var inst_25204 = cljs.core.chunked_seq_QMARK_(inst_25202);var state_25240__$1 = state_25240;if(inst_25204)
{var statearr_25267_25343 = state_25240__$1;(statearr_25267_25343[(1)] = (36));
} else
{var statearr_25268_25344 = state_25240__$1;(statearr_25268_25344[(1)] = (37));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (13)))
{var inst_25132 = (state_25240[(28)]);var inst_25135 = cljs.core.async.close_BANG_(inst_25132);var state_25240__$1 = state_25240;var statearr_25269_25345 = state_25240__$1;(statearr_25269_25345[(2)] = inst_25135);
(statearr_25269_25345[(1)] = (15));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (22)))
{var inst_25153 = (state_25240[(8)]);var inst_25156 = cljs.core.async.close_BANG_(inst_25153);var state_25240__$1 = state_25240;var statearr_25270_25346 = state_25240__$1;(statearr_25270_25346[(2)] = inst_25156);
(statearr_25270_25346[(1)] = (24));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (36)))
{var inst_25202 = (state_25240[(17)]);var inst_25206 = cljs.core.chunk_first(inst_25202);var inst_25207 = cljs.core.chunk_rest(inst_25202);var inst_25208 = cljs.core.count(inst_25206);var inst_25181 = inst_25207;var inst_25182 = inst_25206;var inst_25183 = inst_25208;var inst_25184 = (0);var state_25240__$1 = (function (){var statearr_25271 = state_25240;(statearr_25271[(18)] = inst_25181);
(statearr_25271[(9)] = inst_25184);
(statearr_25271[(10)] = inst_25182);
(statearr_25271[(19)] = inst_25183);
return statearr_25271;
})();var statearr_25272_25347 = state_25240__$1;(statearr_25272_25347[(2)] = null);
(statearr_25272_25347[(1)] = (25));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (41)))
{var inst_25113 = (state_25240[(21)]);var inst_25211 = (state_25240[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25240,(40),Object,null,(39));var inst_25218 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25211,inst_25113,done);var state_25240__$1 = state_25240;var statearr_25273_25348 = state_25240__$1;(statearr_25273_25348[(2)] = inst_25218);
cljs.core.async.impl.ioc_helpers.process_exception(state_25240__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (29)))
{var inst_25229 = (state_25240[(2)]);var state_25240__$1 = state_25240;var statearr_25274_25349 = state_25240__$1;(statearr_25274_25349[(2)] = inst_25229);
(statearr_25274_25349[(1)] = (26));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (6)))
{var inst_25172 = (function (){var G__25275 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25275) : cljs.core.deref.call(null,G__25275));
})();var inst_25173 = cljs.core.keys(inst_25172);var inst_25174 = cljs.core.count(inst_25173);var inst_25175 = (function (){var G__25276 = dctr;var G__25277 = inst_25174;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25276,G__25277) : cljs.core.reset_BANG_.call(null,G__25276,G__25277));
})();var inst_25180 = cljs.core.seq(inst_25173);var inst_25181 = inst_25180;var inst_25182 = null;var inst_25183 = (0);var inst_25184 = (0);var state_25240__$1 = (function (){var statearr_25278 = state_25240;(statearr_25278[(18)] = inst_25181);
(statearr_25278[(9)] = inst_25184);
(statearr_25278[(29)] = inst_25175);
(statearr_25278[(10)] = inst_25182);
(statearr_25278[(19)] = inst_25183);
return statearr_25278;
})();var statearr_25279_25350 = state_25240__$1;(statearr_25279_25350[(2)] = null);
(statearr_25279_25350[(1)] = (25));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (28)))
{var inst_25181 = (state_25240[(18)]);var inst_25202 = (state_25240[(17)]);var inst_25202__$1 = cljs.core.seq(inst_25181);var state_25240__$1 = (function (){var statearr_25280 = state_25240;(statearr_25280[(17)] = inst_25202__$1);
return statearr_25280;
})();if(inst_25202__$1)
{var statearr_25281_25351 = state_25240__$1;(statearr_25281_25351[(1)] = (33));
} else
{var statearr_25282_25352 = state_25240__$1;(statearr_25282_25352[(1)] = (34));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (25)))
{var inst_25184 = (state_25240[(9)]);var inst_25183 = (state_25240[(19)]);var inst_25186 = (inst_25184 < inst_25183);var inst_25187 = inst_25186;var state_25240__$1 = state_25240;if(cljs.core.truth_(inst_25187))
{var statearr_25283_25353 = state_25240__$1;(statearr_25283_25353[(1)] = (27));
} else
{var statearr_25284_25354 = state_25240__$1;(statearr_25284_25354[(1)] = (28));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (34)))
{var state_25240__$1 = state_25240;var statearr_25285_25355 = state_25240__$1;(statearr_25285_25355[(2)] = null);
(statearr_25285_25355[(1)] = (35));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (17)))
{var state_25240__$1 = state_25240;var statearr_25286_25356 = state_25240__$1;(statearr_25286_25356[(2)] = null);
(statearr_25286_25356[(1)] = (18));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (3)))
{var inst_25238 = (state_25240[(2)]);var state_25240__$1 = state_25240;return cljs.core.async.impl.ioc_helpers.return_chan(state_25240__$1,inst_25238);
} else
{if((state_val_25241 === (12)))
{var inst_25168 = (state_25240[(2)]);var state_25240__$1 = state_25240;var statearr_25287_25357 = state_25240__$1;(statearr_25287_25357[(2)] = inst_25168);
(statearr_25287_25357[(1)] = (9));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (2)))
{var state_25240__$1 = state_25240;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25240__$1,(4),ch);
} else
{if((state_val_25241 === (23)))
{var state_25240__$1 = state_25240;var statearr_25288_25358 = state_25240__$1;(statearr_25288_25358[(2)] = null);
(statearr_25288_25358[(1)] = (24));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (35)))
{var inst_25227 = (state_25240[(2)]);var state_25240__$1 = state_25240;var statearr_25289_25359 = state_25240__$1;(statearr_25289_25359[(2)] = inst_25227);
(statearr_25289_25359[(1)] = (29));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (19)))
{var inst_25142 = (state_25240[(7)]);var inst_25146 = cljs.core.chunk_first(inst_25142);var inst_25147 = cljs.core.chunk_rest(inst_25142);var inst_25148 = cljs.core.count(inst_25146);var inst_25122 = inst_25147;var inst_25123 = inst_25146;var inst_25124 = inst_25148;var inst_25125 = (0);var state_25240__$1 = (function (){var statearr_25290 = state_25240;(statearr_25290[(13)] = inst_25124);
(statearr_25290[(14)] = inst_25125);
(statearr_25290[(15)] = inst_25123);
(statearr_25290[(16)] = inst_25122);
return statearr_25290;
})();var statearr_25291_25360 = state_25240__$1;(statearr_25291_25360[(2)] = null);
(statearr_25291_25360[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (11)))
{var inst_25142 = (state_25240[(7)]);var inst_25122 = (state_25240[(16)]);var inst_25142__$1 = cljs.core.seq(inst_25122);var state_25240__$1 = (function (){var statearr_25292 = state_25240;(statearr_25292[(7)] = inst_25142__$1);
return statearr_25292;
})();if(inst_25142__$1)
{var statearr_25293_25361 = state_25240__$1;(statearr_25293_25361[(1)] = (16));
} else
{var statearr_25294_25362 = state_25240__$1;(statearr_25294_25362[(1)] = (17));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (9)))
{var inst_25170 = (state_25240[(2)]);var state_25240__$1 = state_25240;var statearr_25295_25363 = state_25240__$1;(statearr_25295_25363[(2)] = inst_25170);
(statearr_25295_25363[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (5)))
{var inst_25120 = (function (){var G__25296 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25296) : cljs.core.deref.call(null,G__25296));
})();var inst_25121 = cljs.core.seq(inst_25120);var inst_25122 = inst_25121;var inst_25123 = null;var inst_25124 = (0);var inst_25125 = (0);var state_25240__$1 = (function (){var statearr_25297 = state_25240;(statearr_25297[(13)] = inst_25124);
(statearr_25297[(14)] = inst_25125);
(statearr_25297[(15)] = inst_25123);
(statearr_25297[(16)] = inst_25122);
return statearr_25297;
})();var statearr_25298_25364 = state_25240__$1;(statearr_25298_25364[(2)] = null);
(statearr_25298_25364[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (14)))
{var state_25240__$1 = state_25240;var statearr_25299_25365 = state_25240__$1;(statearr_25299_25365[(2)] = null);
(statearr_25299_25365[(1)] = (15));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (26)))
{var inst_25231 = (state_25240[(2)]);var state_25240__$1 = (function (){var statearr_25300 = state_25240;(statearr_25300[(30)] = inst_25231);
return statearr_25300;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25240__$1,(42),dchan);
} else
{if((state_val_25241 === (16)))
{var inst_25142 = (state_25240[(7)]);var inst_25144 = cljs.core.chunked_seq_QMARK_(inst_25142);var state_25240__$1 = state_25240;if(inst_25144)
{var statearr_25304_25366 = state_25240__$1;(statearr_25304_25366[(1)] = (19));
} else
{var statearr_25305_25367 = state_25240__$1;(statearr_25305_25367[(1)] = (20));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (38)))
{var inst_25224 = (state_25240[(2)]);var state_25240__$1 = state_25240;var statearr_25306_25368 = state_25240__$1;(statearr_25306_25368[(2)] = inst_25224);
(statearr_25306_25368[(1)] = (35));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (30)))
{var inst_25181 = (state_25240[(18)]);var inst_25184 = (state_25240[(9)]);var inst_25182 = (state_25240[(10)]);var inst_25183 = (state_25240[(19)]);var inst_25198 = (state_25240[(2)]);var inst_25199 = (inst_25184 + (1));var tmp25301 = inst_25181;var tmp25302 = inst_25182;var tmp25303 = inst_25183;var inst_25181__$1 = tmp25301;var inst_25182__$1 = tmp25302;var inst_25183__$1 = tmp25303;var inst_25184__$1 = inst_25199;var state_25240__$1 = (function (){var statearr_25307 = state_25240;(statearr_25307[(18)] = inst_25181__$1);
(statearr_25307[(9)] = inst_25184__$1);
(statearr_25307[(10)] = inst_25182__$1);
(statearr_25307[(19)] = inst_25183__$1);
(statearr_25307[(31)] = inst_25198);
return statearr_25307;
})();var statearr_25308_25369 = state_25240__$1;(statearr_25308_25369[(2)] = null);
(statearr_25308_25369[(1)] = (25));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (10)))
{var inst_25125 = (state_25240[(14)]);var inst_25123 = (state_25240[(15)]);var inst_25131 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25123,inst_25125);var inst_25132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25131,(0),null);var inst_25133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25131,(1),null);var state_25240__$1 = (function (){var statearr_25309 = state_25240;(statearr_25309[(28)] = inst_25132);
return statearr_25309;
})();if(cljs.core.truth_(inst_25133))
{var statearr_25310_25370 = state_25240__$1;(statearr_25310_25370[(1)] = (13));
} else
{var statearr_25311_25371 = state_25240__$1;(statearr_25311_25371[(1)] = (14));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (18)))
{var inst_25166 = (state_25240[(2)]);var state_25240__$1 = state_25240;var statearr_25312_25372 = state_25240__$1;(statearr_25312_25372[(2)] = inst_25166);
(statearr_25312_25372[(1)] = (12));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (42)))
{var inst_25233 = (state_25240[(2)]);var state_25240__$1 = (function (){var statearr_25313 = state_25240;(statearr_25313[(32)] = inst_25233);
return statearr_25313;
})();var statearr_25314_25373 = state_25240__$1;(statearr_25314_25373[(2)] = null);
(statearr_25314_25373[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (37)))
{var inst_25202 = (state_25240[(17)]);var inst_25211 = cljs.core.first(inst_25202);var state_25240__$1 = (function (){var statearr_25315 = state_25240;(statearr_25315[(25)] = inst_25211);
return statearr_25315;
})();var statearr_25316_25374 = state_25240__$1;(statearr_25316_25374[(2)] = null);
(statearr_25316_25374[(1)] = (41));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25241 === (8)))
{var inst_25124 = (state_25240[(13)]);var inst_25125 = (state_25240[(14)]);var inst_25127 = (inst_25125 < inst_25124);var inst_25128 = inst_25127;var state_25240__$1 = state_25240;if(cljs.core.truth_(inst_25128))
{var statearr_25317_25375 = state_25240__$1;(statearr_25317_25375[(1)] = (10));
} else
{var statearr_25318_25376 = state_25240__$1;(statearr_25318_25376[(1)] = (11));
}
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
}
}
}
}
}
}
});})(c__13062__auto___25328,cs,m,dchan,dctr,done))
;return ((function (switch__13047__auto__,c__13062__auto___25328,cs,m,dchan,dctr,done){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_25322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25322[(0)] = state_machine__13048__auto__);
(statearr_25322[(1)] = (1));
return statearr_25322;
});
var state_machine__13048__auto____1 = (function (state_25240){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_25240);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e25323){if((e25323 instanceof Object))
{var ex__13051__auto__ = e25323;var statearr_25324_25377 = state_25240;(statearr_25324_25377[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25240);
return cljs.core.constant$keyword$18;
} else
{throw e25323;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__25378 = state_25240;
state_25240 = G__25378;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_25240){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_25240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto___25328,cs,m,dchan,dctr,done))
})();var state__13064__auto__ = (function (){var statearr_25325 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_25325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto___25328);
return statearr_25325;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto___25328,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj25383 = {};return obj25383;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__25387 = x__4262__auto__;return goog.typeOf(G__25387);
})()]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__25391 = x__4262__auto__;return goog.typeOf(G__25391);
})()]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__25395 = x__4262__auto__;return goog.typeOf(G__25395);
})()]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__25399 = x__4262__auto__;return goog.typeOf(G__25399);
})()]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__25403 = x__4262__auto__;return goog.typeOf(G__25403);
})()]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__25527 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25527) : cljs.core.atom.call(null,G__25527));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,null,cljs.core.constant$keyword$26,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$27);var solo_mode = (function (){var G__25528 = cljs.core.constant$keyword$26;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25528) : cljs.core.atom.call(null,G__25528));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__25529 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__25529) : attr.call(null,G__25529));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__25530 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25530) : cljs.core.deref.call(null,G__25530));
})();var mode = (function (){var G__25531 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25531) : cljs.core.deref.call(null,G__25531));
})();var solos = pick(cljs.core.constant$keyword$27,chs);var pauses = pick(cljs.core.constant$keyword$25,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$28,solos,cljs.core.constant$keyword$29,pick(cljs.core.constant$keyword$26,chs),cljs.core.constant$keyword$30,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$25)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25532 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25532 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25533){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25533 = meta25533;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25532.cljs$lang$type = true;
cljs.core.async.t25532.cljs$lang$ctorStr = "cljs.core.async/t25532";
cljs.core.async.t25532.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write(writer__4203__auto__,"cljs.core.async/t25532");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25532.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25532.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25532.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25532.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__25535_25650 = self__.cs;var G__25536_25651 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25535_25650,G__25536_25651) : cljs.core.reset_BANG_.call(null,G__25535_25650,G__25536_25651));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25532.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25532.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__25537 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__25537) : self__.solo_modes.call(null,G__25537));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__25538_25652 = self__.solo_mode;var G__25539_25653 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25538_25652,G__25539_25653) : cljs.core.reset_BANG_.call(null,G__25538_25652,G__25539_25653));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25532.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25532.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25532.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25534){var self__ = this;
var _25534__$1 = this;return self__.meta25533;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25534,meta25533__$1){var self__ = this;
var _25534__$1 = this;return (new cljs.core.async.t25532(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25533__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25532 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25532(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25533){return (new cljs.core.async.t25532(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25533));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25532(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__13062__auto___25654 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto___25654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto___25654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25606){var state_val_25607 = (state_25606[(1)]);if((state_val_25607 === (7)))
{var inst_25553 = (state_25606[(7)]);var inst_25558 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25553);var state_25606__$1 = state_25606;var statearr_25608_25655 = state_25606__$1;(statearr_25608_25655[(2)] = inst_25558);
(statearr_25608_25655[(1)] = (9));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25607 === (20)))
{var inst_25568 = (state_25606[(8)]);var state_25606__$1 = state_25606;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25606__$1,(23),out,inst_25568);
} else
{if((state_val_25607 === (1)))
{var inst_25543 = (state_25606[(9)]);var inst_25543__$1 = calc_state();var inst_25544 = cljs.core.seq_QMARK_(inst_25543__$1);var state_25606__$1 = (function (){var statearr_25609 = state_25606;(statearr_25609[(9)] = inst_25543__$1);
return statearr_25609;
})();if(inst_25544)
{var statearr_25610_25656 = state_25606__$1;(statearr_25610_25656[(1)] = (2));
} else
{var statearr_25611_25657 = state_25606__$1;(statearr_25611_25657[(1)] = (3));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25607 === (4)))
{var inst_25543 = (state_25606[(9)]);var inst_25549 = (state_25606[(2)]);var inst_25550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25549,cljs.core.constant$keyword$30);var inst_25551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25549,cljs.core.constant$keyword$29);var inst_25552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25549,cljs.core.constant$keyword$28);var inst_25553 = inst_25543;var state_25606__$1 = (function (){var statearr_25612 = state_25606;(statearr_25612[(10)] = inst_25550);
(statearr_25612[(11)] = inst_25551);
(statearr_25612[(7)] = inst_25553);
(statearr_25612[(12)] = inst_25552);
return statearr_25612;
})();var statearr_25613_25658 = state_25606__$1;(statearr_25613_25658[(2)] = null);
(statearr_25613_25658[(1)] = (5));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25607 === (15)))
{var state_25606__$1 = state_25606;var statearr_25614_25659 = state_25606__$1;(statearr_25614_25659[(2)] = null);
(statearr_25614_25659[(1)] = (16));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25607 === (21)))
{var state_25606__$1 = state_25606;var statearr_25615_25660 = state_25606__$1;(statearr_25615_25660[(2)] = null);
(statearr_25615_25660[(1)] = (22));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25607 === (13)))
{var inst_25602 = (state_25606[(2)]);var state_25606__$1 = state_25606;var statearr_25616_25661 = state_25606__$1;(statearr_25616_25661[(2)] = inst_25602);
(statearr_25616_25661[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25607 === (22)))
{var inst_25561 = (state_25606[(13)]);var inst_25599 = (state_25606[(2)]);var inst_25553 = inst_25561;var state_25606__$1 = (function (){var statearr_25617 = state_25606;(statearr_25617[(7)] = inst_25553);
(statearr_25617[(14)] = inst_25599);
return statearr_25617;
})();var statearr_25618_25662 = state_25606__$1;(statearr_25618_25662[(2)] = null);
(statearr_25618_25662[(1)] = (5));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25607 === (6)))
{var inst_25604 = (state_25606[(2)]);var state_25606__$1 = state_25606;return cljs.core.async.impl.ioc_helpers.return_chan(state_25606__$1,inst_25604);
} else
{if((state_val_25607 === (17)))
{var inst_25584 = (state_25606[(15)]);var state_25606__$1 = state_25606;var statearr_25619_25663 = state_25606__$1;(statearr_25619_25663[(2)] = inst_25584);
(statearr_25619_25663[(1)] = (19));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25607 === (3)))
{var inst_25543 = (state_25606[(9)]);var state_25606__$1 = state_25606;var statearr_25620_25664 = state_25606__$1;(statearr_25620_25664[(2)] = inst_25543);
(statearr_25620_25664[(1)] = (4));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25607 === (12)))
{var inst_25569 = (state_25606[(16)]);var inst_25584 = (state_25606[(15)]);var inst_25564 = (state_25606[(17)]);var inst_25584__$1 = (function (){var G__25621 = inst_25569;return (inst_25564.cljs$core$IFn$_invoke$arity$1 ? inst_25564.cljs$core$IFn$_invoke$arity$1(G__25621) : inst_25564.call(null,G__25621));
})();var state_25606__$1 = (function (){var statearr_25622 = state_25606;(statearr_25622[(15)] = inst_25584__$1);
return statearr_25622;
})();if(cljs.core.truth_(inst_25584__$1))
{var statearr_25623_25665 = state_25606__$1;(statearr_25623_25665[(1)] = (17));
} else
{var statearr_25624_25666 = state_25606__$1;(statearr_25624_25666[(1)] = (18));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25607 === (2)))
{var inst_25543 = (state_25606[(9)]);var inst_25546 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25543);var state_25606__$1 = state_25606;var statearr_25625_25667 = state_25606__$1;(statearr_25625_25667[(2)] = inst_25546);
(statearr_25625_25667[(1)] = (4));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25607 === (23)))
{var inst_25596 = (state_25606[(2)]);var state_25606__$1 = state_25606;var statearr_25626_25668 = state_25606__$1;(statearr_25626_25668[(2)] = inst_25596);
(statearr_25626_25668[(1)] = (22));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25607 === (19)))
{var inst_25593 = (state_25606[(2)]);var state_25606__$1 = state_25606;if(cljs.core.truth_(inst_25593))
{var statearr_25627_25669 = state_25606__$1;(statearr_25627_25669[(1)] = (20));
} else
{var statearr_25628_25670 = state_25606__$1;(statearr_25628_25670[(1)] = (21));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25607 === (11)))
{var inst_25568 = (state_25606[(8)]);var inst_25574 = (inst_25568 == null);var state_25606__$1 = state_25606;if(cljs.core.truth_(inst_25574))
{var statearr_25629_25671 = state_25606__$1;(statearr_25629_25671[(1)] = (14));
} else
{var statearr_25630_25672 = state_25606__$1;(statearr_25630_25672[(1)] = (15));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25607 === (9)))
{var inst_25561 = (state_25606[(13)]);var inst_25561__$1 = (state_25606[(2)]);var inst_25562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25561__$1,cljs.core.constant$keyword$30);var inst_25563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25561__$1,cljs.core.constant$keyword$29);var inst_25564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25561__$1,cljs.core.constant$keyword$28);var state_25606__$1 = (function (){var statearr_25631 = state_25606;(statearr_25631[(17)] = inst_25564);
(statearr_25631[(18)] = inst_25563);
(statearr_25631[(13)] = inst_25561__$1);
return statearr_25631;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25606__$1,(10),inst_25562);
} else
{if((state_val_25607 === (5)))
{var inst_25553 = (state_25606[(7)]);var inst_25556 = cljs.core.seq_QMARK_(inst_25553);var state_25606__$1 = state_25606;if(inst_25556)
{var statearr_25632_25673 = state_25606__$1;(statearr_25632_25673[(1)] = (7));
} else
{var statearr_25633_25674 = state_25606__$1;(statearr_25633_25674[(1)] = (8));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25607 === (14)))
{var inst_25569 = (state_25606[(16)]);var inst_25576 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25569);var state_25606__$1 = state_25606;var statearr_25634_25675 = state_25606__$1;(statearr_25634_25675[(2)] = inst_25576);
(statearr_25634_25675[(1)] = (16));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25607 === (16)))
{var inst_25579 = (state_25606[(2)]);var inst_25580 = calc_state();var inst_25553 = inst_25580;var state_25606__$1 = (function (){var statearr_25635 = state_25606;(statearr_25635[(19)] = inst_25579);
(statearr_25635[(7)] = inst_25553);
return statearr_25635;
})();var statearr_25636_25676 = state_25606__$1;(statearr_25636_25676[(2)] = null);
(statearr_25636_25676[(1)] = (5));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25607 === (10)))
{var inst_25569 = (state_25606[(16)]);var inst_25568 = (state_25606[(8)]);var inst_25567 = (state_25606[(2)]);var inst_25568__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25567,(0),null);var inst_25569__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25567,(1),null);var inst_25570 = (inst_25568__$1 == null);var inst_25571 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25569__$1,change);var inst_25572 = (inst_25570) || (inst_25571);var state_25606__$1 = (function (){var statearr_25637 = state_25606;(statearr_25637[(16)] = inst_25569__$1);
(statearr_25637[(8)] = inst_25568__$1);
return statearr_25637;
})();if(cljs.core.truth_(inst_25572))
{var statearr_25638_25677 = state_25606__$1;(statearr_25638_25677[(1)] = (11));
} else
{var statearr_25639_25678 = state_25606__$1;(statearr_25639_25678[(1)] = (12));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25607 === (18)))
{var inst_25569 = (state_25606[(16)]);var inst_25564 = (state_25606[(17)]);var inst_25563 = (state_25606[(18)]);var inst_25588 = cljs.core.empty_QMARK_(inst_25564);var inst_25589 = (function (){var G__25640 = inst_25569;return (inst_25563.cljs$core$IFn$_invoke$arity$1 ? inst_25563.cljs$core$IFn$_invoke$arity$1(G__25640) : inst_25563.call(null,G__25640));
})();var inst_25590 = cljs.core.not(inst_25589);var inst_25591 = (inst_25588) && (inst_25590);var state_25606__$1 = state_25606;var statearr_25641_25679 = state_25606__$1;(statearr_25641_25679[(2)] = inst_25591);
(statearr_25641_25679[(1)] = (19));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25607 === (8)))
{var inst_25553 = (state_25606[(7)]);var state_25606__$1 = state_25606;var statearr_25642_25680 = state_25606__$1;(statearr_25642_25680[(2)] = inst_25553);
(statearr_25642_25680[(1)] = (9));
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
});})(c__13062__auto___25654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__13047__auto__,c__13062__auto___25654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_25646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25646[(0)] = state_machine__13048__auto__);
(statearr_25646[(1)] = (1));
return statearr_25646;
});
var state_machine__13048__auto____1 = (function (state_25606){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_25606);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e25647){if((e25647 instanceof Object))
{var ex__13051__auto__ = e25647;var statearr_25648_25681 = state_25606;(statearr_25648_25681[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25606);
return cljs.core.constant$keyword$18;
} else
{throw e25647;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__25682 = state_25606;
state_25606 = G__25682;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_25606){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_25606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto___25654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__13064__auto__ = (function (){var statearr_25649 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_25649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto___25654);
return statearr_25649;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto___25654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj25684 = {};return obj25684;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3614__auto__ = p;if(and__3614__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3614__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4262__auto__ = (((p == null))?null:p);return (function (){var or__3626__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__25688 = x__4262__auto__;return goog.typeOf(G__25688);
})()]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3614__auto__ = p;if(and__3614__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3614__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4262__auto__ = (((p == null))?null:p);return (function (){var or__3626__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__25692 = x__4262__auto__;return goog.typeOf(G__25692);
})()]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3614__auto__ = p;if(and__3614__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3614__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4262__auto__ = (((p == null))?null:p);return (function (){var or__3626__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25698 = x__4262__auto__;return goog.typeOf(G__25698);
})()]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3614__auto__ = p;if(and__3614__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4262__auto__ = (((p == null))?null:p);return (function (){var or__3626__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25700 = x__4262__auto__;return goog.typeOf(G__25700);
})()]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__25841 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25841) : cljs.core.atom.call(null,G__25841));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25843 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25843) : cljs.core.deref.call(null,G__25843));
})(),topic);if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3626__auto__,mults){
return (function (p1__25701_SHARP_){if(cljs.core.truth_((function (){var G__25844 = topic;return (p1__25701_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25701_SHARP_.cljs$core$IFn$_invoke$arity$1(G__25844) : p1__25701_SHARP_.call(null,G__25844));
})()))
{return p1__25701_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25701_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__25845 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__25845) : buf_fn.call(null,G__25845));
})())));
}
});})(or__3626__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25846 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25846 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25847){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25847 = meta25847;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25846.cljs$lang$type = true;
cljs.core.async.t25846.cljs$lang$ctorStr = "cljs.core.async/t25846";
cljs.core.async.t25846.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write(writer__4203__auto__,"cljs.core.async/t25846");
});})(mults,ensure_mult))
;
cljs.core.async.t25846.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25846.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__25849 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__25849) : self__.ensure_mult.call(null,G__25849));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25846.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25850 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25850) : cljs.core.deref.call(null,G__25850));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25846.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__25851 = self__.mults;var G__25852 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25851,G__25852) : cljs.core.reset_BANG_.call(null,G__25851,G__25852));
});})(mults,ensure_mult))
;
cljs.core.async.t25846.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25846.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25846.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25846.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25848){var self__ = this;
var _25848__$1 = this;return self__.meta25847;
});})(mults,ensure_mult))
;
cljs.core.async.t25846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25848,meta25847__$1){var self__ = this;
var _25848__$1 = this;return (new cljs.core.async.t25846(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25847__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25846 = ((function (mults,ensure_mult){
return (function __GT_t25846(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25847){return (new cljs.core.async.t25846(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25847));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25846(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13062__auto___25977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto___25977,mults,ensure_mult,p){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto___25977,mults,ensure_mult,p){
return (function (state_25926){var state_val_25927 = (state_25926[(1)]);if((state_val_25927 === (7)))
{var inst_25922 = (state_25926[(2)]);var state_25926__$1 = state_25926;var statearr_25928_25978 = state_25926__$1;(statearr_25928_25978[(2)] = inst_25922);
(statearr_25928_25978[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (20)))
{var state_25926__$1 = state_25926;var statearr_25929_25979 = state_25926__$1;(statearr_25929_25979[(2)] = null);
(statearr_25929_25979[(1)] = (21));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (1)))
{var state_25926__$1 = state_25926;var statearr_25930_25980 = state_25926__$1;(statearr_25930_25980[(2)] = null);
(statearr_25930_25980[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (24)))
{var inst_25855 = (state_25926[(7)]);var inst_25905 = (state_25926[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25926,(23),Object,null,(22));var inst_25912 = cljs.core.async.muxch_STAR_(inst_25905);var state_25926__$1 = state_25926;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25926__$1,(25),inst_25912,inst_25855);
} else
{if((state_val_25927 === (4)))
{var inst_25855 = (state_25926[(7)]);var inst_25855__$1 = (state_25926[(2)]);var inst_25856 = (inst_25855__$1 == null);var state_25926__$1 = (function (){var statearr_25931 = state_25926;(statearr_25931[(7)] = inst_25855__$1);
return statearr_25931;
})();if(cljs.core.truth_(inst_25856))
{var statearr_25932_25981 = state_25926__$1;(statearr_25932_25981[(1)] = (5));
} else
{var statearr_25933_25982 = state_25926__$1;(statearr_25933_25982[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (15)))
{var inst_25897 = (state_25926[(2)]);var state_25926__$1 = state_25926;var statearr_25934_25983 = state_25926__$1;(statearr_25934_25983[(2)] = inst_25897);
(statearr_25934_25983[(1)] = (12));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (21)))
{var inst_25919 = (state_25926[(2)]);var state_25926__$1 = (function (){var statearr_25935 = state_25926;(statearr_25935[(9)] = inst_25919);
return statearr_25935;
})();var statearr_25936_25984 = state_25926__$1;(statearr_25936_25984[(2)] = null);
(statearr_25936_25984[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (13)))
{var inst_25879 = (state_25926[(10)]);var inst_25881 = cljs.core.chunked_seq_QMARK_(inst_25879);var state_25926__$1 = state_25926;if(inst_25881)
{var statearr_25937_25985 = state_25926__$1;(statearr_25937_25985[(1)] = (16));
} else
{var statearr_25938_25986 = state_25926__$1;(statearr_25938_25986[(1)] = (17));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (22)))
{var inst_25916 = (state_25926[(2)]);var state_25926__$1 = state_25926;var statearr_25939_25987 = state_25926__$1;(statearr_25939_25987[(2)] = inst_25916);
(statearr_25939_25987[(1)] = (21));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (6)))
{var inst_25855 = (state_25926[(7)]);var inst_25905 = (state_25926[(8)]);var inst_25903 = (state_25926[(11)]);var inst_25903__$1 = (function (){var G__25940 = inst_25855;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__25940) : topic_fn.call(null,G__25940));
})();var inst_25904 = (function (){var G__25941 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25941) : cljs.core.deref.call(null,G__25941));
})();var inst_25905__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25904,inst_25903__$1);var state_25926__$1 = (function (){var statearr_25942 = state_25926;(statearr_25942[(8)] = inst_25905__$1);
(statearr_25942[(11)] = inst_25903__$1);
return statearr_25942;
})();if(cljs.core.truth_(inst_25905__$1))
{var statearr_25943_25988 = state_25926__$1;(statearr_25943_25988[(1)] = (19));
} else
{var statearr_25944_25989 = state_25926__$1;(statearr_25944_25989[(1)] = (20));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (25)))
{var inst_25914 = (state_25926[(2)]);var state_25926__$1 = state_25926;var statearr_25945_25990 = state_25926__$1;(statearr_25945_25990[(2)] = inst_25914);
cljs.core.async.impl.ioc_helpers.process_exception(state_25926__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (17)))
{var inst_25879 = (state_25926[(10)]);var inst_25888 = cljs.core.first(inst_25879);var inst_25889 = cljs.core.async.muxch_STAR_(inst_25888);var inst_25890 = cljs.core.async.close_BANG_(inst_25889);var inst_25891 = cljs.core.next(inst_25879);var inst_25865 = inst_25891;var inst_25866 = null;var inst_25867 = (0);var inst_25868 = (0);var state_25926__$1 = (function (){var statearr_25946 = state_25926;(statearr_25946[(12)] = inst_25868);
(statearr_25946[(13)] = inst_25867);
(statearr_25946[(14)] = inst_25866);
(statearr_25946[(15)] = inst_25865);
(statearr_25946[(16)] = inst_25890);
return statearr_25946;
})();var statearr_25947_25991 = state_25926__$1;(statearr_25947_25991[(2)] = null);
(statearr_25947_25991[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (3)))
{var inst_25924 = (state_25926[(2)]);var state_25926__$1 = state_25926;return cljs.core.async.impl.ioc_helpers.return_chan(state_25926__$1,inst_25924);
} else
{if((state_val_25927 === (12)))
{var inst_25899 = (state_25926[(2)]);var state_25926__$1 = state_25926;var statearr_25948_25992 = state_25926__$1;(statearr_25948_25992[(2)] = inst_25899);
(statearr_25948_25992[(1)] = (9));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (2)))
{var state_25926__$1 = state_25926;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25926__$1,(4),ch);
} else
{if((state_val_25927 === (23)))
{var inst_25903 = (state_25926[(11)]);var inst_25907 = (state_25926[(2)]);var inst_25908 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25903);var state_25926__$1 = (function (){var statearr_25949 = state_25926;(statearr_25949[(17)] = inst_25907);
return statearr_25949;
})();var statearr_25950_25993 = state_25926__$1;(statearr_25950_25993[(2)] = inst_25908);
cljs.core.async.impl.ioc_helpers.process_exception(state_25926__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (19)))
{var state_25926__$1 = state_25926;var statearr_25951_25994 = state_25926__$1;(statearr_25951_25994[(2)] = null);
(statearr_25951_25994[(1)] = (24));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (11)))
{var inst_25865 = (state_25926[(15)]);var inst_25879 = (state_25926[(10)]);var inst_25879__$1 = cljs.core.seq(inst_25865);var state_25926__$1 = (function (){var statearr_25952 = state_25926;(statearr_25952[(10)] = inst_25879__$1);
return statearr_25952;
})();if(inst_25879__$1)
{var statearr_25953_25995 = state_25926__$1;(statearr_25953_25995[(1)] = (13));
} else
{var statearr_25954_25996 = state_25926__$1;(statearr_25954_25996[(1)] = (14));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (9)))
{var inst_25901 = (state_25926[(2)]);var state_25926__$1 = state_25926;var statearr_25955_25997 = state_25926__$1;(statearr_25955_25997[(2)] = inst_25901);
(statearr_25955_25997[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (5)))
{var inst_25862 = (function (){var G__25956 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25956) : cljs.core.deref.call(null,G__25956));
})();var inst_25863 = cljs.core.vals(inst_25862);var inst_25864 = cljs.core.seq(inst_25863);var inst_25865 = inst_25864;var inst_25866 = null;var inst_25867 = (0);var inst_25868 = (0);var state_25926__$1 = (function (){var statearr_25957 = state_25926;(statearr_25957[(12)] = inst_25868);
(statearr_25957[(13)] = inst_25867);
(statearr_25957[(14)] = inst_25866);
(statearr_25957[(15)] = inst_25865);
return statearr_25957;
})();var statearr_25958_25998 = state_25926__$1;(statearr_25958_25998[(2)] = null);
(statearr_25958_25998[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (14)))
{var state_25926__$1 = state_25926;var statearr_25962_25999 = state_25926__$1;(statearr_25962_25999[(2)] = null);
(statearr_25962_25999[(1)] = (15));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (16)))
{var inst_25879 = (state_25926[(10)]);var inst_25883 = cljs.core.chunk_first(inst_25879);var inst_25884 = cljs.core.chunk_rest(inst_25879);var inst_25885 = cljs.core.count(inst_25883);var inst_25865 = inst_25884;var inst_25866 = inst_25883;var inst_25867 = inst_25885;var inst_25868 = (0);var state_25926__$1 = (function (){var statearr_25963 = state_25926;(statearr_25963[(12)] = inst_25868);
(statearr_25963[(13)] = inst_25867);
(statearr_25963[(14)] = inst_25866);
(statearr_25963[(15)] = inst_25865);
return statearr_25963;
})();var statearr_25964_26000 = state_25926__$1;(statearr_25964_26000[(2)] = null);
(statearr_25964_26000[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (10)))
{var inst_25868 = (state_25926[(12)]);var inst_25867 = (state_25926[(13)]);var inst_25866 = (state_25926[(14)]);var inst_25865 = (state_25926[(15)]);var inst_25873 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25866,inst_25868);var inst_25874 = cljs.core.async.muxch_STAR_(inst_25873);var inst_25875 = cljs.core.async.close_BANG_(inst_25874);var inst_25876 = (inst_25868 + (1));var tmp25959 = inst_25867;var tmp25960 = inst_25866;var tmp25961 = inst_25865;var inst_25865__$1 = tmp25961;var inst_25866__$1 = tmp25960;var inst_25867__$1 = tmp25959;var inst_25868__$1 = inst_25876;var state_25926__$1 = (function (){var statearr_25965 = state_25926;(statearr_25965[(18)] = inst_25875);
(statearr_25965[(12)] = inst_25868__$1);
(statearr_25965[(13)] = inst_25867__$1);
(statearr_25965[(14)] = inst_25866__$1);
(statearr_25965[(15)] = inst_25865__$1);
return statearr_25965;
})();var statearr_25966_26001 = state_25926__$1;(statearr_25966_26001[(2)] = null);
(statearr_25966_26001[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (18)))
{var inst_25894 = (state_25926[(2)]);var state_25926__$1 = state_25926;var statearr_25967_26002 = state_25926__$1;(statearr_25967_26002[(2)] = inst_25894);
(statearr_25967_26002[(1)] = (15));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25927 === (8)))
{var inst_25868 = (state_25926[(12)]);var inst_25867 = (state_25926[(13)]);var inst_25870 = (inst_25868 < inst_25867);var inst_25871 = inst_25870;var state_25926__$1 = state_25926;if(cljs.core.truth_(inst_25871))
{var statearr_25968_26003 = state_25926__$1;(statearr_25968_26003[(1)] = (10));
} else
{var statearr_25969_26004 = state_25926__$1;(statearr_25969_26004[(1)] = (11));
}
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
}
});})(c__13062__auto___25977,mults,ensure_mult,p))
;return ((function (switch__13047__auto__,c__13062__auto___25977,mults,ensure_mult,p){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_25973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25973[(0)] = state_machine__13048__auto__);
(statearr_25973[(1)] = (1));
return statearr_25973;
});
var state_machine__13048__auto____1 = (function (state_25926){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_25926);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e25974){if((e25974 instanceof Object))
{var ex__13051__auto__ = e25974;var statearr_25975_26005 = state_25926;(statearr_25975_26005[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25926);
return cljs.core.constant$keyword$18;
} else
{throw e25974;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__26006 = state_25926;
state_25926 = G__26006;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_25926){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_25926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto___25977,mults,ensure_mult,p))
})();var state__13064__auto__ = (function (){var statearr_25976 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_25976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto___25977);
return statearr_25976;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto___25977,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__26087 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26087) : cljs.core.atom.call(null,G__26087));
})();var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__13062__auto___26160 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto___26160,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto___26160,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26126){var state_val_26127 = (state_26126[(1)]);if((state_val_26127 === (7)))
{var state_26126__$1 = state_26126;var statearr_26128_26161 = state_26126__$1;(statearr_26128_26161[(2)] = null);
(statearr_26128_26161[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26127 === (1)))
{var state_26126__$1 = state_26126;var statearr_26129_26162 = state_26126__$1;(statearr_26129_26162[(2)] = null);
(statearr_26129_26162[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26127 === (4)))
{var inst_26090 = (state_26126[(7)]);var inst_26092 = (inst_26090 < cnt);var state_26126__$1 = state_26126;if(cljs.core.truth_(inst_26092))
{var statearr_26130_26163 = state_26126__$1;(statearr_26130_26163[(1)] = (6));
} else
{var statearr_26131_26164 = state_26126__$1;(statearr_26131_26164[(1)] = (7));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26127 === (15)))
{var inst_26122 = (state_26126[(2)]);var state_26126__$1 = state_26126;var statearr_26132_26165 = state_26126__$1;(statearr_26132_26165[(2)] = inst_26122);
(statearr_26132_26165[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26127 === (13)))
{var inst_26115 = cljs.core.async.close_BANG_(out);var state_26126__$1 = state_26126;var statearr_26133_26166 = state_26126__$1;(statearr_26133_26166[(2)] = inst_26115);
(statearr_26133_26166[(1)] = (15));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26127 === (6)))
{var state_26126__$1 = state_26126;var statearr_26134_26167 = state_26126__$1;(statearr_26134_26167[(2)] = null);
(statearr_26134_26167[(1)] = (11));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26127 === (3)))
{var inst_26124 = (state_26126[(2)]);var state_26126__$1 = state_26126;return cljs.core.async.impl.ioc_helpers.return_chan(state_26126__$1,inst_26124);
} else
{if((state_val_26127 === (12)))
{var inst_26112 = (state_26126[(8)]);var inst_26112__$1 = (state_26126[(2)]);var inst_26113 = cljs.core.some(cljs.core.nil_QMARK_,inst_26112__$1);var state_26126__$1 = (function (){var statearr_26135 = state_26126;(statearr_26135[(8)] = inst_26112__$1);
return statearr_26135;
})();if(cljs.core.truth_(inst_26113))
{var statearr_26136_26168 = state_26126__$1;(statearr_26136_26168[(1)] = (13));
} else
{var statearr_26137_26169 = state_26126__$1;(statearr_26137_26169[(1)] = (14));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26127 === (2)))
{var inst_26089 = (function (){var G__26138 = dctr;var G__26139 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26138,G__26139) : cljs.core.reset_BANG_.call(null,G__26138,G__26139));
})();var inst_26090 = (0);var state_26126__$1 = (function (){var statearr_26140 = state_26126;(statearr_26140[(7)] = inst_26090);
(statearr_26140[(9)] = inst_26089);
return statearr_26140;
})();var statearr_26141_26170 = state_26126__$1;(statearr_26141_26170[(2)] = null);
(statearr_26141_26170[(1)] = (4));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26127 === (11)))
{var inst_26090 = (state_26126[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26126,(10),Object,null,(9));var inst_26099 = (function (){var G__26142 = inst_26090;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__26142) : chs__$1.call(null,G__26142));
})();var inst_26100 = (function (){var G__26143 = inst_26090;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26143) : done.call(null,G__26143));
})();var inst_26101 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26099,inst_26100);var state_26126__$1 = state_26126;var statearr_26144_26171 = state_26126__$1;(statearr_26144_26171[(2)] = inst_26101);
cljs.core.async.impl.ioc_helpers.process_exception(state_26126__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_26127 === (9)))
{var inst_26090 = (state_26126[(7)]);var inst_26103 = (state_26126[(2)]);var inst_26104 = (inst_26090 + (1));var inst_26090__$1 = inst_26104;var state_26126__$1 = (function (){var statearr_26145 = state_26126;(statearr_26145[(7)] = inst_26090__$1);
(statearr_26145[(10)] = inst_26103);
return statearr_26145;
})();var statearr_26146_26172 = state_26126__$1;(statearr_26146_26172[(2)] = null);
(statearr_26146_26172[(1)] = (4));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26127 === (5)))
{var inst_26110 = (state_26126[(2)]);var state_26126__$1 = (function (){var statearr_26147 = state_26126;(statearr_26147[(11)] = inst_26110);
return statearr_26147;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26126__$1,(12),dchan);
} else
{if((state_val_26127 === (14)))
{var inst_26112 = (state_26126[(8)]);var inst_26117 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26112);var state_26126__$1 = state_26126;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26126__$1,(16),out,inst_26117);
} else
{if((state_val_26127 === (16)))
{var inst_26119 = (state_26126[(2)]);var state_26126__$1 = (function (){var statearr_26148 = state_26126;(statearr_26148[(12)] = inst_26119);
return statearr_26148;
})();var statearr_26149_26173 = state_26126__$1;(statearr_26149_26173[(2)] = null);
(statearr_26149_26173[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26127 === (10)))
{var inst_26094 = (state_26126[(2)]);var inst_26095 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_26126__$1 = (function (){var statearr_26150 = state_26126;(statearr_26150[(13)] = inst_26094);
return statearr_26150;
})();var statearr_26151_26174 = state_26126__$1;(statearr_26151_26174[(2)] = inst_26095);
cljs.core.async.impl.ioc_helpers.process_exception(state_26126__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_26127 === (8)))
{var inst_26108 = (state_26126[(2)]);var state_26126__$1 = state_26126;var statearr_26152_26175 = state_26126__$1;(statearr_26152_26175[(2)] = inst_26108);
(statearr_26152_26175[(1)] = (5));
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
}
}
}
}
});})(c__13062__auto___26160,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__13047__auto__,c__13062__auto___26160,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_26156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26156[(0)] = state_machine__13048__auto__);
(statearr_26156[(1)] = (1));
return statearr_26156;
});
var state_machine__13048__auto____1 = (function (state_26126){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_26126);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e26157){if((e26157 instanceof Object))
{var ex__13051__auto__ = e26157;var statearr_26158_26176 = state_26126;(statearr_26158_26176[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26126);
return cljs.core.constant$keyword$18;
} else
{throw e26157;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__26177 = state_26126;
state_26126 = G__26177;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_26126){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_26126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto___26160,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__13064__auto__ = (function (){var statearr_26159 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_26159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto___26160);
return statearr_26159;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto___26160,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__13062__auto___26287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto___26287,out){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto___26287,out){
return (function (state_26263){var state_val_26264 = (state_26263[(1)]);if((state_val_26264 === (7)))
{var inst_26243 = (state_26263[(7)]);var inst_26242 = (state_26263[(8)]);var inst_26242__$1 = (state_26263[(2)]);var inst_26243__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26242__$1,(0),null);var inst_26244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26242__$1,(1),null);var inst_26245 = (inst_26243__$1 == null);var state_26263__$1 = (function (){var statearr_26265 = state_26263;(statearr_26265[(9)] = inst_26244);
(statearr_26265[(7)] = inst_26243__$1);
(statearr_26265[(8)] = inst_26242__$1);
return statearr_26265;
})();if(cljs.core.truth_(inst_26245))
{var statearr_26266_26288 = state_26263__$1;(statearr_26266_26288[(1)] = (8));
} else
{var statearr_26267_26289 = state_26263__$1;(statearr_26267_26289[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26264 === (1)))
{var inst_26234 = cljs.core.vec(chs);var inst_26235 = inst_26234;var state_26263__$1 = (function (){var statearr_26268 = state_26263;(statearr_26268[(10)] = inst_26235);
return statearr_26268;
})();var statearr_26269_26290 = state_26263__$1;(statearr_26269_26290[(2)] = null);
(statearr_26269_26290[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26264 === (4)))
{var inst_26235 = (state_26263[(10)]);var state_26263__$1 = state_26263;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_26263__$1,(7),inst_26235);
} else
{if((state_val_26264 === (6)))
{var inst_26259 = (state_26263[(2)]);var state_26263__$1 = state_26263;var statearr_26270_26291 = state_26263__$1;(statearr_26270_26291[(2)] = inst_26259);
(statearr_26270_26291[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26264 === (3)))
{var inst_26261 = (state_26263[(2)]);var state_26263__$1 = state_26263;return cljs.core.async.impl.ioc_helpers.return_chan(state_26263__$1,inst_26261);
} else
{if((state_val_26264 === (2)))
{var inst_26235 = (state_26263[(10)]);var inst_26237 = cljs.core.count(inst_26235);var inst_26238 = (inst_26237 > (0));var state_26263__$1 = state_26263;if(cljs.core.truth_(inst_26238))
{var statearr_26272_26292 = state_26263__$1;(statearr_26272_26292[(1)] = (4));
} else
{var statearr_26273_26293 = state_26263__$1;(statearr_26273_26293[(1)] = (5));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26264 === (11)))
{var inst_26235 = (state_26263[(10)]);var inst_26252 = (state_26263[(2)]);var tmp26271 = inst_26235;var inst_26235__$1 = tmp26271;var state_26263__$1 = (function (){var statearr_26274 = state_26263;(statearr_26274[(11)] = inst_26252);
(statearr_26274[(10)] = inst_26235__$1);
return statearr_26274;
})();var statearr_26275_26294 = state_26263__$1;(statearr_26275_26294[(2)] = null);
(statearr_26275_26294[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26264 === (9)))
{var inst_26243 = (state_26263[(7)]);var state_26263__$1 = state_26263;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26263__$1,(11),out,inst_26243);
} else
{if((state_val_26264 === (5)))
{var inst_26257 = cljs.core.async.close_BANG_(out);var state_26263__$1 = state_26263;var statearr_26276_26295 = state_26263__$1;(statearr_26276_26295[(2)] = inst_26257);
(statearr_26276_26295[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26264 === (10)))
{var inst_26255 = (state_26263[(2)]);var state_26263__$1 = state_26263;var statearr_26277_26296 = state_26263__$1;(statearr_26277_26296[(2)] = inst_26255);
(statearr_26277_26296[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26264 === (8)))
{var inst_26244 = (state_26263[(9)]);var inst_26243 = (state_26263[(7)]);var inst_26242 = (state_26263[(8)]);var inst_26235 = (state_26263[(10)]);var inst_26247 = (function (){var c = inst_26244;var v = inst_26243;var vec__26240 = inst_26242;var cs = inst_26235;return ((function (c,v,vec__26240,cs,inst_26244,inst_26243,inst_26242,inst_26235,state_val_26264,c__13062__auto___26287,out){
return (function (p1__26178_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26178_SHARP_);
});
;})(c,v,vec__26240,cs,inst_26244,inst_26243,inst_26242,inst_26235,state_val_26264,c__13062__auto___26287,out))
})();var inst_26248 = cljs.core.filterv(inst_26247,inst_26235);var inst_26235__$1 = inst_26248;var state_26263__$1 = (function (){var statearr_26278 = state_26263;(statearr_26278[(10)] = inst_26235__$1);
return statearr_26278;
})();var statearr_26279_26297 = state_26263__$1;(statearr_26279_26297[(2)] = null);
(statearr_26279_26297[(1)] = (2));
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
});})(c__13062__auto___26287,out))
;return ((function (switch__13047__auto__,c__13062__auto___26287,out){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_26283 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26283[(0)] = state_machine__13048__auto__);
(statearr_26283[(1)] = (1));
return statearr_26283;
});
var state_machine__13048__auto____1 = (function (state_26263){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_26263);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e26284){if((e26284 instanceof Object))
{var ex__13051__auto__ = e26284;var statearr_26285_26298 = state_26263;(statearr_26285_26298[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26263);
return cljs.core.constant$keyword$18;
} else
{throw e26284;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__26299 = state_26263;
state_26263 = G__26299;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_26263){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_26263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto___26287,out))
})();var state__13064__auto__ = (function (){var statearr_26286 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_26286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto___26287);
return statearr_26286;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto___26287,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__13062__auto___26395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto___26395,out){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto___26395,out){
return (function (state_26372){var state_val_26373 = (state_26372[(1)]);if((state_val_26373 === (7)))
{var inst_26354 = (state_26372[(7)]);var inst_26354__$1 = (state_26372[(2)]);var inst_26355 = (inst_26354__$1 == null);var inst_26356 = cljs.core.not(inst_26355);var state_26372__$1 = (function (){var statearr_26374 = state_26372;(statearr_26374[(7)] = inst_26354__$1);
return statearr_26374;
})();if(inst_26356)
{var statearr_26375_26396 = state_26372__$1;(statearr_26375_26396[(1)] = (8));
} else
{var statearr_26376_26397 = state_26372__$1;(statearr_26376_26397[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26373 === (1)))
{var inst_26349 = (0);var state_26372__$1 = (function (){var statearr_26377 = state_26372;(statearr_26377[(8)] = inst_26349);
return statearr_26377;
})();var statearr_26378_26398 = state_26372__$1;(statearr_26378_26398[(2)] = null);
(statearr_26378_26398[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26373 === (4)))
{var state_26372__$1 = state_26372;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26372__$1,(7),ch);
} else
{if((state_val_26373 === (6)))
{var inst_26367 = (state_26372[(2)]);var state_26372__$1 = state_26372;var statearr_26379_26399 = state_26372__$1;(statearr_26379_26399[(2)] = inst_26367);
(statearr_26379_26399[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26373 === (3)))
{var inst_26369 = (state_26372[(2)]);var inst_26370 = cljs.core.async.close_BANG_(out);var state_26372__$1 = (function (){var statearr_26380 = state_26372;(statearr_26380[(9)] = inst_26369);
return statearr_26380;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26372__$1,inst_26370);
} else
{if((state_val_26373 === (2)))
{var inst_26349 = (state_26372[(8)]);var inst_26351 = (inst_26349 < n);var state_26372__$1 = state_26372;if(cljs.core.truth_(inst_26351))
{var statearr_26381_26400 = state_26372__$1;(statearr_26381_26400[(1)] = (4));
} else
{var statearr_26382_26401 = state_26372__$1;(statearr_26382_26401[(1)] = (5));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26373 === (11)))
{var inst_26349 = (state_26372[(8)]);var inst_26359 = (state_26372[(2)]);var inst_26360 = (inst_26349 + (1));var inst_26349__$1 = inst_26360;var state_26372__$1 = (function (){var statearr_26383 = state_26372;(statearr_26383[(8)] = inst_26349__$1);
(statearr_26383[(10)] = inst_26359);
return statearr_26383;
})();var statearr_26384_26402 = state_26372__$1;(statearr_26384_26402[(2)] = null);
(statearr_26384_26402[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26373 === (9)))
{var state_26372__$1 = state_26372;var statearr_26385_26403 = state_26372__$1;(statearr_26385_26403[(2)] = null);
(statearr_26385_26403[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26373 === (5)))
{var state_26372__$1 = state_26372;var statearr_26386_26404 = state_26372__$1;(statearr_26386_26404[(2)] = null);
(statearr_26386_26404[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26373 === (10)))
{var inst_26364 = (state_26372[(2)]);var state_26372__$1 = state_26372;var statearr_26387_26405 = state_26372__$1;(statearr_26387_26405[(2)] = inst_26364);
(statearr_26387_26405[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26373 === (8)))
{var inst_26354 = (state_26372[(7)]);var state_26372__$1 = state_26372;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26372__$1,(11),out,inst_26354);
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
});})(c__13062__auto___26395,out))
;return ((function (switch__13047__auto__,c__13062__auto___26395,out){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_26391 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26391[(0)] = state_machine__13048__auto__);
(statearr_26391[(1)] = (1));
return statearr_26391;
});
var state_machine__13048__auto____1 = (function (state_26372){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_26372);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e26392){if((e26392 instanceof Object))
{var ex__13051__auto__ = e26392;var statearr_26393_26406 = state_26372;(statearr_26393_26406[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26372);
return cljs.core.constant$keyword$18;
} else
{throw e26392;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__26407 = state_26372;
state_26372 = G__26407;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_26372){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_26372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto___26395,out))
})();var state__13064__auto__ = (function (){var statearr_26394 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_26394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto___26395);
return statearr_26394;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto___26395,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__13062__auto___26506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto___26506,out){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto___26506,out){
return (function (state_26481){var state_val_26482 = (state_26481[(1)]);if((state_val_26482 === (7)))
{var inst_26476 = (state_26481[(2)]);var state_26481__$1 = state_26481;var statearr_26483_26507 = state_26481__$1;(statearr_26483_26507[(2)] = inst_26476);
(statearr_26483_26507[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26482 === (1)))
{var inst_26458 = null;var state_26481__$1 = (function (){var statearr_26484 = state_26481;(statearr_26484[(7)] = inst_26458);
return statearr_26484;
})();var statearr_26485_26508 = state_26481__$1;(statearr_26485_26508[(2)] = null);
(statearr_26485_26508[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26482 === (4)))
{var inst_26461 = (state_26481[(8)]);var inst_26461__$1 = (state_26481[(2)]);var inst_26462 = (inst_26461__$1 == null);var inst_26463 = cljs.core.not(inst_26462);var state_26481__$1 = (function (){var statearr_26486 = state_26481;(statearr_26486[(8)] = inst_26461__$1);
return statearr_26486;
})();if(inst_26463)
{var statearr_26487_26509 = state_26481__$1;(statearr_26487_26509[(1)] = (5));
} else
{var statearr_26488_26510 = state_26481__$1;(statearr_26488_26510[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26482 === (6)))
{var state_26481__$1 = state_26481;var statearr_26489_26511 = state_26481__$1;(statearr_26489_26511[(2)] = null);
(statearr_26489_26511[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26482 === (3)))
{var inst_26478 = (state_26481[(2)]);var inst_26479 = cljs.core.async.close_BANG_(out);var state_26481__$1 = (function (){var statearr_26490 = state_26481;(statearr_26490[(9)] = inst_26478);
return statearr_26490;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26481__$1,inst_26479);
} else
{if((state_val_26482 === (2)))
{var state_26481__$1 = state_26481;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26481__$1,(4),ch);
} else
{if((state_val_26482 === (11)))
{var inst_26461 = (state_26481[(8)]);var inst_26470 = (state_26481[(2)]);var inst_26458 = inst_26461;var state_26481__$1 = (function (){var statearr_26491 = state_26481;(statearr_26491[(10)] = inst_26470);
(statearr_26491[(7)] = inst_26458);
return statearr_26491;
})();var statearr_26492_26512 = state_26481__$1;(statearr_26492_26512[(2)] = null);
(statearr_26492_26512[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26482 === (9)))
{var inst_26461 = (state_26481[(8)]);var state_26481__$1 = state_26481;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26481__$1,(11),out,inst_26461);
} else
{if((state_val_26482 === (5)))
{var inst_26461 = (state_26481[(8)]);var inst_26458 = (state_26481[(7)]);var inst_26465 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26461,inst_26458);var state_26481__$1 = state_26481;if(inst_26465)
{var statearr_26494_26513 = state_26481__$1;(statearr_26494_26513[(1)] = (8));
} else
{var statearr_26495_26514 = state_26481__$1;(statearr_26495_26514[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26482 === (10)))
{var inst_26473 = (state_26481[(2)]);var state_26481__$1 = state_26481;var statearr_26496_26515 = state_26481__$1;(statearr_26496_26515[(2)] = inst_26473);
(statearr_26496_26515[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26482 === (8)))
{var inst_26458 = (state_26481[(7)]);var tmp26493 = inst_26458;var inst_26458__$1 = tmp26493;var state_26481__$1 = (function (){var statearr_26497 = state_26481;(statearr_26497[(7)] = inst_26458__$1);
return statearr_26497;
})();var statearr_26498_26516 = state_26481__$1;(statearr_26498_26516[(2)] = null);
(statearr_26498_26516[(1)] = (2));
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
});})(c__13062__auto___26506,out))
;return ((function (switch__13047__auto__,c__13062__auto___26506,out){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_26502 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26502[(0)] = state_machine__13048__auto__);
(statearr_26502[(1)] = (1));
return statearr_26502;
});
var state_machine__13048__auto____1 = (function (state_26481){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_26481);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e26503){if((e26503 instanceof Object))
{var ex__13051__auto__ = e26503;var statearr_26504_26517 = state_26481;(statearr_26504_26517[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26481);
return cljs.core.constant$keyword$18;
} else
{throw e26503;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__26518 = state_26481;
state_26481 = G__26518;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_26481){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_26481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto___26506,out))
})();var state__13064__auto__ = (function (){var statearr_26505 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_26505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto___26506);
return statearr_26505;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto___26506,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__13062__auto___26656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto___26656,out){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto___26656,out){
return (function (state_26626){var state_val_26627 = (state_26626[(1)]);if((state_val_26627 === (7)))
{var inst_26622 = (state_26626[(2)]);var state_26626__$1 = state_26626;var statearr_26628_26657 = state_26626__$1;(statearr_26628_26657[(2)] = inst_26622);
(statearr_26628_26657[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26627 === (1)))
{var inst_26589 = (new Array(n));var inst_26590 = inst_26589;var inst_26591 = (0);var state_26626__$1 = (function (){var statearr_26629 = state_26626;(statearr_26629[(7)] = inst_26590);
(statearr_26629[(8)] = inst_26591);
return statearr_26629;
})();var statearr_26630_26658 = state_26626__$1;(statearr_26630_26658[(2)] = null);
(statearr_26630_26658[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26627 === (4)))
{var inst_26594 = (state_26626[(9)]);var inst_26594__$1 = (state_26626[(2)]);var inst_26595 = (inst_26594__$1 == null);var inst_26596 = cljs.core.not(inst_26595);var state_26626__$1 = (function (){var statearr_26631 = state_26626;(statearr_26631[(9)] = inst_26594__$1);
return statearr_26631;
})();if(inst_26596)
{var statearr_26632_26659 = state_26626__$1;(statearr_26632_26659[(1)] = (5));
} else
{var statearr_26633_26660 = state_26626__$1;(statearr_26633_26660[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26627 === (15)))
{var inst_26616 = (state_26626[(2)]);var state_26626__$1 = state_26626;var statearr_26634_26661 = state_26626__$1;(statearr_26634_26661[(2)] = inst_26616);
(statearr_26634_26661[(1)] = (14));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26627 === (13)))
{var state_26626__$1 = state_26626;var statearr_26635_26662 = state_26626__$1;(statearr_26635_26662[(2)] = null);
(statearr_26635_26662[(1)] = (14));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26627 === (6)))
{var inst_26591 = (state_26626[(8)]);var inst_26612 = (inst_26591 > (0));var state_26626__$1 = state_26626;if(cljs.core.truth_(inst_26612))
{var statearr_26636_26663 = state_26626__$1;(statearr_26636_26663[(1)] = (12));
} else
{var statearr_26637_26664 = state_26626__$1;(statearr_26637_26664[(1)] = (13));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26627 === (3)))
{var inst_26624 = (state_26626[(2)]);var state_26626__$1 = state_26626;return cljs.core.async.impl.ioc_helpers.return_chan(state_26626__$1,inst_26624);
} else
{if((state_val_26627 === (12)))
{var inst_26590 = (state_26626[(7)]);var inst_26614 = cljs.core.vec(inst_26590);var state_26626__$1 = state_26626;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26626__$1,(15),out,inst_26614);
} else
{if((state_val_26627 === (2)))
{var state_26626__$1 = state_26626;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26626__$1,(4),ch);
} else
{if((state_val_26627 === (11)))
{var inst_26606 = (state_26626[(2)]);var inst_26607 = (new Array(n));var inst_26590 = inst_26607;var inst_26591 = (0);var state_26626__$1 = (function (){var statearr_26638 = state_26626;(statearr_26638[(10)] = inst_26606);
(statearr_26638[(7)] = inst_26590);
(statearr_26638[(8)] = inst_26591);
return statearr_26638;
})();var statearr_26639_26665 = state_26626__$1;(statearr_26639_26665[(2)] = null);
(statearr_26639_26665[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26627 === (9)))
{var inst_26590 = (state_26626[(7)]);var inst_26604 = cljs.core.vec(inst_26590);var state_26626__$1 = state_26626;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26626__$1,(11),out,inst_26604);
} else
{if((state_val_26627 === (5)))
{var inst_26590 = (state_26626[(7)]);var inst_26594 = (state_26626[(9)]);var inst_26591 = (state_26626[(8)]);var inst_26599 = (state_26626[(11)]);var inst_26598 = (inst_26590[inst_26591] = inst_26594);var inst_26599__$1 = (inst_26591 + (1));var inst_26600 = (inst_26599__$1 < n);var state_26626__$1 = (function (){var statearr_26640 = state_26626;(statearr_26640[(12)] = inst_26598);
(statearr_26640[(11)] = inst_26599__$1);
return statearr_26640;
})();if(cljs.core.truth_(inst_26600))
{var statearr_26641_26666 = state_26626__$1;(statearr_26641_26666[(1)] = (8));
} else
{var statearr_26642_26667 = state_26626__$1;(statearr_26642_26667[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26627 === (14)))
{var inst_26619 = (state_26626[(2)]);var inst_26620 = cljs.core.async.close_BANG_(out);var state_26626__$1 = (function (){var statearr_26644 = state_26626;(statearr_26644[(13)] = inst_26619);
return statearr_26644;
})();var statearr_26645_26668 = state_26626__$1;(statearr_26645_26668[(2)] = inst_26620);
(statearr_26645_26668[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26627 === (10)))
{var inst_26610 = (state_26626[(2)]);var state_26626__$1 = state_26626;var statearr_26646_26669 = state_26626__$1;(statearr_26646_26669[(2)] = inst_26610);
(statearr_26646_26669[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26627 === (8)))
{var inst_26590 = (state_26626[(7)]);var inst_26599 = (state_26626[(11)]);var tmp26643 = inst_26590;var inst_26590__$1 = tmp26643;var inst_26591 = inst_26599;var state_26626__$1 = (function (){var statearr_26647 = state_26626;(statearr_26647[(7)] = inst_26590__$1);
(statearr_26647[(8)] = inst_26591);
return statearr_26647;
})();var statearr_26648_26670 = state_26626__$1;(statearr_26648_26670[(2)] = null);
(statearr_26648_26670[(1)] = (2));
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
}
}
}
});})(c__13062__auto___26656,out))
;return ((function (switch__13047__auto__,c__13062__auto___26656,out){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_26652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26652[(0)] = state_machine__13048__auto__);
(statearr_26652[(1)] = (1));
return statearr_26652;
});
var state_machine__13048__auto____1 = (function (state_26626){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_26626);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e26653){if((e26653 instanceof Object))
{var ex__13051__auto__ = e26653;var statearr_26654_26671 = state_26626;(statearr_26654_26671[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26626);
return cljs.core.constant$keyword$18;
} else
{throw e26653;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__26672 = state_26626;
state_26626 = G__26672;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_26626){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_26626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto___26656,out))
})();var state__13064__auto__ = (function (){var statearr_26655 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_26655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto___26656);
return statearr_26655;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto___26656,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__13062__auto___26820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto___26820,out){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto___26820,out){
return (function (state_26789){var state_val_26790 = (state_26789[(1)]);if((state_val_26790 === (7)))
{var inst_26785 = (state_26789[(2)]);var state_26789__$1 = state_26789;var statearr_26791_26821 = state_26789__$1;(statearr_26791_26821[(2)] = inst_26785);
(statearr_26791_26821[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26790 === (1)))
{var inst_26748 = [];var inst_26749 = inst_26748;var inst_26750 = cljs.core.constant$keyword$31;var state_26789__$1 = (function (){var statearr_26792 = state_26789;(statearr_26792[(7)] = inst_26750);
(statearr_26792[(8)] = inst_26749);
return statearr_26792;
})();var statearr_26793_26822 = state_26789__$1;(statearr_26793_26822[(2)] = null);
(statearr_26793_26822[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26790 === (4)))
{var inst_26753 = (state_26789[(9)]);var inst_26753__$1 = (state_26789[(2)]);var inst_26754 = (inst_26753__$1 == null);var inst_26755 = cljs.core.not(inst_26754);var state_26789__$1 = (function (){var statearr_26794 = state_26789;(statearr_26794[(9)] = inst_26753__$1);
return statearr_26794;
})();if(inst_26755)
{var statearr_26795_26823 = state_26789__$1;(statearr_26795_26823[(1)] = (5));
} else
{var statearr_26796_26824 = state_26789__$1;(statearr_26796_26824[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26790 === (15)))
{var inst_26779 = (state_26789[(2)]);var state_26789__$1 = state_26789;var statearr_26797_26825 = state_26789__$1;(statearr_26797_26825[(2)] = inst_26779);
(statearr_26797_26825[(1)] = (14));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26790 === (13)))
{var state_26789__$1 = state_26789;var statearr_26798_26826 = state_26789__$1;(statearr_26798_26826[(2)] = null);
(statearr_26798_26826[(1)] = (14));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26790 === (6)))
{var inst_26749 = (state_26789[(8)]);var inst_26774 = inst_26749.length;var inst_26775 = (inst_26774 > (0));var state_26789__$1 = state_26789;if(cljs.core.truth_(inst_26775))
{var statearr_26799_26827 = state_26789__$1;(statearr_26799_26827[(1)] = (12));
} else
{var statearr_26800_26828 = state_26789__$1;(statearr_26800_26828[(1)] = (13));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26790 === (3)))
{var inst_26787 = (state_26789[(2)]);var state_26789__$1 = state_26789;return cljs.core.async.impl.ioc_helpers.return_chan(state_26789__$1,inst_26787);
} else
{if((state_val_26790 === (12)))
{var inst_26749 = (state_26789[(8)]);var inst_26777 = cljs.core.vec(inst_26749);var state_26789__$1 = state_26789;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26789__$1,(15),out,inst_26777);
} else
{if((state_val_26790 === (2)))
{var state_26789__$1 = state_26789;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26789__$1,(4),ch);
} else
{if((state_val_26790 === (11)))
{var inst_26753 = (state_26789[(9)]);var inst_26757 = (state_26789[(10)]);var inst_26767 = (state_26789[(2)]);var inst_26768 = [];var inst_26769 = inst_26768.push(inst_26753);var inst_26749 = inst_26768;var inst_26750 = inst_26757;var state_26789__$1 = (function (){var statearr_26801 = state_26789;(statearr_26801[(7)] = inst_26750);
(statearr_26801[(11)] = inst_26769);
(statearr_26801[(12)] = inst_26767);
(statearr_26801[(8)] = inst_26749);
return statearr_26801;
})();var statearr_26802_26829 = state_26789__$1;(statearr_26802_26829[(2)] = null);
(statearr_26802_26829[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26790 === (9)))
{var inst_26749 = (state_26789[(8)]);var inst_26765 = cljs.core.vec(inst_26749);var state_26789__$1 = state_26789;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26789__$1,(11),out,inst_26765);
} else
{if((state_val_26790 === (5)))
{var inst_26750 = (state_26789[(7)]);var inst_26753 = (state_26789[(9)]);var inst_26757 = (state_26789[(10)]);var inst_26757__$1 = (function (){var G__26803 = inst_26753;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26803) : f.call(null,G__26803));
})();var inst_26758 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26757__$1,inst_26750);var inst_26759 = cljs.core.keyword_identical_QMARK_(inst_26750,cljs.core.constant$keyword$31);var inst_26760 = (inst_26758) || (inst_26759);var state_26789__$1 = (function (){var statearr_26804 = state_26789;(statearr_26804[(10)] = inst_26757__$1);
return statearr_26804;
})();if(cljs.core.truth_(inst_26760))
{var statearr_26805_26830 = state_26789__$1;(statearr_26805_26830[(1)] = (8));
} else
{var statearr_26806_26831 = state_26789__$1;(statearr_26806_26831[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26790 === (14)))
{var inst_26782 = (state_26789[(2)]);var inst_26783 = cljs.core.async.close_BANG_(out);var state_26789__$1 = (function (){var statearr_26808 = state_26789;(statearr_26808[(13)] = inst_26782);
return statearr_26808;
})();var statearr_26809_26832 = state_26789__$1;(statearr_26809_26832[(2)] = inst_26783);
(statearr_26809_26832[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26790 === (10)))
{var inst_26772 = (state_26789[(2)]);var state_26789__$1 = state_26789;var statearr_26810_26833 = state_26789__$1;(statearr_26810_26833[(2)] = inst_26772);
(statearr_26810_26833[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26790 === (8)))
{var inst_26749 = (state_26789[(8)]);var inst_26753 = (state_26789[(9)]);var inst_26757 = (state_26789[(10)]);var inst_26762 = inst_26749.push(inst_26753);var tmp26807 = inst_26749;var inst_26749__$1 = tmp26807;var inst_26750 = inst_26757;var state_26789__$1 = (function (){var statearr_26811 = state_26789;(statearr_26811[(7)] = inst_26750);
(statearr_26811[(14)] = inst_26762);
(statearr_26811[(8)] = inst_26749__$1);
return statearr_26811;
})();var statearr_26812_26834 = state_26789__$1;(statearr_26812_26834[(2)] = null);
(statearr_26812_26834[(1)] = (2));
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
}
}
}
});})(c__13062__auto___26820,out))
;return ((function (switch__13047__auto__,c__13062__auto___26820,out){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_26816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26816[(0)] = state_machine__13048__auto__);
(statearr_26816[(1)] = (1));
return statearr_26816;
});
var state_machine__13048__auto____1 = (function (state_26789){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_26789);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e26817){if((e26817 instanceof Object))
{var ex__13051__auto__ = e26817;var statearr_26818_26835 = state_26789;(statearr_26818_26835[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26789);
return cljs.core.constant$keyword$18;
} else
{throw e26817;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__26836 = state_26789;
state_26789 = G__26836;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_26789){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_26789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto___26820,out))
})();var state__13064__auto__ = (function (){var statearr_26819 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_26819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto___26820);
return statearr_26819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto___26820,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

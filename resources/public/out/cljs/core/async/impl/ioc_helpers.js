// Compiled by ClojureScript 0.0-2342
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$17);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t26874 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t26874 = (function (f,fn_handler,meta26875){
this.f = f;
this.fn_handler = fn_handler;
this.meta26875 = meta26875;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t26874.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t26874.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t26874";
cljs.core.async.impl.ioc_helpers.t26874.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write(writer__4203__auto__,"cljs.core.async.impl.ioc-helpers/t26874");
});
cljs.core.async.impl.ioc_helpers.t26874.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t26874.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t26874.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t26874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26876){var self__ = this;
var _26876__$1 = this;return self__.meta26875;
});
cljs.core.async.impl.ioc_helpers.t26874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26876,meta26875__$1){var self__ = this;
var _26876__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t26874(self__.f,self__.fn_handler,meta26875__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t26874 = (function __GT_t26874(f__$1,fn_handler__$1,meta26875){return (new cljs.core.async.impl.ioc_helpers.t26874(f__$1,fn_handler__$1,meta26875));
});
}
return (new cljs.core.async.impl.ioc_helpers.t26874(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e26878){if((e26878 instanceof Object))
{var ex = e26878;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{throw e26878;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_26882_26885 = state;(statearr_26882_26885[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_26882_26885[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_26883_26886 = state;(statearr_26883_26886[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__26884 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26884) : cljs.core.deref.call(null,G__26884));
})());
(statearr_26883_26886[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$18;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){var statearr_26890_26893 = state;(statearr_26890_26893[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_26890_26893[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_26891_26894 = state;(statearr_26891_26894[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__26892 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26892) : cljs.core.deref.call(null,G__26892));
})());
(statearr_26891_26894[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$18;
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26895){var map__26901 = p__26895;var map__26901__$1 = ((cljs.core.seq_QMARK_(map__26901))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26901):map__26901);var opts = map__26901__$1;var statearr_26902_26906 = state;(statearr_26902_26906[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__26901,map__26901__$1,opts){
return (function (val){var statearr_26903_26907 = state;(statearr_26903_26907[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__26901,map__26901__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_26904_26908 = state;(statearr_26904_26908[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__26905 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26905) : cljs.core.deref.call(null,G__26905));
})());
return cljs.core.constant$keyword$18;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26895 = null;if (arguments.length > 3) {
  p__26895 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26895);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26909){
var state = cljs.core.first(arglist__26909);
arglist__26909 = cljs.core.next(arglist__26909);
var cont_block = cljs.core.first(arglist__26909);
arglist__26909 = cljs.core.next(arglist__26909);
var ports = cljs.core.first(arglist__26909);
var p__26895 = cljs.core.rest(arglist__26909);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__26895);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){return null;
});})(c))
));
}
c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4221__auto__,k__4222__auto__){var self__ = this;
var this__4221__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4221__auto____$1,k__4222__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4223__auto__,k26911,else__4224__auto__){var self__ = this;
var this__4223__auto____$1 = this;var G__26913 = (((k26911 instanceof cljs.core.Keyword))?k26911.fqn:null);switch (G__26913) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26911,else__4224__auto__);

}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4235__auto__,writer__4236__auto__,opts__4237__auto__){var self__ = this;
var this__4235__auto____$1 = this;var pr_pair__4238__auto__ = ((function (this__4235__auto____$1){
return (function (keyval__4239__auto__){return cljs.core.pr_sequential_writer(writer__4236__auto__,cljs.core.pr_writer,""," ","",opts__4237__auto__,keyval__4239__auto__);
});})(this__4235__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4236__auto__,pr_pair__4238__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4237__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$20,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$21,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$23,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4219__auto__){var self__ = this;
var this__4219__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4215__auto__){var self__ = this;
var this__4215__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4225__auto__){var self__ = this;
var this__4225__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4216__auto__){var self__ = this;
var this__4216__auto____$1 = this;var h__4037__auto__ = self__.__hash;if(!((h__4037__auto__ == null)))
{return h__4037__auto__;
} else
{var h__4037__auto____$1 = cljs.core.hash_imap(this__4216__auto____$1);self__.__hash = h__4037__auto____$1;
return h__4037__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4217__auto__,other__4218__auto__){var self__ = this;
var this__4217__auto____$1 = this;if(cljs.core.truth_((function (){var and__3614__auto__ = other__4218__auto__;if(cljs.core.truth_(and__3614__auto__))
{return ((this__4217__auto____$1.constructor === other__4218__auto__.constructor)) && (cljs.core.equiv_map(this__4217__auto____$1,other__4218__auto__));
} else
{return and__3614__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4230__auto__,k__4231__auto__){var self__ = this;
var this__4230__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$21,null,cljs.core.constant$keyword$19,null,cljs.core.constant$keyword$20,null,cljs.core.constant$keyword$23,null,cljs.core.constant$keyword$22,null], null), null),k__4231__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4230__auto____$1),self__.__meta),k__4231__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4231__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4228__auto__,k__4229__auto__,G__26910){var self__ = this;
var this__4228__auto____$1 = this;var pred__26914 = cljs.core.keyword_identical_QMARK_;var expr__26915 = k__4229__auto__;if(cljs.core.truth_((function (){var G__26917 = cljs.core.constant$keyword$19;var G__26918 = expr__26915;return (pred__26914.cljs$core$IFn$_invoke$arity$2 ? pred__26914.cljs$core$IFn$_invoke$arity$2(G__26917,G__26918) : pred__26914.call(null,G__26917,G__26918));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__26910,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__26919 = cljs.core.constant$keyword$20;var G__26920 = expr__26915;return (pred__26914.cljs$core$IFn$_invoke$arity$2 ? pred__26914.cljs$core$IFn$_invoke$arity$2(G__26919,G__26920) : pred__26914.call(null,G__26919,G__26920));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__26910,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__26921 = cljs.core.constant$keyword$21;var G__26922 = expr__26915;return (pred__26914.cljs$core$IFn$_invoke$arity$2 ? pred__26914.cljs$core$IFn$_invoke$arity$2(G__26921,G__26922) : pred__26914.call(null,G__26921,G__26922));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__26910,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__26923 = cljs.core.constant$keyword$22;var G__26924 = expr__26915;return (pred__26914.cljs$core$IFn$_invoke$arity$2 ? pred__26914.cljs$core$IFn$_invoke$arity$2(G__26923,G__26924) : pred__26914.call(null,G__26923,G__26924));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__26910,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__26925 = cljs.core.constant$keyword$23;var G__26926 = expr__26915;return (pred__26914.cljs$core$IFn$_invoke$arity$2 ? pred__26914.cljs$core$IFn$_invoke$arity$2(G__26925,G__26926) : pred__26914.call(null,G__26925,G__26926));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__26910,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4229__auto__,G__26910),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4233__auto__){var self__ = this;
var this__4233__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$20,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$21,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$23,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4220__auto__,G__26910){var self__ = this;
var this__4220__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__26910,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4226__auto__,entry__4227__auto__){var self__ = this;
var this__4226__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4227__auto__))
{return cljs.core._assoc(this__4226__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4227__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4227__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4226__auto____$1,entry__4227__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4255__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__){return cljs.core._write(writer__4256__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__26912){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(G__26912),cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(G__26912),cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(G__26912),cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(G__26912),cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(G__26912),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26912,cljs.core.constant$keyword$19,cljs.core.array_seq([cljs.core.constant$keyword$20,cljs.core.constant$keyword$21,cljs.core.constant$keyword$22,cljs.core.constant$keyword$23], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_26929 = state;(statearr_26929[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_26929;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3614__auto__ = exception;if(cljs.core.truth_(and__3614__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__3614__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__3614__auto__ = exception;if(cljs.core.truth_(and__3614__auto__))
{var and__3614__auto____$1 = catch_block;if(cljs.core.truth_(and__3614__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__3614__auto____$1;
}
} else
{return and__3614__auto__;
}
})()))
{var statearr_26935 = state;(statearr_26935[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_26935[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_26935[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_26935[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$19,null,cljs.core.array_seq([cljs.core.constant$keyword$20,null], 0)));
return statearr_26935;
} else
{if(cljs.core.truth_((function (){var and__3614__auto__ = exception;if(cljs.core.truth_(and__3614__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3614__auto__;
}
})()))
{var statearr_26936_26940 = state;(statearr_26936_26940[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__26941 = state;
state = G__26941;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3614__auto__ = exception;if(cljs.core.truth_(and__3614__auto__))
{var and__3614__auto____$1 = cljs.core.not(catch_block);if(and__3614__auto____$1)
{return cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3614__auto____$1;
}
} else
{return and__3614__auto__;
}
})()))
{var statearr_26937 = state;(statearr_26937[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_26937[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$21,null));
return statearr_26937;
} else
{if(cljs.core.truth_((function (){var and__3614__auto__ = cljs.core.not(exception);if(and__3614__auto__)
{return cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3614__auto__;
}
})()))
{var statearr_26938 = state;(statearr_26938[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_26938[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$21,null));
return statearr_26938;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_26939 = state;(statearr_26939[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_26939[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_26939;
} else
{throw (new Error(("Assert failed: No matching clause\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0))))));


}
}
}
}
}
}
break;
}
});

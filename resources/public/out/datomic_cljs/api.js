// Compiled by ClojureScript 0.0-2342
goog.provide('datomic_cljs.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('datomic_cljs.util');
goog.require('datomic_cljs.util');
goog.require('datomic_cljs.http');
goog.require('datomic_cljs.http');

/**
* @constructor
*/
datomic_cljs.api.DbId = (function (spec){
this.spec = spec;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
datomic_cljs.api.DbId.cljs$lang$type = true;
datomic_cljs.api.DbId.cljs$lang$ctorStr = "datomic-cljs.api/DbId";
datomic_cljs.api.DbId.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write(writer__4203__auto__,"datomic-cljs.api/DbId");
});
datomic_cljs.api.DbId.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,_){var self__ = this;
var this$__$1 = this;return cljs.core._write(writer,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)));
});
datomic_cljs.api.DbId.prototype.toString = (function (){var self__ = this;
var _ = this;return ("#db/id"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.spec));
});
datomic_cljs.api.__GT_DbId = (function __GT_DbId(spec){return (new datomic_cljs.api.DbId(spec));
});
datomic_cljs.api.read_dbid = (function read_dbid(spec){if(cljs.core.vector_QMARK_(spec))
{return (new datomic_cljs.api.DbId(spec));
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["db/id literal expects a vector as its representation."], 0));
}
});
cljs.reader.register_tag_parser_BANG_("db/id",datomic_cljs.api.read_dbid);
var _BANG_next_id_27518 = (function (){var G__27515 = (-1000001);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27515) : cljs.core.atom.call(null,G__27515));
})();/**
* Generate a tempid in the specified partition. Values of n from -1
* to -1000000, inclusive, are reserved for user-created tempids.
*/
datomic_cljs.api.tempid = ((function (_BANG_next_id_27518){
return (function() {
var tempid = null;
var tempid__1 = (function (partition){var id = (new datomic_cljs.api.DbId(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [partition,(function (){var G__27517 = _BANG_next_id_27518;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27517) : cljs.core.deref.call(null,G__27517));
})()], null)));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_next_id_27518,cljs.core.dec);
return id;
});
var tempid__2 = (function (partition,n){return (new datomic_cljs.api.DbId(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [partition,n], null)));
});
tempid = function(partition,n){
switch(arguments.length){
case 1:
return tempid__1.call(this,partition);
case 2:
return tempid__2.call(this,partition,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tempid.cljs$core$IFn$_invoke$arity$1 = tempid__1;
tempid.cljs$core$IFn$_invoke$arity$2 = tempid__2;
return tempid;
})()
;})(_BANG_next_id_27518))
;
datomic_cljs.api.IDatomicDB = (function (){var obj27520 = {};return obj27520;
})();
datomic_cljs.api._q = (function _q(db,query,inputs){if((function (){var and__3614__auto__ = db;if(and__3614__auto__)
{return db.datomic_cljs$api$IDatomicDB$_q$arity$3;
} else
{return and__3614__auto__;
}
})())
{return db.datomic_cljs$api$IDatomicDB$_q$arity$3(db,query,inputs);
} else
{var x__4262__auto__ = (((db == null))?null:db);return (function (){var or__3626__auto__ = (datomic_cljs.api._q[(function (){var G__27524 = x__4262__auto__;return goog.typeOf(G__27524);
})()]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (datomic_cljs.api._q["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol("IDatomicDB.-q",db);
}
}
})().call(null,db,query,inputs);
}
});
datomic_cljs.api._entity = (function _entity(db,eid){if((function (){var and__3614__auto__ = db;if(and__3614__auto__)
{return db.datomic_cljs$api$IDatomicDB$_entity$arity$2;
} else
{return and__3614__auto__;
}
})())
{return db.datomic_cljs$api$IDatomicDB$_entity$arity$2(db,eid);
} else
{var x__4262__auto__ = (((db == null))?null:db);return (function (){var or__3626__auto__ = (datomic_cljs.api._entity[(function (){var G__27528 = x__4262__auto__;return goog.typeOf(G__27528);
})()]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (datomic_cljs.api._entity["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol("IDatomicDB.-entity",db);
}
}
})().call(null,db,eid);
}
});
datomic_cljs.api._datoms = (function _datoms(db,index,components){if((function (){var and__3614__auto__ = db;if(and__3614__auto__)
{return db.datomic_cljs$api$IDatomicDB$_datoms$arity$3;
} else
{return and__3614__auto__;
}
})())
{return db.datomic_cljs$api$IDatomicDB$_datoms$arity$3(db,index,components);
} else
{var x__4262__auto__ = (((db == null))?null:db);return (function (){var or__3626__auto__ = (datomic_cljs.api._datoms[(function (){var G__27532 = x__4262__auto__;return goog.typeOf(G__27532);
})()]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (datomic_cljs.api._datoms["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol("IDatomicDB.-datoms",db);
}
}
})().call(null,db,index,components);
}
});
datomic_cljs.api._basis_t = (function _basis_t(db){if((function (){var and__3614__auto__ = db;if(and__3614__auto__)
{return db.datomic_cljs$api$IDatomicDB$_basis_t$arity$1;
} else
{return and__3614__auto__;
}
})())
{return db.datomic_cljs$api$IDatomicDB$_basis_t$arity$1(db);
} else
{var x__4262__auto__ = (((db == null))?null:db);return (function (){var or__3626__auto__ = (datomic_cljs.api._basis_t[(function (){var G__27536 = x__4262__auto__;return goog.typeOf(G__27536);
})()]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (datomic_cljs.api._basis_t["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol("IDatomicDB.-basis-t",db);
}
}
})().call(null,db);
}
});
datomic_cljs.api.IDatomicConnection = (function (){var obj27538 = {};return obj27538;
})();
datomic_cljs.api._conn_url_root = (function _conn_url_root(conn){if((function (){var and__3614__auto__ = conn;if(and__3614__auto__)
{return conn.datomic_cljs$api$IDatomicConnection$_conn_url_root$arity$1;
} else
{return and__3614__auto__;
}
})())
{return conn.datomic_cljs$api$IDatomicConnection$_conn_url_root$arity$1(conn);
} else
{var x__4262__auto__ = (((conn == null))?null:conn);return (function (){var or__3626__auto__ = (datomic_cljs.api._conn_url_root[(function (){var G__27542 = x__4262__auto__;return goog.typeOf(G__27542);
})()]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (datomic_cljs.api._conn_url_root["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol("IDatomicConnection.-conn-url-root",conn);
}
}
})().call(null,conn);
}
});
datomic_cljs.api._transact = (function _transact(conn,tx_data_str){if((function (){var and__3614__auto__ = conn;if(and__3614__auto__)
{return conn.datomic_cljs$api$IDatomicConnection$_transact$arity$2;
} else
{return and__3614__auto__;
}
})())
{return conn.datomic_cljs$api$IDatomicConnection$_transact$arity$2(conn,tx_data_str);
} else
{var x__4262__auto__ = (((conn == null))?null:conn);return (function (){var or__3626__auto__ = (datomic_cljs.api._transact[(function (){var G__27546 = x__4262__auto__;return goog.typeOf(G__27546);
})()]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (datomic_cljs.api._transact["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol("IDatomicConnection.-transact",conn);
}
}
})().call(null,conn,tx_data_str);
}
});

/**
* @constructor
* @param {*} hostname
* @param {*} port
* @param {*} db_alias
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datomic_cljs.api.DatomicConnection = (function (hostname,port,db_alias,__meta,__extmap){
this.hostname = hostname;
this.port = port;
this.db_alias = db_alias;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datomic_cljs.api.DatomicConnection.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4221__auto__,k__4222__auto__){var self__ = this;
var this__4221__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4221__auto____$1,k__4222__auto__,null);
});
datomic_cljs.api.DatomicConnection.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4223__auto__,k27548,else__4224__auto__){var self__ = this;
var this__4223__auto____$1 = this;var G__27550 = (((k27548 instanceof cljs.core.Keyword))?k27548.fqn:null);switch (G__27550) {
case "db-alias":
return self__.db_alias;

break;
case "port":
return self__.port;

break;
case "hostname":
return self__.hostname;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27548,else__4224__auto__);

}
});
datomic_cljs.api.DatomicConnection.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4235__auto__,writer__4236__auto__,opts__4237__auto__){var self__ = this;
var this__4235__auto____$1 = this;var pr_pair__4238__auto__ = ((function (this__4235__auto____$1){
return (function (keyval__4239__auto__){return cljs.core.pr_sequential_writer(writer__4236__auto__,cljs.core.pr_writer,""," ","",opts__4237__auto__,keyval__4239__auto__);
});})(this__4235__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4236__auto__,pr_pair__4238__auto__,"#datomic-cljs.api.DatomicConnection{",", ","}",opts__4237__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$210,self__.hostname],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$211,self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$212,self__.db_alias],null))], null),self__.__extmap));
});
datomic_cljs.api.DatomicConnection.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4219__auto__){var self__ = this;
var this__4219__auto____$1 = this;return self__.__meta;
});
datomic_cljs.api.DatomicConnection.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4215__auto__){var self__ = this;
var this__4215__auto____$1 = this;return (new datomic_cljs.api.DatomicConnection(self__.hostname,self__.port,self__.db_alias,self__.__meta,self__.__extmap,self__.__hash));
});
datomic_cljs.api.DatomicConnection.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4225__auto__){var self__ = this;
var this__4225__auto____$1 = this;return (3 + cljs.core.count(self__.__extmap));
});
datomic_cljs.api.DatomicConnection.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4216__auto__){var self__ = this;
var this__4216__auto____$1 = this;var h__4037__auto__ = self__.__hash;if(!((h__4037__auto__ == null)))
{return h__4037__auto__;
} else
{var h__4037__auto____$1 = cljs.core.hash_imap(this__4216__auto____$1);self__.__hash = h__4037__auto____$1;
return h__4037__auto____$1;
}
});
datomic_cljs.api.DatomicConnection.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4217__auto__,other__4218__auto__){var self__ = this;
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
datomic_cljs.api.DatomicConnection.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4230__auto__,k__4231__auto__){var self__ = this;
var this__4230__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$210,null,cljs.core.constant$keyword$211,null,cljs.core.constant$keyword$212,null], null), null),k__4231__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4230__auto____$1),self__.__meta),k__4231__auto__);
} else
{return (new datomic_cljs.api.DatomicConnection(self__.hostname,self__.port,self__.db_alias,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4231__auto__)),null));
}
});
datomic_cljs.api.DatomicConnection.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4228__auto__,k__4229__auto__,G__27547){var self__ = this;
var this__4228__auto____$1 = this;var pred__27551 = cljs.core.keyword_identical_QMARK_;var expr__27552 = k__4229__auto__;if(cljs.core.truth_((function (){var G__27554 = cljs.core.constant$keyword$210;var G__27555 = expr__27552;return (pred__27551.cljs$core$IFn$_invoke$arity$2 ? pred__27551.cljs$core$IFn$_invoke$arity$2(G__27554,G__27555) : pred__27551.call(null,G__27554,G__27555));
})()))
{return (new datomic_cljs.api.DatomicConnection(G__27547,self__.port,self__.db_alias,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__27556 = cljs.core.constant$keyword$211;var G__27557 = expr__27552;return (pred__27551.cljs$core$IFn$_invoke$arity$2 ? pred__27551.cljs$core$IFn$_invoke$arity$2(G__27556,G__27557) : pred__27551.call(null,G__27556,G__27557));
})()))
{return (new datomic_cljs.api.DatomicConnection(self__.hostname,G__27547,self__.db_alias,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__27558 = cljs.core.constant$keyword$212;var G__27559 = expr__27552;return (pred__27551.cljs$core$IFn$_invoke$arity$2 ? pred__27551.cljs$core$IFn$_invoke$arity$2(G__27558,G__27559) : pred__27551.call(null,G__27558,G__27559));
})()))
{return (new datomic_cljs.api.DatomicConnection(self__.hostname,self__.port,G__27547,self__.__meta,self__.__extmap,null));
} else
{return (new datomic_cljs.api.DatomicConnection(self__.hostname,self__.port,self__.db_alias,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4229__auto__,G__27547),null));
}
}
}
});
datomic_cljs.api.DatomicConnection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4233__auto__){var self__ = this;
var this__4233__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$210,self__.hostname],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$211,self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$212,self__.db_alias],null))], null),self__.__extmap));
});
datomic_cljs.api.DatomicConnection.prototype.datomic_cljs$api$IDatomicConnection$ = true;
datomic_cljs.api.DatomicConnection.prototype.datomic_cljs$api$IDatomicConnection$_conn_url_root$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.hostname)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.port));
});
datomic_cljs.api.DatomicConnection.prototype.datomic_cljs$api$IDatomicConnection$_transact$arity$2 = (function (conn,tx_data_str){var self__ = this;
var conn__$1 = this;var path = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datomic_cljs.api._conn_url_root(conn__$1))+"/data/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.db_alias)+"/");return datomic_cljs.http.body(datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$35,path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$208,true,cljs.core.constant$keyword$201,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$213,tx_data_str], null)], null)));
});
datomic_cljs.api.DatomicConnection.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4220__auto__,G__27547){var self__ = this;
var this__4220__auto____$1 = this;return (new datomic_cljs.api.DatomicConnection(self__.hostname,self__.port,self__.db_alias,G__27547,self__.__extmap,self__.__hash));
});
datomic_cljs.api.DatomicConnection.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4226__auto__,entry__4227__auto__){var self__ = this;
var this__4226__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4227__auto__))
{return cljs.core._assoc(this__4226__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4227__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4227__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4226__auto____$1,entry__4227__auto__);
}
});
datomic_cljs.api.DatomicConnection.cljs$lang$type = true;
datomic_cljs.api.DatomicConnection.cljs$lang$ctorPrSeq = (function (this__4255__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datomic-cljs.api/DatomicConnection");
});
datomic_cljs.api.DatomicConnection.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__){return cljs.core._write(writer__4256__auto__,"datomic-cljs.api/DatomicConnection");
});
datomic_cljs.api.__GT_DatomicConnection = (function __GT_DatomicConnection(hostname,port,db_alias){return (new datomic_cljs.api.DatomicConnection(hostname,port,db_alias));
});
datomic_cljs.api.map__GT_DatomicConnection = (function map__GT_DatomicConnection(G__27549){return (new datomic_cljs.api.DatomicConnection(cljs.core.constant$keyword$210.cljs$core$IFn$_invoke$arity$1(G__27549),cljs.core.constant$keyword$211.cljs$core$IFn$_invoke$arity$1(G__27549),cljs.core.constant$keyword$212.cljs$core$IFn$_invoke$arity$1(G__27549),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27549,cljs.core.constant$keyword$210,cljs.core.array_seq([cljs.core.constant$keyword$211,cljs.core.constant$keyword$212], 0))));
});

/**
* @constructor
* @param {*} conn
* @param {*} implicit_args
* @param {*} implicit_qs
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datomic_cljs.api.DatomicDB = (function (conn,implicit_args,implicit_qs,__meta,__extmap){
this.conn = conn;
this.implicit_args = implicit_args;
this.implicit_qs = implicit_qs;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datomic_cljs.api.DatomicDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4221__auto__,k__4222__auto__){var self__ = this;
var this__4221__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4221__auto____$1,k__4222__auto__,null);
});
datomic_cljs.api.DatomicDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4223__auto__,k27562,else__4224__auto__){var self__ = this;
var this__4223__auto____$1 = this;var G__27564 = (((k27562 instanceof cljs.core.Keyword))?k27562.fqn:null);switch (G__27564) {
case "implicit-qs":
return self__.implicit_qs;

break;
case "implicit-args":
return self__.implicit_args;

break;
case "conn":
return self__.conn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27562,else__4224__auto__);

}
});
datomic_cljs.api.DatomicDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4235__auto__,writer__4236__auto__,opts__4237__auto__){var self__ = this;
var this__4235__auto____$1 = this;var pr_pair__4238__auto__ = ((function (this__4235__auto____$1){
return (function (keyval__4239__auto__){return cljs.core.pr_sequential_writer(writer__4236__auto__,cljs.core.pr_writer,""," ","",opts__4237__auto__,keyval__4239__auto__);
});})(this__4235__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4236__auto__,pr_pair__4238__auto__,"#datomic-cljs.api.DatomicDB{",", ","}",opts__4237__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$214,self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$215,self__.implicit_args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$216,self__.implicit_qs],null))], null),self__.__extmap));
});
datomic_cljs.api.DatomicDB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4219__auto__){var self__ = this;
var this__4219__auto____$1 = this;return self__.__meta;
});
datomic_cljs.api.DatomicDB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4215__auto__){var self__ = this;
var this__4215__auto____$1 = this;return (new datomic_cljs.api.DatomicDB(self__.conn,self__.implicit_args,self__.implicit_qs,self__.__meta,self__.__extmap,self__.__hash));
});
datomic_cljs.api.DatomicDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4225__auto__){var self__ = this;
var this__4225__auto____$1 = this;return (3 + cljs.core.count(self__.__extmap));
});
datomic_cljs.api.DatomicDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4216__auto__){var self__ = this;
var this__4216__auto____$1 = this;var h__4037__auto__ = self__.__hash;if(!((h__4037__auto__ == null)))
{return h__4037__auto__;
} else
{var h__4037__auto____$1 = cljs.core.hash_imap(this__4216__auto____$1);self__.__hash = h__4037__auto____$1;
return h__4037__auto____$1;
}
});
datomic_cljs.api.DatomicDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4217__auto__,other__4218__auto__){var self__ = this;
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
datomic_cljs.api.DatomicDB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4230__auto__,k__4231__auto__){var self__ = this;
var this__4230__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$216,null,cljs.core.constant$keyword$215,null,cljs.core.constant$keyword$214,null], null), null),k__4231__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4230__auto____$1),self__.__meta),k__4231__auto__);
} else
{return (new datomic_cljs.api.DatomicDB(self__.conn,self__.implicit_args,self__.implicit_qs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4231__auto__)),null));
}
});
datomic_cljs.api.DatomicDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4228__auto__,k__4229__auto__,G__27561){var self__ = this;
var this__4228__auto____$1 = this;var pred__27565 = cljs.core.keyword_identical_QMARK_;var expr__27566 = k__4229__auto__;if(cljs.core.truth_((function (){var G__27568 = cljs.core.constant$keyword$214;var G__27569 = expr__27566;return (pred__27565.cljs$core$IFn$_invoke$arity$2 ? pred__27565.cljs$core$IFn$_invoke$arity$2(G__27568,G__27569) : pred__27565.call(null,G__27568,G__27569));
})()))
{return (new datomic_cljs.api.DatomicDB(G__27561,self__.implicit_args,self__.implicit_qs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__27570 = cljs.core.constant$keyword$215;var G__27571 = expr__27566;return (pred__27565.cljs$core$IFn$_invoke$arity$2 ? pred__27565.cljs$core$IFn$_invoke$arity$2(G__27570,G__27571) : pred__27565.call(null,G__27570,G__27571));
})()))
{return (new datomic_cljs.api.DatomicDB(self__.conn,G__27561,self__.implicit_qs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__27572 = cljs.core.constant$keyword$216;var G__27573 = expr__27566;return (pred__27565.cljs$core$IFn$_invoke$arity$2 ? pred__27565.cljs$core$IFn$_invoke$arity$2(G__27572,G__27573) : pred__27565.call(null,G__27572,G__27573));
})()))
{return (new datomic_cljs.api.DatomicDB(self__.conn,self__.implicit_args,G__27561,self__.__meta,self__.__extmap,null));
} else
{return (new datomic_cljs.api.DatomicDB(self__.conn,self__.implicit_args,self__.implicit_qs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4229__auto__,G__27561),null));
}
}
}
});
datomic_cljs.api.DatomicDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4233__auto__){var self__ = this;
var this__4233__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$214,self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$215,self__.implicit_args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$216,self__.implicit_qs],null))], null),self__.__extmap));
});
datomic_cljs.api.DatomicDB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4220__auto__,G__27561){var self__ = this;
var this__4220__auto____$1 = this;return (new datomic_cljs.api.DatomicDB(self__.conn,self__.implicit_args,self__.implicit_qs,G__27561,self__.__extmap,self__.__hash));
});
datomic_cljs.api.DatomicDB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4226__auto__,entry__4227__auto__){var self__ = this;
var this__4226__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4227__auto__))
{return cljs.core._assoc(this__4226__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4227__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4227__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4226__auto____$1,entry__4227__auto__);
}
});
datomic_cljs.api.DatomicDB.prototype.datomic_cljs$api$IDatomicDB$ = true;
datomic_cljs.api.DatomicDB.prototype.datomic_cljs$api$IDatomicDB$_q$arity$3 = (function (_,query,inputs){var self__ = this;
var ___$1 = this;var args = cljs.core.vec(cljs.core.cons(self__.implicit_args,inputs));var path = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datomic_cljs.api._conn_url_root(self__.conn))+"/api/query");return datomic_cljs.http.body(datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$33,path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$208,true,cljs.core.constant$keyword$202,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.implicit_qs,cljs.core.constant$keyword$217,cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([query], 0)),cljs.core.array_seq([cljs.core.constant$keyword$218,cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([args], 0))], 0))], null)));
});
datomic_cljs.api.DatomicDB.prototype.datomic_cljs$api$IDatomicDB$_datoms$arity$3 = (function (_,index,components){var self__ = this;
var ___$1 = this;var path = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datomic_cljs.api._conn_url_root(self__.conn))+"/data/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$219.cljs$core$IFn$_invoke$arity$1(self__.implicit_args))+"/-/datoms");return datomic_cljs.http.body(datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$33,path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$208,true,cljs.core.constant$keyword$202,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.implicit_qs,components], 0)),cljs.core.constant$keyword$220,cljs.core.name(index))], null)));
});
datomic_cljs.api.DatomicDB.prototype.datomic_cljs$api$IDatomicDB$_entity$arity$2 = (function (_,eid){var self__ = this;
var ___$1 = this;var path = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datomic_cljs.api._conn_url_root(self__.conn))+"/data/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$219.cljs$core$IFn$_invoke$arity$1(self__.implicit_args))+"/-/entity");return datomic_cljs.http.body(datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$33,path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$208,true,cljs.core.constant$keyword$202,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$221,eid,cljs.core.constant$keyword$222,cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(self__.implicit_args),cljs.core.constant$keyword$223,cljs.core.constant$keyword$223.cljs$core$IFn$_invoke$arity$1(self__.implicit_args)], null)], null)));
});
datomic_cljs.api.DatomicDB.prototype.datomic_cljs$api$IDatomicDB$_basis_t$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c_basis = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var c__13062__auto___27638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto___27638,c_basis,___$1){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto___27638,c_basis,___$1){
return (function (state_27611){var state_val_27612 = (state_27611[(1)]);if((state_val_27612 === (7)))
{var state_27611__$1 = state_27611;var statearr_27613_27639 = state_27611__$1;(statearr_27613_27639[(2)] = "-");
(statearr_27613_27639[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_27612 === (1)))
{var inst_27574 = cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(self__.implicit_args);var state_27611__$1 = state_27611;if(cljs.core.truth_(inst_27574))
{var statearr_27614_27640 = state_27611__$1;(statearr_27614_27640[(1)] = (2));
} else
{var statearr_27615_27641 = state_27611__$1;(statearr_27615_27641[(1)] = (3));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_27612 === (4)))
{var inst_27609 = (state_27611[(2)]);var state_27611__$1 = state_27611;return cljs.core.async.impl.ioc_helpers.return_chan(state_27611__$1,inst_27609);
} else
{if((state_val_27612 === (13)))
{var inst_27598 = (state_27611[(2)]);var inst_27599 = cljs.core.async.close_BANG_(c_basis);var state_27611__$1 = (function (){var statearr_27616 = state_27611;(statearr_27616[(7)] = inst_27598);
return statearr_27616;
})();var statearr_27617_27642 = state_27611__$1;(statearr_27617_27642[(2)] = inst_27599);
(statearr_27617_27642[(1)] = (12));
return cljs.core.constant$keyword$18;
} else
{if((state_val_27612 === (6)))
{var inst_27583 = (state_27611[(8)]);var state_27611__$1 = state_27611;var statearr_27618_27643 = state_27611__$1;(statearr_27618_27643[(2)] = inst_27583);
(statearr_27618_27643[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_27612 === (3)))
{var inst_27583 = (state_27611[(8)]);var inst_27581 = datomic_cljs.api._conn_url_root(self__.conn);var inst_27582 = cljs.core.constant$keyword$212.cljs$core$IFn$_invoke$arity$1(self__.conn);var inst_27583__$1 = cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(self__.implicit_args);var state_27611__$1 = (function (){var statearr_27619 = state_27611;(statearr_27619[(9)] = inst_27581);
(statearr_27619[(10)] = inst_27582);
(statearr_27619[(8)] = inst_27583__$1);
return statearr_27619;
})();if(cljs.core.truth_(inst_27583__$1))
{var statearr_27620_27644 = state_27611__$1;(statearr_27620_27644[(1)] = (6));
} else
{var statearr_27621_27645 = state_27611__$1;(statearr_27621_27645[(1)] = (7));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_27612 === (12)))
{var inst_27607 = (state_27611[(2)]);var state_27611__$1 = state_27611;var statearr_27622_27646 = state_27611__$1;(statearr_27622_27646[(2)] = inst_27607);
(statearr_27622_27646[(1)] = (4));
return cljs.core.constant$keyword$18;
} else
{if((state_val_27612 === (2)))
{var inst_27576 = cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(self__.implicit_args);var state_27611__$1 = state_27611;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27611__$1,(5),c_basis,inst_27576);
} else
{if((state_val_27612 === (11)))
{var inst_27594 = (state_27611[(11)]);var inst_27601 = cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(inst_27594);var inst_27602 = cljs.core.constant$keyword$224.cljs$core$IFn$_invoke$arity$1(inst_27601);var state_27611__$1 = state_27611;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27611__$1,(14),c_basis,inst_27602);
} else
{if((state_val_27612 === (9)))
{var inst_27594 = (state_27611[(11)]);var inst_27594__$1 = (state_27611[(2)]);var inst_27595 = (inst_27594__$1 instanceof Error);var state_27611__$1 = (function (){var statearr_27623 = state_27611;(statearr_27623[(11)] = inst_27594__$1);
return statearr_27623;
})();if(cljs.core.truth_(inst_27595))
{var statearr_27624_27647 = state_27611__$1;(statearr_27624_27647[(1)] = (10));
} else
{var statearr_27625_27648 = state_27611__$1;(statearr_27625_27648[(1)] = (11));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_27612 === (5)))
{var inst_27578 = (state_27611[(2)]);var inst_27579 = cljs.core.async.close_BANG_(c_basis);var state_27611__$1 = (function (){var statearr_27626 = state_27611;(statearr_27626[(12)] = inst_27578);
return statearr_27626;
})();var statearr_27627_27649 = state_27611__$1;(statearr_27627_27649[(2)] = inst_27579);
(statearr_27627_27649[(1)] = (4));
return cljs.core.constant$keyword$18;
} else
{if((state_val_27612 === (14)))
{var inst_27604 = (state_27611[(2)]);var inst_27605 = cljs.core.async.close_BANG_(c_basis);var state_27611__$1 = (function (){var statearr_27628 = state_27611;(statearr_27628[(13)] = inst_27604);
return statearr_27628;
})();var statearr_27629_27650 = state_27611__$1;(statearr_27629_27650[(2)] = inst_27605);
(statearr_27629_27650[(1)] = (12));
return cljs.core.constant$keyword$18;
} else
{if((state_val_27612 === (10)))
{var inst_27594 = (state_27611[(11)]);var state_27611__$1 = state_27611;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27611__$1,(13),c_basis,inst_27594);
} else
{if((state_val_27612 === (8)))
{var inst_27581 = (state_27611[(9)]);var inst_27582 = (state_27611[(10)]);var inst_27587 = (state_27611[(2)]);var inst_27588 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27581)+"/data/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27582)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27587)+"/");var inst_27589 = [cljs.core.constant$keyword$208];var inst_27590 = [true];var inst_27591 = cljs.core.PersistentHashMap.fromArrays(inst_27589,inst_27590);var inst_27592 = datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$33,inst_27588,inst_27591);var state_27611__$1 = state_27611;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27611__$1,(9),inst_27592);
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
});})(c__13062__auto___27638,c_basis,___$1))
;return ((function (switch__13047__auto__,c__13062__auto___27638,c_basis,___$1){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_27633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27633[(0)] = state_machine__13048__auto__);
(statearr_27633[(1)] = (1));
return statearr_27633;
});
var state_machine__13048__auto____1 = (function (state_27611){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_27611);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e27634){if((e27634 instanceof Object))
{var ex__13051__auto__ = e27634;var statearr_27635_27651 = state_27611;(statearr_27635_27651[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27611);
return cljs.core.constant$keyword$18;
} else
{throw e27634;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__27652 = state_27611;
state_27611 = G__27652;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_27611){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_27611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto___27638,c_basis,___$1))
})();var state__13064__auto__ = (function (){var statearr_27636 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_27636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto___27638);
return statearr_27636;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto___27638,c_basis,___$1))
);
return c_basis;
});
datomic_cljs.api.DatomicDB.cljs$lang$type = true;
datomic_cljs.api.DatomicDB.cljs$lang$ctorPrSeq = (function (this__4255__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datomic-cljs.api/DatomicDB");
});
datomic_cljs.api.DatomicDB.cljs$lang$ctorPrWriter = (function (this__4255__auto__,writer__4256__auto__){return cljs.core._write(writer__4256__auto__,"datomic-cljs.api/DatomicDB");
});
datomic_cljs.api.__GT_DatomicDB = (function __GT_DatomicDB(conn,implicit_args,implicit_qs){return (new datomic_cljs.api.DatomicDB(conn,implicit_args,implicit_qs));
});
datomic_cljs.api.map__GT_DatomicDB = (function map__GT_DatomicDB(G__27563){return (new datomic_cljs.api.DatomicDB(cljs.core.constant$keyword$214.cljs$core$IFn$_invoke$arity$1(G__27563),cljs.core.constant$keyword$215.cljs$core$IFn$_invoke$arity$1(G__27563),cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(G__27563),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27563,cljs.core.constant$keyword$214,cljs.core.array_seq([cljs.core.constant$keyword$215,cljs.core.constant$keyword$216], 0))));
});
/**
* Create an abstract connection to a Datomic REST service by passing
* the following arguments:
* 
* hostname, e.g. localhost;
* port, the port on which the REST service is listening;
* alias, the transactor alias;
* dbname, the name of the database being connected to.
*/
datomic_cljs.api.connect = (function connect(hostname,port,alias,db_name){return datomic_cljs.api.__GT_DatomicConnection(hostname,port,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(db_name)));
});
/**
* Create or connect to a Datomic database via a Datomic REST service
* by passing the following arguments:
* 
* hostname, e.g. localhost;
* port, the port on which the REST service is listening;
* alias, the transactor alias;
* db-name, the name of the database being created.
* 
* Returns a core.async channel eventually containing a database
* connection (as if using datomic-cljs.api/connect), or an error.
*/
datomic_cljs.api.create_database = (function create_database(hostname,port,alias,db_name){var c_conn = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var conn = datomic_cljs.api.connect(hostname,port,alias,db_name);var c__13062__auto___27807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto___27807,c_conn,conn){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto___27807,c_conn,conn){
return (function (state_27777){var state_val_27778 = (state_27777[(1)]);if((state_val_27778 === (7)))
{var inst_27748 = (state_27777[(7)]);var inst_27755 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27748,(200));var inst_27756 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27748,(201));var inst_27757 = (inst_27755) || (inst_27756);var state_27777__$1 = state_27777;if(cljs.core.truth_(inst_27757))
{var statearr_27779_27808 = state_27777__$1;(statearr_27779_27808[(1)] = (10));
} else
{var statearr_27780_27809 = state_27777__$1;(statearr_27780_27809[(1)] = (11));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_27778 === (1)))
{var inst_27731 = conn.datomic_cljs$api$IDatomicConnection$_conn_url_root$arity$1(null);var inst_27732 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27731)+"/data/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)+"/");var inst_27733 = [cljs.core.constant$keyword$208,cljs.core.constant$keyword$201];var inst_27734 = [cljs.core.constant$keyword$225];var inst_27735 = [db_name];var inst_27736 = cljs.core.PersistentHashMap.fromArrays(inst_27734,inst_27735);var inst_27737 = [true,inst_27736];var inst_27738 = cljs.core.PersistentHashMap.fromArrays(inst_27733,inst_27737);var inst_27739 = datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$35,inst_27732,inst_27738);var state_27777__$1 = state_27777;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27777__$1,(2),inst_27739);
} else
{if((state_val_27778 === (4)))
{var inst_27741 = (state_27777[(8)]);var state_27777__$1 = state_27777;var statearr_27781_27810 = state_27777__$1;(statearr_27781_27810[(2)] = inst_27741);
(statearr_27781_27810[(1)] = (5));
return cljs.core.constant$keyword$18;
} else
{if((state_val_27778 === (15)))
{var state_27777__$1 = state_27777;var statearr_27782_27811 = state_27777__$1;(statearr_27782_27811[(2)] = null);
(statearr_27782_27811[(1)] = (16));
return cljs.core.constant$keyword$18;
} else
{if((state_val_27778 === (13)))
{var inst_27760 = (state_27777[(2)]);var inst_27761 = cljs.core.async.close_BANG_(c_conn);var state_27777__$1 = (function (){var statearr_27783 = state_27777;(statearr_27783[(9)] = inst_27760);
return statearr_27783;
})();var statearr_27784_27812 = state_27777__$1;(statearr_27784_27812[(2)] = inst_27761);
(statearr_27784_27812[(1)] = (12));
return cljs.core.constant$keyword$18;
} else
{if((state_val_27778 === (6)))
{var inst_27747 = (state_27777[(10)]);var state_27777__$1 = state_27777;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27777__$1,(9),c_conn,inst_27747);
} else
{if((state_val_27778 === (17)))
{var inst_27767 = (state_27777[(2)]);var inst_27768 = cljs.core.async.close_BANG_(c_conn);var state_27777__$1 = (function (){var statearr_27785 = state_27777;(statearr_27785[(11)] = inst_27767);
return statearr_27785;
})();var statearr_27786_27813 = state_27777__$1;(statearr_27786_27813[(2)] = inst_27768);
(statearr_27786_27813[(1)] = (16));
return cljs.core.constant$keyword$18;
} else
{if((state_val_27778 === (3)))
{var inst_27741 = (state_27777[(8)]);var inst_27744 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_27741);var state_27777__$1 = state_27777;var statearr_27787_27814 = state_27777__$1;(statearr_27787_27814[(2)] = inst_27744);
(statearr_27787_27814[(1)] = (5));
return cljs.core.constant$keyword$18;
} else
{if((state_val_27778 === (12)))
{var inst_27773 = (state_27777[(2)]);var state_27777__$1 = state_27777;var statearr_27788_27815 = state_27777__$1;(statearr_27788_27815[(2)] = inst_27773);
(statearr_27788_27815[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_27778 === (2)))
{var inst_27741 = (state_27777[(8)]);var inst_27741__$1 = (state_27777[(2)]);var inst_27742 = cljs.core.seq_QMARK_(inst_27741__$1);var state_27777__$1 = (function (){var statearr_27789 = state_27777;(statearr_27789[(8)] = inst_27741__$1);
return statearr_27789;
})();if(inst_27742)
{var statearr_27790_27816 = state_27777__$1;(statearr_27790_27816[(1)] = (3));
} else
{var statearr_27791_27817 = state_27777__$1;(statearr_27791_27817[(1)] = (4));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_27778 === (11)))
{var state_27777__$1 = state_27777;var statearr_27792_27818 = state_27777__$1;(statearr_27792_27818[(1)] = (14));

return cljs.core.constant$keyword$18;
} else
{if((state_val_27778 === (9)))
{var inst_27752 = (state_27777[(2)]);var inst_27753 = cljs.core.async.close_BANG_(c_conn);var state_27777__$1 = (function (){var statearr_27794 = state_27777;(statearr_27794[(12)] = inst_27752);
return statearr_27794;
})();var statearr_27795_27819 = state_27777__$1;(statearr_27795_27819[(2)] = inst_27753);
(statearr_27795_27819[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_27778 === (5)))
{var inst_27747 = (state_27777[(10)]);var inst_27747__$1 = (state_27777[(2)]);var inst_27748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27747__$1,cljs.core.constant$keyword$135);var inst_27749 = (inst_27747__$1 instanceof Error);var state_27777__$1 = (function (){var statearr_27796 = state_27777;(statearr_27796[(7)] = inst_27748);
(statearr_27796[(10)] = inst_27747__$1);
return statearr_27796;
})();if(cljs.core.truth_(inst_27749))
{var statearr_27797_27820 = state_27777__$1;(statearr_27797_27820[(1)] = (6));
} else
{var statearr_27798_27821 = state_27777__$1;(statearr_27798_27821[(1)] = (7));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_27778 === (14)))
{var inst_27748 = (state_27777[(7)]);var inst_27764 = ("Could not create or connect to db: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27748));var inst_27765 = (new Error(inst_27764));var state_27777__$1 = state_27777;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27777__$1,(17),c_conn,inst_27765);
} else
{if((state_val_27778 === (16)))
{var inst_27771 = (state_27777[(2)]);var state_27777__$1 = state_27777;var statearr_27799_27822 = state_27777__$1;(statearr_27799_27822[(2)] = inst_27771);
(statearr_27799_27822[(1)] = (12));
return cljs.core.constant$keyword$18;
} else
{if((state_val_27778 === (10)))
{var state_27777__$1 = state_27777;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27777__$1,(13),c_conn,conn);
} else
{if((state_val_27778 === (8)))
{var inst_27775 = (state_27777[(2)]);var state_27777__$1 = state_27777;return cljs.core.async.impl.ioc_helpers.return_chan(state_27777__$1,inst_27775);
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
});})(c__13062__auto___27807,c_conn,conn))
;return ((function (switch__13047__auto__,c__13062__auto___27807,c_conn,conn){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_27803 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27803[(0)] = state_machine__13048__auto__);
(statearr_27803[(1)] = (1));
return statearr_27803;
});
var state_machine__13048__auto____1 = (function (state_27777){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_27777);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e27804){if((e27804 instanceof Object))
{var ex__13051__auto__ = e27804;var statearr_27805_27823 = state_27777;(statearr_27805_27823[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27777);
return cljs.core.constant$keyword$18;
} else
{throw e27804;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__27824 = state_27777;
state_27777 = G__27824;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_27777){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_27777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto___27807,c_conn,conn))
})();var state__13064__auto__ = (function (){var statearr_27806 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_27806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto___27807);
return statearr_27806;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto___27807,c_conn,conn))
);
return c_conn;
});
/**
* Creates an abstract Datomic value that can be queried.
*/
datomic_cljs.api.db = (function db(p__27825){var map__27827 = p__27825;var map__27827__$1 = ((cljs.core.seq_QMARK_(map__27827))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27827):map__27827);var conn = map__27827__$1;var db_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27827__$1,cljs.core.constant$keyword$212);return datomic_cljs.api.__GT_DatomicDB(conn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$219,db_alias], null),cljs.core.PersistentArrayMap.EMPTY);
});
/**
* Returns the value of the database as of some point t, inclusive.
* t can be a transaction number, transaction ID, or inst.
*/
datomic_cljs.api.as_of = (function as_of(db,t){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$215], null),cljs.core.assoc,cljs.core.constant$keyword$222,t);
});
/**
* Returns the value of the database since some point t, exclusive.
* t can be a transaction number, transaction ID, or inst.
*/
datomic_cljs.api.since = (function since(db,t){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$215], null),cljs.core.assoc,cljs.core.constant$keyword$223,t);
});
/**
* Returns a special database value containing all assertions and
* retractions across time. This database value can be used with
* datoms and index-range calls.
*/
datomic_cljs.api.history = (function history__$1(db){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$216], null),cljs.core.assoc,cljs.core.constant$keyword$226,true);
});
/**
* Returns a value of the database that limits the number of results
* from query and datoms to given number n.
*/
datomic_cljs.api.limit = (function limit(db,n){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$216], null),cljs.core.assoc,cljs.core.constant$keyword$227,n);
});
/**
* Returns a value of the database that offsets the results of query
* and datoms by given number n.
*/
datomic_cljs.api.offset = (function offset(db,n){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$216], null),cljs.core.assoc,cljs.core.constant$keyword$61,n);
});
/**
* Returns the as-of point, or nil if none.
*/
datomic_cljs.api.as_of_t = (function as_of_t(p__27828){var map__27831 = p__27828;var map__27831__$1 = ((cljs.core.seq_QMARK_(map__27831))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27831):map__27831);var map__27832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27831__$1,cljs.core.constant$keyword$215);var map__27832__$1 = ((cljs.core.seq_QMARK_(map__27832))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27832):map__27832);var as_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27832__$1,cljs.core.constant$keyword$222);return as_of;
});
/**
* Returns the since point, or nil if none.
*/
datomic_cljs.api.since_t = (function since_t(p__27833){var map__27836 = p__27833;var map__27836__$1 = ((cljs.core.seq_QMARK_(map__27836))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27836):map__27836);var map__27837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27836__$1,cljs.core.constant$keyword$215);var map__27837__$1 = ((cljs.core.seq_QMARK_(map__27837))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27837):map__27837);var since = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27837__$1,cljs.core.constant$keyword$223);return since;
});
/**
* Returns a core.async channel eventually containing the t of the
* the most recent transaction available via this db value.
*/
datomic_cljs.api.basis_t = (function basis_t(db){return datomic_cljs.api._basis_t(db);
});
/**
* Submits a transaction to the database for writing. The transaction
* data is sent to the Transactor and, if transactAsync, processed
* asynchronously.
* 
* tx-data is a list of lists, each of which specifies a write
* operation, either an assertion, a retraction or the invocation of
* a data function. Each nested list starts with a keyword identifying
* the operation followed by the arguments for the operation.
* 
* Returns a core.async channel that will contain a map with the
* following keys:
* 
* :db-before, the database value before the transaction;
* :db-after, the database value after the transaction;
* :tx-data, the collection of Datums produced by the transaction;
* :tempids, an argument to resolve-tempids.
*/
datomic_cljs.api.transact = (function transact(conn,tx_data){var f = (function (body){if(cljs.core.map_QMARK_(body))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(body,cljs.core.constant$keyword$228,datomic_cljs.api.as_of(datomic_cljs.api.db(conn),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,cljs.core.constant$keyword$224], null))),cljs.core.array_seq([cljs.core.constant$keyword$229,datomic_cljs.api.as_of(datomic_cljs.api.db(conn),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,cljs.core.constant$keyword$224], null)))], 0));
} else
{return body;
}
});return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datomic_cljs.api._transact(conn,((typeof tx_data === 'string')?tx_data:cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tx_data], 0))))], null),(1));
});
/**
* Execute a query against a database value with inputs. Returns a
* core.async channel that will contain the result of the query, and
* will be closed when the query is complete.
* @param {...*} var_args
*/
datomic_cljs.api.q = (function() { 
var q__delegate = function (query,db,inputs){return datomic_cljs.api._q(db,query,inputs);
};
var q = function (query,db,var_args){
var inputs = null;if (arguments.length > 2) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return q__delegate.call(this,query,db,inputs);};
q.cljs$lang$maxFixedArity = 2;
q.cljs$lang$applyTo = (function (arglist__27838){
var query = cljs.core.first(arglist__27838);
arglist__27838 = cljs.core.next(arglist__27838);
var db = cljs.core.first(arglist__27838);
var inputs = cljs.core.rest(arglist__27838);
return q__delegate(query,db,inputs);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
datomic_cljs.api.q_ffirst = (function() { 
var q_ffirst__delegate = function (query,db,inputs){var c_res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var c__13062__auto___27903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto___27903,c_res){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto___27903,c_res){
return (function (state_27887){var state_val_27888 = (state_27887[(1)]);if((state_val_27888 === (7)))
{var inst_27882 = (state_27887[(2)]);var inst_27883 = cljs.core.async.close_BANG_(c_res);var state_27887__$1 = (function (){var statearr_27889 = state_27887;(statearr_27889[(7)] = inst_27882);
return statearr_27889;
})();var statearr_27890_27904 = state_27887__$1;(statearr_27890_27904[(2)] = inst_27883);
(statearr_27890_27904[(1)] = (5));
return cljs.core.constant$keyword$18;
} else
{if((state_val_27888 === (6)))
{var inst_27877 = (state_27887[(2)]);var inst_27878 = cljs.core.async.close_BANG_(c_res);var state_27887__$1 = (function (){var statearr_27891 = state_27887;(statearr_27891[(8)] = inst_27877);
return statearr_27891;
})();var statearr_27892_27905 = state_27887__$1;(statearr_27892_27905[(2)] = inst_27878);
(statearr_27892_27905[(1)] = (5));
return cljs.core.constant$keyword$18;
} else
{if((state_val_27888 === (5)))
{var inst_27885 = (state_27887[(2)]);var state_27887__$1 = state_27887;return cljs.core.async.impl.ioc_helpers.return_chan(state_27887__$1,inst_27885);
} else
{if((state_val_27888 === (4)))
{var inst_27873 = (state_27887[(9)]);var inst_27880 = cljs.core.ffirst(inst_27873);var state_27887__$1 = state_27887;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27887__$1,(7),c_res,inst_27880);
} else
{if((state_val_27888 === (3)))
{var inst_27873 = (state_27887[(9)]);var state_27887__$1 = state_27887;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27887__$1,(6),c_res,inst_27873);
} else
{if((state_val_27888 === (2)))
{var inst_27873 = (state_27887[(9)]);var inst_27873__$1 = (state_27887[(2)]);var inst_27874 = (inst_27873__$1 instanceof Error);var state_27887__$1 = (function (){var statearr_27893 = state_27887;(statearr_27893[(9)] = inst_27873__$1);
return statearr_27893;
})();if(cljs.core.truth_(inst_27874))
{var statearr_27894_27906 = state_27887__$1;(statearr_27894_27906[(1)] = (3));
} else
{var statearr_27895_27907 = state_27887__$1;(statearr_27895_27907[(1)] = (4));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_27888 === (1)))
{var inst_27871 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datomic_cljs.api.q,query,db,inputs);var state_27887__$1 = state_27887;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27887__$1,(2),inst_27871);
} else
{return null;
}
}
}
}
}
}
}
});})(c__13062__auto___27903,c_res))
;return ((function (switch__13047__auto__,c__13062__auto___27903,c_res){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_27899 = [null,null,null,null,null,null,null,null,null,null];(statearr_27899[(0)] = state_machine__13048__auto__);
(statearr_27899[(1)] = (1));
return statearr_27899;
});
var state_machine__13048__auto____1 = (function (state_27887){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_27887);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e27900){if((e27900 instanceof Object))
{var ex__13051__auto__ = e27900;var statearr_27901_27908 = state_27887;(statearr_27901_27908[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27887);
return cljs.core.constant$keyword$18;
} else
{throw e27900;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__27909 = state_27887;
state_27887 = G__27909;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_27887){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_27887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto___27903,c_res))
})();var state__13064__auto__ = (function (){var statearr_27902 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_27902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto___27903);
return statearr_27902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto___27903,c_res))
);
return c_res;
};
var q_ffirst = function (query,db,var_args){
var inputs = null;if (arguments.length > 2) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return q_ffirst__delegate.call(this,query,db,inputs);};
q_ffirst.cljs$lang$maxFixedArity = 2;
q_ffirst.cljs$lang$applyTo = (function (arglist__27910){
var query = cljs.core.first(arglist__27910);
arglist__27910 = cljs.core.next(arglist__27910);
var db = cljs.core.first(arglist__27910);
var inputs = cljs.core.rest(arglist__27910);
return q_ffirst__delegate(query,db,inputs);
});
q_ffirst.cljs$core$IFn$_invoke$arity$variadic = q_ffirst__delegate;
return q_ffirst;
})()
;
/**
* Returns a map of the entity's attributes for the given id.
*/
datomic_cljs.api.entity = (function entity(db,eid){return datomic_cljs.api._entity(db,eid);
});
/**
* Returns a core.async channel that will contain the entity id
* associated with a symbolic keyword, or the id itself if passed.
*/
datomic_cljs.api.entid = (function entid(db,ident){if(typeof ident === 'number')
{return datomic_cljs.util.singleton_chan(ident);
} else
{return datomic_cljs.api.q_ffirst.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,new cljs.core.Symbol(null,"?e","?e",-1194391683,null),cljs.core.constant$keyword$231,new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null),cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),cljs.core.constant$keyword$233,new cljs.core.Symbol(null,"?ident","?ident",1230589912,null)], null)], null),db,cljs.core.array_seq([ident], 0));
}
});
/**
* Returns a core.async channel that will contain the ident
* associated with an entity id, or the ident itself if passed.
*/
datomic_cljs.api.ident = (function ident(db,eid){if((eid instanceof cljs.core.Keyword))
{return datomic_cljs.util.singleton_chan(eid);
} else
{return datomic_cljs.api.q_ffirst.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,new cljs.core.Symbol(null,"?ident","?ident",1230589912,null),cljs.core.constant$keyword$231,new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),cljs.core.constant$keyword$233,new cljs.core.Symbol(null,"?ident","?ident",1230589912,null)], null)], null),db,cljs.core.array_seq([eid], 0));
}
});
/**
* Raw access to the index data, by index. The index must be
* supplied, along with optional leading components.
* @param {...*} var_args
*/
datomic_cljs.api.datoms = (function() { 
var datoms__delegate = function (db,index,p__27911){var map__27913 = p__27911;var map__27913__$1 = ((cljs.core.seq_QMARK_(map__27913))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27913):map__27913);var components = map__27913__$1;return datomic_cljs.api._datoms(db,index,components);
};
var datoms = function (db,index,var_args){
var p__27911 = null;if (arguments.length > 2) {
  p__27911 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datoms__delegate.call(this,db,index,p__27911);};
datoms.cljs$lang$maxFixedArity = 2;
datoms.cljs$lang$applyTo = (function (arglist__27914){
var db = cljs.core.first(arglist__27914);
arglist__27914 = cljs.core.next(arglist__27914);
var index = cljs.core.first(arglist__27914);
var p__27911 = cljs.core.rest(arglist__27914);
return datoms__delegate(db,index,p__27911);
});
datoms.cljs$core$IFn$_invoke$arity$variadic = datoms__delegate;
return datoms;
})()
;
/**
* Returns a range of datoms in the given index, starting from start,
* or the beginning if start is nil, and going to end, or through the
* end if end is nil.
*/
datomic_cljs.api.index_range = (function index_range(db,index,start,end){return datomic_cljs.api._datoms(db,index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$64,start,cljs.core.constant$keyword$65,end], null));
});
/**
* Returns the current time rounded to the nearest second.
*/
datomic_cljs.api.squuid_seconds_component = (function squuid_seconds_component(){var G__27916 = (Date.now() / (1000));return (Math.round.cljs$core$IFn$_invoke$arity$1 ? Math.round.cljs$core$IFn$_invoke$arity$1(G__27916) : Math.round.call(null,G__27916));
});
/**
* Constructs a semi-sequential UUID. Useful for creating UUIDs that
* don't fragment indexes. Returns a UUID whose most significant 32
* bits are the current time in milliseconds, rounded to the nearest
* second.
*/
datomic_cljs.api.squuid = (function squuid(){var seconds_hex = datomic_cljs.api.squuid_seconds_component().toString((16));var trailing = "-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace((new RegExp("[xy]","g")),((function (seconds_hex){
return (function (c){var r = (((16) * (function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})()) | (0));var v = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"x"))?r:((r & (3)) | (8)));return v.toString((16));
});})(seconds_hex))
);return (new cljs.core.UUID((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(seconds_hex)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailing))));
});
/**
* Get the time part of a squuid.
*/
datomic_cljs.api.squuid_time_millis = (function squuid_time_millis(squuid){return ((function (){var G__27919 = squuid.uuid.slice((0),(8));var G__27920 = (16);return parseInt(G__27919,G__27920);
})() * (1000));
});

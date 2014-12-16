// Compiled by ClojureScript 0.0-2342
goog.provide('notes.utils');
goog.require('cljs.core');
goog.require('cljs_time.format');
goog.require('cljs_time.format');
goog.require('cljs_time.core');
goog.require('cljs_time.core');
goog.require('goog.ui.IdGenerator');
notes.utils.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
notes.utils.now = (function now(){return (new Date());
});
notes.utils.custom_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("dd/MM/yyyy");
notes.utils.date_str = (function date_str(){return cljs_time.format.unparse(notes.utils.custom_formatter,cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(notes.utils.now().getFullYear(),((1) + notes.utils.now().getMonth()),notes.utils.now().getDate()));
});
notes.utils.index_of = (function index_of(coll,v){var i = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__18245_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__18245_SHARP_);
}),coll));if(((i < cljs.core.count(coll))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.last(coll))))
{return i;
} else
{return null;
}
});

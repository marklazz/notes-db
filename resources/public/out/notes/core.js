// Compiled by ClojureScript 0.0-2342
goog.provide('notes.core');
goog.require('cljs.core');
goog.require('notes.event_handling');
goog.require('notes.dev');
goog.require('notes.utils');
goog.require('cljs.core.async');
goog.require('notes.storage_gateway');
goog.require('notes.event_handling');
goog.require('om_tools.dom');
goog.require('om.dom');
goog.require('clojure.data');
goog.require('om_tools.dom');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('notes.storage_gateway');
goog.require('notes.utils');
goog.require('notes.dev');
goog.require('clojure.string');
goog.require('om.core');
goog.require('datomic_cljs.api');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('datomic_cljs.api');
notes.core.app_title = ("Notes "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(notes.utils.date_str()));
notes.core.new_note = (function new_note(tab,index){return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$42,null,cljs.core.constant$keyword$238,tab,cljs.core.constant$keyword$239,"",cljs.core.constant$keyword$135,"edited",cljs.core.constant$keyword$240,index], null);
});
notes.core.app_state = (function (){var G__18045 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [notes.core.new_note((0),(0))], null)], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18045) : cljs.core.atom.call(null,G__18045));
})();
notes.core.edit = (function edit(e,note,owner,comm){var note_val = (function (){var G__18047 = note;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18047) : cljs.core.deref.call(null,G__18047));
})();var node = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"editField");return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,note_val], null));
});
notes.core.change = (function change(e,note,owner){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$243,e.target.value);
});
notes.core.on_blur = (function on_blur(e,note,owner,comm){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,note], null));
return false;
});
notes.core.destroy_note = (function destroy_note(app,note){var id = cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(note);om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.constant$keyword$241,((function (id){
return (function (notes__$1){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (id){
return (function (p1__18048_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(p1__18048_SHARP_),id);
});})(id))
,notes__$1));
});})(id))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$37,id], null));
return notes.storage_gateway.remove_entry(note,((function (id){
return (function (res){return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["DELETE response:",res], 0));
});})(id))
);
});
notes.core.mark_edited = (function mark_edited(n,edited_id){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(n),edited_id))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,cljs.core.constant$keyword$135,"edited");
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,cljs.core.constant$keyword$135,"entered");
}
});
notes.core.notes_with_editing_row_updated = (function notes_with_editing_row_updated(notes_list,id){return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18049_SHARP_){return notes.core.mark_edited(p1__18049_SHARP_,id);
}),notes_list));
});
notes.core.edit_note = (function edit_note(app,note){var note_list = cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1((function (){var G__18051 = app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18051) : cljs.core.deref.call(null,G__18051));
})());var id = cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(note);var final_list = cljs.core.vec(notes.core.notes_with_editing_row_updated(note_list,id));return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$241,final_list);
});
notes.core.save_or_update_note = (function save_or_update_note(app,note){if(cljs.core.truth_(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1((function (){var G__18062 = note;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18062) : cljs.core.deref.call(null,G__18062));
})())))
{if(cljs.core.not(clojure.string.blank_QMARK_(cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1((function (){var G__18063 = note;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18063) : cljs.core.deref.call(null,G__18063));
})()))))
{return notes.storage_gateway.persist_update((function (){var G__18064 = note;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18064) : cljs.core.deref.call(null,G__18064));
})(),(function (res){return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["PATCH response:",res], 0));
}));
} else
{om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.constant$keyword$241,(function (notes__$1){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18052_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(p1__18052_SHARP_),cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1((function (){var G__18065 = note;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18065) : cljs.core.deref.call(null,G__18065));
})()));
}),notes__$1));
}),cljs.core.PersistentVector.EMPTY);
return notes.storage_gateway.remove_entry((function (){var G__18066 = note;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18066) : cljs.core.deref.call(null,G__18066));
})(),(function (res){return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["DELETE response:",res], 0));
}));
}
} else
{if(cljs.core.not(clojure.string.blank_QMARK_(cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1((function (){var G__18067 = note;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18067) : cljs.core.deref.call(null,G__18067));
})()))))
{return notes.storage_gateway.persist_create((function (){var G__18068 = note;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18068) : cljs.core.deref.call(null,G__18068));
})(),(function (res){cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["PATCH response:",res], 0));
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.constant$keyword$241,(function (notes__$1){var updated_note = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__18069 = note;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18069) : cljs.core.deref.call(null,G__18069));
})(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(res),cljs.core.constant$keyword$135,"entered"], null)], 0));var final_list = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (updated_note){
return (function (p1__18053_SHARP_){if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(p1__18053_SHARP_),null)) && (cljs.core.not(clojure.string.blank_QMARK_(cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1(p1__18053_SHARP_)))))
{return updated_note;
} else
{return p1__18053_SHARP_;
}
});})(updated_note))
,notes__$1);return cljs.core.vec(final_list);
}),cljs.core.PersistentVector.EMPTY);
}));
} else
{return null;
}
}
});
notes.core.save_or_update = (function save_or_update(app,p__18070){var vec__18073 = p__18070;var current_note = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18073,(0),null);var new_blank_note = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18073,(1),null);var existing_list = cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1((function (){var G__18074 = app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18074) : cljs.core.deref.call(null,G__18074));
})());var updated_list = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(existing_list,new_blank_note);var final_list = notes.core.notes_with_editing_row_updated(updated_list,cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(new_blank_note));return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$241,final_list);
});
notes.core.hidden = (function hidden(is_hidden){if(cljs.core.truth_(is_hidden))
{return {"display": "none"};
} else
{return {};
}
});
notes.core.focus_input = (function focus_input(note,owner){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$135.cljs$core$IFn$_invoke$arity$1(note),"edited"))
{var node = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"editField");var len = node.value.length;node.focus();
return node.setSelectionRange(len,len);
} else
{return null;
}
});
notes.core.nested_element = (function nested_element(content,tab){if(((0) === tab))
{return content;
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,_){var G__18077 = {"className": "note-ul"};var G__18078 = res;return React.DOM.ul(G__18077,G__18078);
}),content,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),tab));
}
});
notes.core.indent_element = (function indent_element(content,tab){var G__18081 = {"className": "note-container"};var G__18082 = notes.core.nested_element(content,tab);return React.DOM.div(G__18081,G__18082);
});
notes.core.handle_new_note_keydown = (function handle_new_note_keydown(e,note,owner,comm){var code = notes.event_handling.event__GT_key(e);var which = e.which;var key = (function (){var G__18088 = which;return String.fromCharCode(G__18088);
})().toLowerCase();var G__18089 = code;switch (G__18089) {
case "enter":
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,note], null));
return false;

break;
case "tab":
om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(note,cljs.core.constant$keyword$238,((function (G__18089,code,which,key){
return (function (p1__18083_SHARP_){return (p1__18083_SHARP_ + (1));
});})(G__18089,code,which,key))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,null], null));
return false;

break;
case "shift+tab":
om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(note,cljs.core.constant$keyword$238,((function (G__18089,code,which,key){
return (function (p1__18084_SHARP_){return (p1__18084_SHARP_ - (1));
});})(G__18089,code,which,key))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,null], null));
return false;

break;
case "up":
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,note], null));
return false;

break;
case "down":
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,note], null));
return false;

break;
case "escape":
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,note], null));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,(function (){var G__18090 = note;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18090) : cljs.core.deref.call(null,G__18090));
})()], null));
return false;

break;
default:
return null;

}
});
notes.core.handle_new_note_keyup = (function handle_new_note_keyup(e,note,owner,comm){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(note,cljs.core.constant$keyword$239,(function (s){return e.target.value;
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,null], null));
});
notes.core.note_view = (function note_view(note,owner){if(typeof notes.core.t18114 !== 'undefined')
{} else
{
/**
* @constructor
*/
notes.core.t18114 = (function (owner,note,note_view,meta18115){
this.owner = owner;
this.note = note;
this.note_view = note_view;
this.meta18115 = meta18115;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notes.core.t18114.cljs$lang$type = true;
notes.core.t18114.cljs$lang$ctorStr = "notes.core/t18114";
notes.core.t18114.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write(writer__4203__auto__,"notes.core/t18114");
});
notes.core.t18114.prototype.om$core$IRenderState$ = true;
notes.core.t18114.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__18117){var self__ = this;
var map__18118 = p__18117;var map__18118__$1 = ((cljs.core.seq_QMARK_(map__18118))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18118):map__18118);var state = map__18118__$1;var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18118__$1,cljs.core.constant$keyword$248);var ___$1 = this;return notes.core.indent_element((function (){var G__18119 = {"className": "note-item"};var G__18120 = (function (){var G__18122 = {"style": notes.core.hidden(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$135.cljs$core$IFn$_invoke$arity$1(self__.note),"edited")), "className": "view"};var G__18123 = (function (){var G__18125 = {"onDoubleClick": ((function (G__18122,G__18119,___$1,map__18118,map__18118__$1,state,comm){
return (function (p1__18092_SHARP_){return notes.core.edit(p1__18092_SHARP_,self__.note,self__.owner,comm);
});})(G__18122,G__18119,___$1,map__18118,map__18118__$1,state,comm))
};var G__18126 = cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1(self__.note);return React.DOM.label(G__18125,G__18126);
})();var G__18124 = (function (){var G__18127 = {"onClick": ((function (G__18122,G__18123,G__18119,___$1,map__18118,map__18118__$1,state,comm){
return (function (___$2){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,(function (){var G__18129 = self__.note;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18129) : cljs.core.deref.call(null,G__18129));
})()], null));
});})(G__18122,G__18123,G__18119,___$1,map__18118,map__18118__$1,state,comm))
, "className": "destroy"};var G__18128 = "Delete";return React.DOM.button(G__18127,G__18128);
})();return React.DOM.div(G__18122,G__18123,G__18124);
})();var G__18121 = (function (){var G__18130 = {"onChange": ((function (G__18119,G__18120,___$1,map__18118,map__18118__$1,state,comm){
return (function (p1__18094_SHARP_){return notes.core.change(p1__18094_SHARP_,self__.note,self__.owner);
});})(G__18119,G__18120,___$1,map__18118,map__18118__$1,state,comm))
, "onKeyDown": ((function (G__18119,G__18120,___$1,map__18118,map__18118__$1,state,comm){
return (function (p1__18096_SHARP_){return notes.core.handle_new_note_keydown(p1__18096_SHARP_,self__.note,self__.owner,comm);
});})(G__18119,G__18120,___$1,map__18118,map__18118__$1,state,comm))
, "onKeyUp": ((function (G__18119,G__18120,___$1,map__18118,map__18118__$1,state,comm){
return (function (p1__18095_SHARP_){return notes.core.handle_new_note_keyup(p1__18095_SHARP_,self__.note,self__.owner,comm);
});})(G__18119,G__18120,___$1,map__18118,map__18118__$1,state,comm))
, "style": notes.core.hidden(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$135.cljs$core$IFn$_invoke$arity$1(self__.note),"edited"))), "className": "edit", "onBlur": ((function (G__18119,G__18120,___$1,map__18118,map__18118__$1,state,comm){
return (function (p1__18093_SHARP_){return notes.core.on_blur(p1__18093_SHARP_,self__.note,self__.owner,comm);
});})(G__18119,G__18120,___$1,map__18118,map__18118__$1,state,comm))
, "value": om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$243), "ref": "editField", "placeholder": "Enter note here..."};return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__18130) : om.dom.input.call(null,G__18130));
})();return React.DOM.li(G__18119,G__18120,G__18121);
})(),cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(self__.note));
});
notes.core.t18114.prototype.om$core$IDidUpdate$ = true;
notes.core.t18114.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return notes.core.focus_input(self__.note,self__.owner);
});
notes.core.t18114.prototype.om$core$IDidMount$ = true;
notes.core.t18114.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return notes.core.focus_input(self__.note,self__.owner);
});
notes.core.t18114.prototype.om$core$IInitState$ = true;
notes.core.t18114.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$243,cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1(self__.note)], null);
});
notes.core.t18114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18116){var self__ = this;
var _18116__$1 = this;return self__.meta18115;
});
notes.core.t18114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18116,meta18115__$1){var self__ = this;
var _18116__$1 = this;return (new notes.core.t18114(self__.owner,self__.note,self__.note_view,meta18115__$1));
});
notes.core.__GT_t18114 = (function __GT_t18114(owner__$1,note__$1,note_view__$1,meta18115){return (new notes.core.t18114(owner__$1,note__$1,note_view__$1,meta18115));
});
}
return (new notes.core.t18114(owner,note,note_view,null));
});
notes.core.go_up = (function go_up(app,note){var existing_list = cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1((function (){var G__18137 = app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18137) : cljs.core.deref.call(null,G__18137));
})());var index = notes.utils.index_of(cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1((function (){var G__18138 = app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18138) : cljs.core.deref.call(null,G__18138));
})()),(function (){var G__18139 = note;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18139) : cljs.core.deref.call(null,G__18139));
})());var id = cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1((function (){var G__18140 = note;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18140) : cljs.core.deref.call(null,G__18140));
})());var note_above = cljs.core.get.cljs$core$IFn$_invoke$arity$2(existing_list,(index - (1)));var final_list = notes.core.notes_with_editing_row_updated(existing_list,cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(note_above));if((index > (0)))
{if(cljs.core.not(clojure.string.blank_QMARK_(cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1((function (){var G__18141 = note;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18141) : cljs.core.deref.call(null,G__18141));
})()))))
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$241,final_list);
} else
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$241,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (existing_list,index,id,note_above,final_list){
return (function (p1__18131_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(p1__18131_SHARP_),id);
});})(existing_list,index,id,note_above,final_list))
,final_list)));
}
} else
{return null;
}
});
notes.core.go_down = (function go_down(app,note){var existing_list = cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1((function (){var G__18147 = app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18147) : cljs.core.deref.call(null,G__18147));
})());var index = notes.utils.index_of(cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1((function (){var G__18148 = app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18148) : cljs.core.deref.call(null,G__18148));
})()),(function (){var G__18149 = note;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18149) : cljs.core.deref.call(null,G__18149));
})());var length = cljs.core.clj__GT_js(existing_list);var last_row_index = (length.length - (1));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,last_row_index))
{if(cljs.core.not(clojure.string.blank_QMARK_(cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1((function (){var G__18150 = note;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18150) : cljs.core.deref.call(null,G__18150));
})()))))
{var new_blank_note = notes.core.new_note(cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1((function (){var G__18151 = note;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18151) : cljs.core.deref.call(null,G__18151));
})()),cljs.core.count(existing_list));var current_note = cljs.core.get.cljs$core$IFn$_invoke$arity$2(existing_list,last_row_index);return notes.core.save_or_update(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_note,new_blank_note], null));
} else
{return null;
}
} else
{var note_above = cljs.core.get.cljs$core$IFn$_invoke$arity$2(existing_list,(index + (1)));var final_list = notes.core.notes_with_editing_row_updated(existing_list,cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(note_above));return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$241,final_list);
}
});
notes.core.handle_event = (function handle_event(type,app,val){var G__18153 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__18153) {
case "save":
return notes.core.save_or_update_note(app,val);

break;
case "down":
return notes.core.go_down(app,val);

break;
case "up":
return notes.core.go_up(app,val);

break;
case "edit":
return notes.core.edit_note(app,val);

break;
case "destroy":
return notes.core.destroy_note(app,val);

break;
default:
return null;

}
});
notes.core.notes_app = (function notes_app(app,owner){if(typeof notes.core.t18197 !== 'undefined')
{} else
{
/**
* @constructor
*/
notes.core.t18197 = (function (owner,app,notes_app,meta18198){
this.owner = owner;
this.app = app;
this.notes_app = notes_app;
this.meta18198 = meta18198;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notes.core.t18197.cljs$lang$type = true;
notes.core.t18197.cljs$lang$ctorStr = "notes.core/t18197";
notes.core.t18197.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write(writer__4203__auto__,"notes.core/t18197");
});
notes.core.t18197.prototype.om$core$IRenderState$ = true;
notes.core.t18197.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__18200){var self__ = this;
var map__18201 = p__18200;var map__18201__$1 = ((cljs.core.seq_QMARK_(map__18201))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18201):map__18201);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18201__$1,cljs.core.constant$keyword$248);var ___$1 = this;var G__18202 = null;var G__18203 = (function (){var G__18205 = null;var G__18206 = notes.core.app_title;return React.DOM.h1(G__18205,G__18206);
})();var G__18204 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,null,om.core.build_all.cljs$core$IFn$_invoke$arity$3(notes.core.note_view,cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$193,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$248,comm], null),cljs.core.constant$keyword$192,cljs.core.constant$keyword$42], null)));return React.DOM.div(G__18202,G__18203,G__18204);
});
notes.core.t18197.prototype.om$core$IWillMount$ = true;
notes.core.t18197.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();notes.storage_gateway.find_all(((function (comm,___$1){
return (function (res){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$241,(function (){var nn = notes.core.new_note((0),cljs.core.count(res));var final_list = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (nn,comm,___$1){
return (function (p1__18155_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18155_SHARP_,cljs.core.constant$keyword$135,"entered");
});})(nn,comm,___$1))
,res),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nn], null)));return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$240,final_list));
})());
});})(comm,___$1))
);
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$248,comm);
var c__13062__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__13062__auto__,comm,___$1){
return (function (){var f__13063__auto__ = (function (){var switch__13047__auto__ = ((function (c__13062__auto__,comm,___$1){
return (function (state_18222){var state_val_18223 = (state_18222[(1)]);if((state_val_18223 === (7)))
{var inst_18211 = (state_18222[(2)]);var inst_18212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18211,(0),null);var inst_18213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18211,(1),null);var inst_18214 = notes.core.handle_event(inst_18212,self__.app,inst_18213);var state_18222__$1 = (function (){var statearr_18224 = state_18222;(statearr_18224[(7)] = inst_18214);
return statearr_18224;
})();var statearr_18225_18238 = state_18222__$1;(statearr_18225_18238[(2)] = null);
(statearr_18225_18238[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_18223 === (6)))
{var inst_18218 = (state_18222[(2)]);var state_18222__$1 = state_18222;var statearr_18226_18239 = state_18222__$1;(statearr_18226_18239[(2)] = inst_18218);
(statearr_18226_18239[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_18223 === (5)))
{var state_18222__$1 = state_18222;var statearr_18227_18240 = state_18222__$1;(statearr_18227_18240[(2)] = null);
(statearr_18227_18240[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_18223 === (4)))
{var state_18222__$1 = state_18222;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18222__$1,(7),comm);
} else
{if((state_val_18223 === (3)))
{var inst_18220 = (state_18222[(2)]);var state_18222__$1 = state_18222;return cljs.core.async.impl.ioc_helpers.return_chan(state_18222__$1,inst_18220);
} else
{if((state_val_18223 === (2)))
{var state_18222__$1 = state_18222;var statearr_18228_18241 = state_18222__$1;(statearr_18228_18241[(1)] = (4));

return cljs.core.constant$keyword$18;
} else
{if((state_val_18223 === (1)))
{var state_18222__$1 = state_18222;var statearr_18230_18242 = state_18222__$1;(statearr_18230_18242[(2)] = null);
(statearr_18230_18242[(1)] = (2));
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
});})(c__13062__auto__,comm,___$1))
;return ((function (switch__13047__auto__,c__13062__auto__,comm,___$1){
return (function() {
var state_machine__13048__auto__ = null;
var state_machine__13048__auto____0 = (function (){var statearr_18234 = [null,null,null,null,null,null,null,null];(statearr_18234[(0)] = state_machine__13048__auto__);
(statearr_18234[(1)] = (1));
return statearr_18234;
});
var state_machine__13048__auto____1 = (function (state_18222){while(true){
var ret_value__13049__auto__ = (function (){try{while(true){
var result__13050__auto__ = switch__13047__auto__(state_18222);if(cljs.core.keyword_identical_QMARK_(result__13050__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__13050__auto__;
}
break;
}
}catch (e18235){if((e18235 instanceof Object))
{var ex__13051__auto__ = e18235;var statearr_18236_18243 = state_18222;(statearr_18236_18243[(5)] = ex__13051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18222);
return cljs.core.constant$keyword$18;
} else
{throw e18235;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13049__auto__,cljs.core.constant$keyword$18))
{{
var G__18244 = state_18222;
state_18222 = G__18244;
continue;
}
} else
{return ret_value__13049__auto__;
}
break;
}
});
state_machine__13048__auto__ = function(state_18222){
switch(arguments.length){
case 0:
return state_machine__13048__auto____0.call(this);
case 1:
return state_machine__13048__auto____1.call(this,state_18222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13048__auto____0;
state_machine__13048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13048__auto____1;
return state_machine__13048__auto__;
})()
;})(switch__13047__auto__,c__13062__auto__,comm,___$1))
})();var state__13064__auto__ = (function (){var statearr_18237 = (function (){return (f__13063__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13063__auto__.cljs$core$IFn$_invoke$arity$0() : f__13063__auto__.call(null));
})();(statearr_18237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13062__auto__);
return statearr_18237;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13064__auto__);
});})(c__13062__auto__,comm,___$1))
);
return c__13062__auto__;
});
notes.core.t18197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18199){var self__ = this;
var _18199__$1 = this;return self__.meta18198;
});
notes.core.t18197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18199,meta18198__$1){var self__ = this;
var _18199__$1 = this;return (new notes.core.t18197(self__.owner,self__.app,self__.notes_app,meta18198__$1));
});
notes.core.__GT_t18197 = (function __GT_t18197(owner__$1,app__$1,notes_app__$1,meta18198){return (new notes.core.t18197(owner__$1,app__$1,notes_app__$1,meta18198));
});
}
return (new notes.core.t18197(owner,app,notes_app,null));
});
om.core.root(notes.core.notes_app,notes.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$200,document.getElementById("app")], null));

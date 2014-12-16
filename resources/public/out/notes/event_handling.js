// Compiled by ClojureScript 0.0-2342
goog.provide('notes.event_handling');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* map from a character code (read from events with event.which)
* to a string representation of it.
* Only need to add 'special' things here.
*/
notes.event_handling.code__GT_key = cljs.core.PersistentHashMap.fromArrays([(186),(27),(39),(46),(32),(40),(13),(9),(38),(37),(8)],[";","escape","right","del","space","down","enter","tab","up","left","backspace"]);
/**
* Given a keydown event, return the modifier keys that were being held.
*/
notes.event_handling.event_modifiers = (function event_modifiers(e){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(e.shiftKey)?"shift":null),(cljs.core.truth_(e.altKey)?"alt":null),(cljs.core.truth_(e.ctrlKey)?"ctrl":null),(cljs.core.truth_(e.metaKey)?"meta":null)], null)));
});
/**
* A vector of the modifier keys that we use to compare against to make
* sure that we don't report things like pressing the shift key as independent events.
* This may not be desirable behavior, depending on the use case, but it works for
* what I need.
*/
notes.event_handling.mod_keys = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__9448 = (16);return String.fromCharCode(G__9448);
})(),(function (){var G__9449 = (17);return String.fromCharCode(G__9449);
})(),(function (){var G__9450 = (18);return String.fromCharCode(G__9450);
})()], null);
/**
* Given an event, return a string like 'up' or 'shift+l' or 'ctrl+;'
* describing the key that was pressed.
* This fn will never return just 'shift' or any other lone modifier key.
*/
notes.event_handling.event__GT_key = (function event__GT_key(event){var mods = notes.event_handling.event_modifiers(event);var which = event.which;var key = (function (){var or__3626__auto__ = (function (){var G__9455 = which;return (notes.event_handling.code__GT_key.cljs$core$IFn$_invoke$arity$1 ? notes.event_handling.code__GT_key.cljs$core$IFn$_invoke$arity$1(G__9455) : notes.event_handling.code__GT_key.call(null,G__9455));
})();if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{return (function (){var G__9456 = which;return String.fromCharCode(G__9456);
})().toLowerCase();
}
})();if(cljs.core.truth_((function (){var and__3614__auto__ = key;if(cljs.core.truth_(and__3614__auto__))
{return (!(cljs.core.empty_QMARK_(key))) && (cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.fromArray([key], true),notes.event_handling.mod_keys)));
} else
{return and__3614__auto__;
}
})()))
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2("+",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(mods,key));
} else
{return null;
}
});

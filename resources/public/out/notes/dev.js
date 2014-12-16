// Compiled by ClojureScript 0.0-2342
goog.provide('notes.dev');
goog.require('cljs.core');
goog.require('weasel.repl');
goog.require('weasel.repl');
goog.require('figwheel.client');
goog.require('figwheel.client');
notes.dev.is_dev_QMARK_ = document.body.classList.contains("is-dev");
if(cljs.core.truth_(notes.dev.is_dev_QMARK_))
{cljs.core.enable_console_print_BANG_();
figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$150,"ws://localhost:3449/figwheel-ws",cljs.core.constant$keyword$162,(function (){return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["reloaded"], 0));
})], 0));
weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic("ws://localhost:9001",cljs.core.array_seq([cljs.core.constant$keyword$145,true], 0));
} else
{}

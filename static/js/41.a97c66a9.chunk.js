(this.webpackJsonpqrcodeionic=this.webpackJsonpqrcodeionic||[]).push([[41],{184:function(n,t,e){"use strict";e.r(t),e.d(t,"startFocusVisible",(function(){return c}));var o="ion-focused",i=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],c=function(){var n=[],t=!0,e=document,c=function(t){n.forEach((function(n){return n.classList.remove(o)})),t.forEach((function(n){return n.classList.add(o)})),n=t},s=function(){t=!1,c([])};e.addEventListener("keydown",(function(n){(t=i.includes(n.key))||c([])})),e.addEventListener("focusin",(function(n){if(t&&n.composedPath){var e=n.composedPath().filter((function(n){return!!n.classList&&n.classList.contains("ion-focusable")}));c(e)}})),e.addEventListener("focusout",(function(){e.activeElement===e.body&&c([])})),e.addEventListener("touchstart",s),e.addEventListener("mousedown",s)}}}]);
//# sourceMappingURL=41.a97c66a9.chunk.js.map
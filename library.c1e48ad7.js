function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},r.parcelRequired7c6=o),o.register("kyEFX",(function(t,r){var n,i;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("2sH7u",(function(r,n){e(r.exports,"emptyLibrary",(function(){return l})),o("4YjAd");var i=o("h2UST");const s=document.querySelector(".empty-library");function l(){const e=`<div class="empty-library">\n  <p class="empty-library__title">WTF!?</p>\n  <img class="empty-library__img" src="${t(i)}" alt ="стрічка фільму" width="780" >\n  </div> `;s.insertAdjacentHTML("beforeend",e)}})),o.register("4YjAd",(function(e,t){o("krGWQ"),window.addEventListener("load",(function(){document.querySelector(".toggler");const e=document.querySelector(".theme-btn"),t=document.documentElement,r=localStorage.getItem("user-theme");let n;window.matchMedia&&(n=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{!r&&i()})),e&&e.addEventListener("click",(function(e){i(!0)}));function i(e=!1){let r,n=t.classList.contains("light")?"light":"dark";"light"===n?r="dark":"dark"===n&&(r="light"),t.classList.remove(n),t.classList.add(r),e&&localStorage.setItem("user-theme",r)}r?t.classList.add(r):t.classList.add(n)}))})),o.register("h2UST",(function(e,t){e.exports=new URL(o("kyEFX").resolve("1pOTC"),import.meta.url).toString()})),o("kyEFX").register(JSON.parse('{"bHX8u":"library.c1e48ad7.js","1pOTC":"movies.1bebf4d5.png"}')),o("2sH7u");
//# sourceMappingURL=library.c1e48ad7.js.map

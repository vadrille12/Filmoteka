!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},c={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in c){var t=c[e];delete c[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){c[e]=t},n.parcelRequired7c6=o),o.register("iE7OH",(function(t,n){var r,c;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return c}),(function(e){return c=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},c=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var c={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=c[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),c[e]=t),t}})),o("iE7OH").register(JSON.parse('{"jNRdE":"library.730dae18.js","30ai7":"movies.1bebf4d5.png"}'));document.querySelector("body"),document.querySelector(".header-form"),document.querySelector(".watched-list-btn"),document.getElementById("tui-pagination-container"),document.querySelector(".cards__list"),document.querySelector(".cards__list"),document.querySelector(".header-form"),document.querySelector(".cards__list"),document.querySelector(".backdrop"),document.querySelector(".modal"),document.querySelector(".modal-movie"),document.querySelector(".modal__content"),document.querySelector(".btn-modal__icon"),document.querySelector(".btn-modal__watched"),document.querySelector(".btn-modal__queue"),document.querySelector(".modal__text");window.addEventListener("load",(function(){document.querySelector(".toggler");var e,t=document.querySelector(".theme-btn"),n=document.documentElement,r=localStorage.getItem("user-theme");window.matchMedia&&(e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){!r&&c()})),t&&t.addEventListener("click",(function(e){c(!0)}));function c(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=n.classList.contains("light")?"light":"dark";"light"===r?e="dark":"dark"===r&&(e="light"),n.classList.remove(r),n.classList.add(e),t&&localStorage.setItem("user-theme",e)}r?n.classList.add(r):n.classList.add(e)}));var a="https://api.themoviedb.org/3",i=("".concat(a,"/trending/movie/week"),"".concat(a,"/search/movie"),"".concat(a,"/movie"),document.querySelector(".watched-list-btn")),l=document.querySelector(".queue-list-btn");function s(e){var t=e.genres,n=e.poster_path,r=e.title,c=e.release_date,o=e.id,a=e.vote_average,i=[];if(t.map((function(e){return i.push(e.name)})),i.length>3){var l=i.slice(0,2);l.push("Other"),i=l}var s=i.join(", "),d=c.slice(0,4),u=a.toFixed(1);return'<li class="grid__item film-card ">\n        <a href="#" data-id="'.concat(o,'" class="list">\n          <div class="film-card__thumb">\n            <img\n              class="film-card__img"\n              src="').concat("8b20680c766bc5c37143e5d6b7aa7894").concat(n,'"\n              alt="Movie poster"\n              loading="lazy"\n              id=').concat(o,'\n            />\n          </div>\n          <h2 class="film-card__header">').concat(r,'</h2>\n        </a>\n        <p class="film-card__genres">').concat(s,'</p>\n        <span class="film-card__year">').concat(d,'</span>\n        <span class="film-card__rating">').concat(u,"</span>\n      </li>")}i.addEventListener("click",(function(){i.classList.add("js-active"),l.classList.remove("js-active")})),l.addEventListener("click",(function(){l.classList.add("js-active"),i.classList.remove("js-active")}));var d=document.querySelector(".empty-library"),u=document.querySelector(".film-list-lib-js"),m="watched-movies",f="queue-movies",g=JSON.parse(localStorage.getItem(m)),h=JSON.parse(localStorage.getItem(f)),v=g.concat(h),p=v.filter((function(e,t,n){return n.indexOf(e)===t}));!function(){if(v)try{p.map((function(e){fetch.getFilmDetails(e).then((function(e){var t=s(e);u.insertAdjacentHTML("beforeend",t)}))}))}catch(e){console.log(e.message)}}(),i.addEventListener("click",(function(){if(v){var e=JSON.parse(localStorage.getItem(m));u.innerHTML="";try{e.map((function(e){fetch.getFilmDetails(e).then((function(e){var t=s(e);u.insertAdjacentHTML("beforeend",t)}))}))}catch(e){console.log(e.message)}}})),l.addEventListener("click",(function(){if(v){var e=JSON.parse(localStorage.getItem(f));u.innerHTML="";try{e.map((function(e){fetch.getFilmDetails(e).then((function(e){var t=s(e);u.insertAdjacentHTML("beforeend",t)}))}))}catch(e){console.log(e.message)}}})),p.length||d.classList.remove("is-hidden");var y;y=o("aNJCr").getBundleURL("jNRdE")+o("iE7OH").resolve("30ai7");var _,b=document.querySelector(".empty-library");_='<div class="empty-library">\n  <p class="empty-library__title">WTF!?</p>\n  <img class="empty-library__img" src="'.concat(t(y),'" alt ="стрічка фільму" width="780" >\n  </div> '),b.insertAdjacentHTML("beforeend",_)}();
//# sourceMappingURL=library.730dae18.js.map

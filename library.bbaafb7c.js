!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},r.parcelRequired7c6=o),o.register("iE7OH",(function(t,r){var n,a;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var a={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),a[e]=t),t}})),o("iE7OH").register(JSON.parse('{"jNRdE":"library.bbaafb7c.js","25juZ":"movies.be67a867.jpg","5yY5W":"index.cfb51b94.js"}'));var i=o("bpxeT"),c=o("2TvXO"),l=document.querySelector(".watched-list-btn"),u=[];function s(){return d.apply(this,arguments)}function d(){return(d=t(i)(t(c).mark((function e(){var r,n,a,o,i;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(main.innerHTML="",null===JSON.parse(localStorage.getItem("added-to-watched"))){e.next=24;break}if(r=JSON.parse(localStorage.getItem("added-to-watched")).length,0!==JSON.parse(localStorage.getItem("added-to-watched")).length){e.next=7;break}main.insertAdjacentHTML("beforeend",'<p class="alert">There are no movies in your watched list!</p>'),l.textContent="WATCHED",e.next=22;break;case 7:main.innerHTML="",u=JSON.parse(localStorage.getItem("added-to-watched")),n=[],a=0;case 11:if(!(a<u.length)){e.next=20;break}return o=u[a],e.next=15,getMoviesbyId(o);case 15:i=e.sent,n.push(i);case 17:a++,e.next=11;break;case 20:totalPages=Math.ceil(n.length/20),l.textContent="WATCHED : ".concat(r);case 22:e.next=25;break;case 24:main.insertAdjacentHTML("beforeend",'<p class="alert">There are no movies in your watched list!</p>'),l.textContent="WATCHED";case 25:l.setAttribute("disabled",!0);case 26:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s(),l.addEventListener("click",(function(e){e.preventDefault(),s()}));document.querySelectorAll(".header-library__btn"),document.querySelectorAll(".header-library__activ"),document.querySelector(".queue-list-btn");var f;f=o("aNJCr").getBundleURL("jNRdE")+o("iE7OH").resolve("25juZ");var p,b=document.querySelector(".empty-library");p='<div class="empty-library">\n  <p class="empty-library__title">WTF!?</p>\n  <img class="empty-library__img" src="'.concat(t(f),'" alt ="стрічка фільму" width="780" >\n  </div> '),b.insertAdjacentHTML("beforeend",p)}();
//# sourceMappingURL=library.bbaafb7c.js.map

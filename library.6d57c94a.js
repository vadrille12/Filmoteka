!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("8AEpj"),c=o("cHsZg");o("ajzNc");o("31Aea");var a=document.querySelector(".watched-list-btn"),r=document.querySelector(".queue-list-btn");document.querySelector(".empty-library"),document.querySelector(".film-list-lib-js");var l=document.querySelector(".card__list--library"),s=document.querySelector(".library-default"),d="watched-movies",v="queue-movies",m=JSON.parse(localStorage.getItem(d)),u=JSON.parse(localStorage.getItem(v)),g=m.concat(u);g.filter((function(e,n,t){return t.indexOf(e)===n}));function _(){if(0===m.length&&(0,c.emptyLibrary)(),g.length>0){var e=JSON.parse(localStorage.getItem(d));console.log(e),l.innerHTML="";try{f(e)}catch(e){console.log(e.message)}}}function h(e){return e.map((function(e){return localStorage.getItem(e)})).join(", ")}function f(e){var n="",t="";(0,i.waitingLi)();var o=e.map((function(e){var o=e.poster_path,i=e.title,c=e.genre_ids,a=e.release_date,r=void 0===a?"":a,l=e.vote_average,s=void 0===l?"":l,d=e.id;return c.length>3&&(c.splice(3,c.length-3),n=h(c),n+=", other"),(n=h(c)).length>24&&(c.pop(),n=h(c),n+=", other"),0===c.length&&(n="genre is unknown"),""===(t=r.slice(0,4))&&(t="release date unknown"),o?'<li id="'.concat(d,'" class="movie__card">\n        <img\n          src="').concat("https://image.tmdb.org/t/p/w500/").concat(o,'"\n          class="movie__cover"\n        />\n        <div class="movie__info">\n        <h2 class="movie__title">').concat(i,'</h2>\n        <div class="movie__item">\n          <h3 class="movie__category">').concat(n,'</h3>\n          <h3 class="movie__year">').concat(t,'</h3>\n          <div class="movie__average">').concat(s.toFixed(1),"</div>\n        </div>\n      </div>\n      </li>"):'<li  id="'.concat(d,'" class="movie__card">\n        <img width="100%"\n          src="').concat(photo,'"\n          class="movie__cover"\n        />\n        <div class="movie__info">\n        <h2 class="movie__title">').concat(i,'</h2>\n        <div class="movie__item">\n          <h3 class="movie__category">').concat(n,'</h3>\n          <h3 class="movie__year">').concat(t,'</h3>\n          <div class="movie__average">').concat(s.toFixed(1),"</div>\n        </div>\n      </div>\n      </li>")})).join("");console.log(o),l.innerHTML=o}console.log(g),a.addEventListener("click",_),r.addEventListener("click",(function(){0===u.length&&(0,c.emptyLibrary)();if(g){var e=JSON.parse(localStorage.getItem(v));l.innerHTML="";try{f(e)}catch(e){console.log(e.message)}}})),s.addEventListener("click",_)}();
//# sourceMappingURL=library.6d57c94a.js.map

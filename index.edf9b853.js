var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var i=o[e];delete o[e];var t={id:e,exports:{}};return n[e]=t,i.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){o[e]=n},e.parcelRequired7c6=i);const t={headers:{"Content-Type":"application/json;charset=utf-8"}};!async function(){const e=await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=8b20680c766bc5c37143e5d6b7aa7894",t),n=await e.json();console.log(n)}(),i("2sH7u");const a=document.querySelector(".cards__list");console.log(a),function(e){const n=e.map((({poster_path:e,title:n,genres:o,release_date:i,vote_average:t})=>`<li class="movie__card">\n      <img\n        src="${e}"\n        class="movie__cover"\n      />\n    </li>\n    <div class="movie__info">\n      <h2 class="movie__title">${n}</h2>\n      <div class="movie__item">\n        <h3 class="movie__category">${o.name}</h3>\n        <h3 class="movie__year">${i}</h3>\n        <div class="movie__average">${t}</div> \n      </div>\n    </div>`)).join("");a.insertAdjacentHTML("beforeend",n)}();
//# sourceMappingURL=index.edf9b853.js.map

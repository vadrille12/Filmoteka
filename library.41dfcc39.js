const e=document.querySelector(".watched-list-btn"),t=document.querySelector(".queue-list-btn");function s({genres:e,poster_path:t,title:s,release_date:a,id:n,vote_average:c}){let i=[];if(e.map((e=>i.push(e.name))),i.length>3){const e=i.slice(0,2);e.push("Other"),i=e}return`<li class="grid__item film-card ">\n        <a href="#" data-id="${n}" class="list">\n          <div class="film-card__thumb">\n            <img\n              class="film-card__img"\n              src="8b20680c766bc5c37143e5d6b7aa7894${t}"\n              alt="Movie poster"\n              loading="lazy"\n              id=${n}\n            />\n          </div>\n          <h2 class="film-card__header">${s}</h2>\n        </a>\n        <p class="film-card__genres">${i.join(", ")}</p>\n        <span class="film-card__year">${a.slice(0,4)}</span>\n        <span class="film-card__rating">${c.toFixed(1)}</span>\n      </li>`}e.addEventListener("click",(function(){e.classList.add("js-active"),t.classList.remove("js-active")})),t.addEventListener("click",(function(){t.classList.add("js-active"),e.classList.remove("js-active")}));const a=document.querySelector(".empty-library"),n=document.querySelector(".film-list-lib-js"),c=JSON.parse(localStorage.getItem("watched-movies")),i=JSON.parse(localStorage.getItem("queue-movies")),l=c.concat(i),r=l.filter(((e,t,s)=>s.indexOf(e)===t));!function(){if(l)try{r.map((e=>{fetch.getFilmDetails(e).then((e=>{const t=s(e);n.insertAdjacentHTML("beforeend",t)}))}))}catch(e){console.log(e.message)}}(),e.addEventListener("click",(function(){if(l){const e=JSON.parse(localStorage.getItem("watched-movies"));n.innerHTML="";try{e.map((e=>{fetch.getFilmDetails(e).then((e=>{const t=s(e);n.insertAdjacentHTML("beforeend",t)}))}))}catch(e){console.log(e.message)}}})),t.addEventListener("click",(function(){if(l){const e=JSON.parse(localStorage.getItem("queue-movies"));n.innerHTML="";try{e.map((e=>{fetch.getFilmDetails(e).then((e=>{const t=s(e);n.insertAdjacentHTML("beforeend",t)}))}))}catch(e){console.log(e.message)}}})),r.length||a.classList.remove("is-hidden");
//# sourceMappingURL=library.41dfcc39.js.map

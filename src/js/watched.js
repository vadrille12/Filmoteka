const watchedBtn = document.querySelector('.watched-list-btn');
const queueBtn = document.querySelector('.queue-list-btn');

watchedBtn.addEventListener('click', onWatched);
queueBtn.addEventListener('click', onQueueBtn);

function onWatched() {
    watchedBtn.classList.add('js-active');
    queueBtn.classList.remove('js-active');
}
function onQueueBtn() {
    queueBtn.classList.add('js-active');
    watchedBtn.classList.remove('js-active');
}

// // создание 

import { API_KEY, BASE_URL, TREND_URL, SEARCH_URL } from './api-vars.js';

function createLibraryMarkup({
  genres,
  poster_path,
  title,
  release_date,
  id,
  vote_average
}) {
  let genresArr = [];
  genres.map((genre) =>
    genresArr.push(genre.name));
  if (genresArr.length > 3) {
    const changedArr = genresArr.slice(0, 2);
    changedArr.push('Other');
    genresArr = changedArr;
  }
  const genresStr = genresArr.join(', ');
  const year = release_date.slice(0, 4);
  const rating = vote_average.toFixed(1);
  return `<li class="grid__item film-card ">
        <a href="#" data-id="${id}" class="list">
          <div class="film-card__thumb">
            <img
              class="film-card__img"
              src="${API_KEY}${poster_path}"
              alt="Movie poster"
              loading="lazy"
              id=${id}
            />
          </div>
          <h2 class="film-card__header">${title}</h2>
        </a>
        <p class="film-card__genres">${genresStr}</p>
        <span class="film-card__year">${year}</span>
        <span class="film-card__rating">${rating}</span>
      </li>`;
}

// рендер
const emptyLibrary = document.querySelector('.empty-library');
const listLib = document.querySelector('.film-list-lib-js');

const LOCAL_STORAGE_KEY_WATCHED = 'watched-movies';
const LOCAL_STORAGE_KEY_QUEUE = 'queue-movies';
const saveDataWatched = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_KEY_WATCHED)
);
const saveDataQueue = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_QUEUE));
const saveDataAll = saveDataWatched.concat(saveDataQueue);
const savedDataAllQniue = saveDataAll.filter(
  (data, index, array) => array.indexOf(data) === index
);


// init();

watchedBtn.addEventListener('click', onWatchedClick);
queueBtn.addEventListener('click', onQueueClick);

if (!savedDataAllQniue.length) {
  emptyLibrary.classList.remove('is-hidden');
}

// export function init() {
//   if (saveDataAll) {
//     try {
      
//       savedDataAllQniue.map(id => {
//         fetch.getFilmDetails(id).then(promise => {
//           const markup = createLibraryMarkup(promise);
//           listLib.insertAdjacentHTML('beforeend', markup);
//         });
//       });
//     } catch (error) {
//       console.log(error.message);
//     } 
//   }
// }


// export function init() {
//   if (saveDataAll) {
//     try {
      
//       savedDataAllQniue.map(id => {

//           const markup = createLibraryMarkup(promise);
//           listLib.insertAdjacentHTML('beforeend', markup);
//       });
//     } catch (error) {
//       console.log(error.message);
//     } 
//   }
// }

// function onWatchedClick() {
//   if (saveDataAll) {
//       const saveDataWatched = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_WATCHED));
//       listLib.innerHTML = '';
//       try {
      
//       saveDataWatched.map(id => {
//         fetch.getFilmDetails(id).then(promise => {
//           const markup = createLibraryMarkup(promise);
//           listLib.insertAdjacentHTML('beforeend', markup);
//         });
//       });
//     } catch (error) {
//       console.log(error.message);
//     } 
//   }
// }

// function onQueueClick() {
//   if (saveDataAll) {
//       const saveDataQueue = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_QUEUE));
//         listLib.innerHTML = '';
//     try {
     
//       saveDataQueue.map(id => {
//         fetch.getFilmDetails(id).then(promise => {
//           const markup = createLibraryMarkup(promise);
//           listLib.insertAdjacentHTML('beforeend', markup);
//         });
//       });
//     } catch (error) {
//       console.log(error.message);
//     } 
//   }
// }

import { renderTrendingMovies } from './filmCard';

function onWatchedClick() {
  if (saveDataAll) {
      const saveDataWatched = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_WATCHED));
      listLib.innerHTML = '';
      
      try {
        renderTrendingMovies(saveDataWatched);
    } catch (error) {
      console.log(error.message);
    } 
  }
}

function onQueueClick() {
  if (saveDataAll) {
      const saveDataQueue = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_QUEUE));
        listLib.innerHTML = '';
    try {
      renderTrendingMovies(saveDataQueue);
      
    } catch (error) {
      console.log(error.message);
    } 
  }
}
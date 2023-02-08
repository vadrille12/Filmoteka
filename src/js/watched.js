import { waitingLi } from './modalMovie';
import { emptyLibrary } from './library';
const watchedBtn = document.querySelector('.watched-list-btn');
const queueBtn = document.querySelector('.queue-list-btn');

// watchedBtn.addEventListener('click', onWatched);
// queueBtn.addEventListener('click', onQueueBtn);

// function onWatched() {
//   watchedBtn.classList.add('js-active');
//   queueBtn.classList.remove('js-active');
// }
// function onQueueBtn() {
//   queueBtn.classList.add('js-active');
//   watchedBtn.classList.remove('js-active');

// }

// // создание

import { API_KEY, BASE_URL, TREND_URL, SEARCH_URL } from './api-vars.js';

function createLibraryMarkup({
  genres,
  poster_path,
  title,
  release_date,
  id,
  vote_average,
}) {
  let genresArr = [];
  genres.map(genre => genresArr.push(genre.name));
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
//const emptyLibrary = document.querySelector('.empty-library');
const container = document.querySelector('.empty-library');
const listLib = document.querySelector('.film-list-lib-js');
const listCardsLibrary = document.querySelector('.card__list--library');
const libraryBtn = document.querySelector('.library-default');
// console.log(listCardsLibrary);

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
console.log(saveDataAll);
// init();

watchedBtn.addEventListener('click', onWatchedClick);
queueBtn.addEventListener('click', onQueueClick);
libraryBtn.addEventListener('click', onWatchedClick);

// if (!savedDataAllQniue.length) {
//   emptyLibrary.classList.remove('is-hidden');
// }

import { renderTrendingMovies } from './filmCard';

function onWatchedClick() {
 
  if (saveDataWatched.length === 0) {
    emptyLibrary();
    
  }
  if (saveDataAll.length > 0) {
    const saveDataWatched = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_WATCHED)
    );
    console.log(saveDataWatched);
    listCardsLibrary.innerHTML = '';

    try {
      renderMoviesFromLibrary(saveDataWatched);
    } catch (error) {
      console.log(error.message);
    }
  }
}

function onQueueClick() {
  if (saveDataQueue.length === 0) {
    emptyLibrary();
  }
  if (saveDataAll) {
    const saveDataQueue = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_QUEUE)
    );
    listCardsLibrary.innerHTML = '';
    try {
      renderMoviesFromLibrary(saveDataQueue);
    } catch (error) {
      console.log(error.message);
    }
  }
}

function getGenres(genresArr) {
  return genresArr.map(genre => localStorage.getItem(genre)).join(', ');
}

function renderMoviesFromLibrary(data) {
  const urlImage = 'https://image.tmdb.org/t/p/w500/';
  let genresName = '';
  let releaseYear = '';
  waitingLi();
  const cardMarkupLibrary = data
    .map(
      ({
        poster_path,
        title,
        genre_ids: genres,
        release_date = '',
        vote_average = '',
        id,
      }) => {
        if (genres.length > 3) {
          genres.splice(3, genres.length - 3);

          genresName = getGenres(genres);
          genresName = genresName + ', other';
        }

        genresName = getGenres(genres);

        if (genresName.length > 24) {
          genres.pop();

          genresName = getGenres(genres);
          genresName = genresName + ', other';
        }

        if (genres.length === 0) {
          genresName = 'genre is unknown';
        }

        releaseYear = release_date.slice(0, 4);
        if (releaseYear === '') {
          releaseYear = 'release date unknown';
        }

        if (!poster_path) {
          return `<li  id="${id}" class="movie__card">
        <img width="100%"
          src="${photo}"
          class="movie__cover"
        />
        <div class="movie__info">
        <h2 class="movie__title">${title}</h2>
        <div class="movie__item">
          <h3 class="movie__category">${genresName}</h3>
          <h3 class="movie__year">${releaseYear}</h3>
          <div class="movie__average">${vote_average.toFixed(1)}</div>
        </div>
      </div>
      </li>`;
        } else {
          return `<li id="${id}" class="movie__card">
        <img
          src="${urlImage}${poster_path}"
          class="movie__cover"
        />
        <div class="movie__info">
        <h2 class="movie__title">${title}</h2>
        <div class="movie__item">
          <h3 class="movie__category">${genresName}</h3>
          <h3 class="movie__year">${releaseYear}</h3>
          <div class="movie__average">${vote_average.toFixed(1)}</div>
        </div>
      </div>
      </li>`;
        }
      }
    )
    .join('');
  console.log(cardMarkupLibrary);
  listCardsLibrary.innerHTML = cardMarkupLibrary;
}

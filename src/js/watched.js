import photo from '../images/header/photo.jpg';
import { waitingLi } from './modalMovie';
import { emptyLibrary } from './library';
import { refs } from './refs';
const watchedBtn = document.querySelector('.watched-list-btn');
const queueBtn = document.querySelector('.queue-list-btn');
refs.addWatchedBtn.addEventListener('click', removeMovieFromWatched);
refs.addQueueBtn.addEventListener('click', removeMovieFromQueue);
watchedBtn.addEventListener('click', onWatchedClick);
queueBtn.addEventListener('click', onQueueClick);

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

const container = document.querySelector('.empty-library');
const listLib = document.querySelector('.film-list-lib-js');
const listCardsLibrary = document.querySelector('.card__list--library');
const libraryBtn = document.querySelector('.library-default');

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

renderMoviesFromLibrary(saveDataWatched);

function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex(obj => obj.id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}

let idforRemovingFilm = [];
let idForRemovinigFilmQueue = [];

if (saveDataWatched.length === 0) {
  emptyLibrary();
}

function removeMovieFromWatched(e) {
  if (saveDataWatched.length === 1) {
    emptyLibrary();
  }

  if (refs.addWatchedBtn.classList.contains('active-watched')) {
    const forDeleteId = Number(e.target.dataset.id);
    idforRemovingFilm = saveDataWatched.find(film => {
      if (forDeleteId === film.id) {
        return film;
      }
    });

    removeObjectWithId(saveDataWatched, idforRemovingFilm.id);
    renderMoviesFromLibrary(saveDataWatched);
  } else {
    saveDataWatched.push(idforRemovingFilm);
    renderMoviesFromLibrary(saveDataWatched);
    const refEmptyLibrary = document.querySelector('.empty-library');
    refEmptyLibrary.innerHTML = '';
  }
}

function removeMovieFromQueue(e) {
  if (saveDataQueue.length === 1) {
    emptyLibrary();
  }

  if (refs.addQueueBtn.classList.contains('active-queue')) {
    const forDeleteId = Number(e.target.dataset.id);
    idForRemovinigFilmQueue = saveDataQueue.find(film => {
      if (forDeleteId === film.id) {
        // console.log(film.id);
        return film;
      }
    });
    removeObjectWithId(saveDataQueue, idForRemovinigFilmQueue.id);
    renderMoviesFromLibrary(saveDataQueue);
  } else {
    saveDataQueue.push(idForRemovinigFilmQueue);
    renderMoviesFromLibrary(saveDataQueue);
    const refEmptyLibrary = document.querySelector('.empty-library');
    refEmptyLibrary.innerHTML = '';
  }
}

export function onWatchedClick() {
  container.innerHTML = '';
  if (saveDataWatched.length === 0) {
    emptyLibrary();
  }
  if (saveDataAll.length > 0) {
    const saveDataWatched = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_WATCHED)
    );
    listCardsLibrary.innerHTML = '';

    try {
      renderMoviesFromLibrary(saveDataWatched);
    } catch (error) {
      console.log(error.message);
    }
  }
}

function onQueueClick() {
  container.innerHTML = '';
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

export function renderMoviesFromLibrary(data) {
  if (saveDataWatched.length === 0 && saveDataQueue.length === 0) {
    emptyLibrary();
  }

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

  listCardsLibrary.innerHTML = cardMarkupLibrary;
}

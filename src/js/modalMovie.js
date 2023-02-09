import photo from '../images/header/photo.jpg';
import { refs } from '../js/refs';
import { load, save } from './localStorage';
import { fetchTrailer } from './fetchAPI';
import { onClickTrailer } from './trailer';
import { invalidSearchTrailer } from './trailer';

const LOCAL_KEY_WATCHED = 'watched-movies';
const LOCAL_KEY_QUEUE = 'queue-movies';

const modalM = document.querySelector('[data-modal]');

let arrWatchedMovies = [];
let arrQueueMovies = [];

if (!load(LOCAL_KEY_WATCHED)) {
  save(LOCAL_KEY_WATCHED, arrWatchedMovies);
}

if (!load(LOCAL_KEY_QUEUE)) {
  save(LOCAL_KEY_QUEUE, arrQueueMovies);
}

function renderCardOfMovie({
  title,
  vote_average,
  vote_count,
  popularity,
  poster_path,
  original_title,
  genre_ids,
  overview,
  id,
}) {
  const arrGenres = genre_ids.map(genre => {
    return localStorage.getItem(genre);
  });

  const markupForModalMovie = `  <img
          class='modal-movie__img'

          ${
            poster_path
              ? `
    srcset="
    https://image.tmdb.org/t/p/w300/${poster_path}      300w,
    https://image.tmdb.org/t/p/w500/${poster_path}      500w,
    https://image.tmdb.org/t/p/w780/${poster_path}      780w,
    https://image.tmdb.org/t/p/w1280/${poster_path}    1280w,
    https://image.tmdb.org/t/p/original/${poster_path} 2000w
  "
  src="https://image.tmdb.org/t/p/w300/${poster_path}"
  sizes="(min-width:1280px) 375px, (min-width:768px) 264px, 100vw"

  `
              : `src="${photo}"
  `
          }
        />
        <button type="button" class="btn__open-trailer js-open-trailer"></button>`;

  const markupForModalContent = `
        <h2 class='modal__title'>${title}</h2>
          <table class='modal-info'>
            <tr>${
              vote_count
                ? `<td class='modal-info__title'>Vote / Votes</td>`
                : ''
            }
              ${
                vote_count
                  ? `<td class='modal-info__value'>
                <span class='modal-info__rate'>${vote_average.toFixed(1)}</span>
                /
                <span class='modal-info__rate'>${vote_count}</span>
              </td>`
                  : ''
              }
            
            </tr>
            <tr>
              ${
                popularity
                  ? `<td class='modal-info__title'>Popularity</td>`
                  : ''
              }
              ${
                popularity
                  ? `<td class='modal-info__value'>${popularity.toFixed(
                      1
                    )}</td>`
                  : ''
              }
            </tr>
            <tr>
              ${
                original_title
                  ? `<td class='modal-info__title'>Original Title</td>`
                  : ''
              }
              ${
                original_title
                  ? `<td class='modal-info__value'>${original_title}</td>`
                  : ''
              }
            </tr>
            <tr>
              ${
                arrGenres.join(', ')
                  ? `<td class='modal-info__title'>Genre</td>`
                  : ''
              }
              ${
                arrGenres.join(', ')
                  ? `<td class='modal-movie-info__value'>${arrGenres.join(
                      ', '
                    )}</td>`
                  : ''
              }
            </tr>
          </table>
          <div class='modal-about'>
            ${overview ? `<h3 class='modal-about__title'>About</h3>` : ''}
            ${overview ? `<p class='modal-about__desc'>${overview}</p>` : ''}
          </div>`;

  refs.modal.setAttribute('data-id', id);
  refs.addWatchedBtn.setAttribute('data-id', id);
  refs.addQueueBtn.setAttribute('data-id', id);
  refs.modalMovie.insertAdjacentHTML('afterbegin', markupForModalMovie);
  refs.modalText.insertAdjacentHTML('afterbegin', markupForModalContent);
}
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function onClickItem(e) {
  modalM.classList.toggle('is-hidden');
  document.body.classList.add('modal-open');
  const itemId = Number(e.currentTarget.id);
  arrWatchedMovies = load(LOCAL_KEY_WATCHED);
  arrQueueMovies = load(LOCAL_KEY_QUEUE);
  // console.log(itemId);
  const parsedDataSearch = JSON.parse(localStorage.getItem('search-storage'));
  const resultsSearch = parsedDataSearch.results;
  // const cardSearch = resultsSearch.find(object => {
  //   if (object.id === itemId) {
  //     return object;
  //   }
  // });
  const saveDataAll = arrWatchedMovies.concat(arrQueueMovies).concat(resultsSearch)
  const cardSearchOnLibrary = saveDataAll.find(object => {
    if (object.id === itemId) {
      return object;
    }
  });
  // console.log(cardSearch);
  renderCardOfMovie(cardSearchOnLibrary);


  refs.backdrop.classList.remove('is-hidden');
  refs.closeBtn.addEventListener('click', onCloseModal);
  refs.backdrop.addEventListener('click', onCloseModal);
  window.addEventListener('keydown', onCloseModayByEsc);
  refs.addWatchedBtn.addEventListener('click', onClickWatched);
  refs.addQueueBtn.addEventListener('click', onClickQueue);

  const isFilmInWatched = arrWatchedMovies.some(film => film.id === itemId);

  if (isFilmInWatched) {
    refs.addWatchedBtn.textContent = 'remove from watched';
    refs.addWatchedBtn.classList.add('active-watched');
  } else {
    refs.addWatchedBtn.textContent = 'add to watched';
    refs.addWatchedBtn.classList.remove('active-watched');
  }

  const isFilmInQueue = arrQueueMovies.some(film => film.id === itemId);
  if (isFilmInQueue) {
    refs.addQueueBtn.textContent = 'remove from queue';
    refs.addQueueBtn.classList.add('active-queue');
  } else {
    refs.addQueueBtn.textContent = 'add to queue';
    refs.addQueueBtn.classList.remove('active-queue');
  }

  // document.body.style.overflowY = 'scroll';
  // refs.body.classList.add('body-lock');

  // ************* show trailer on YouTube**start*****
  const trailerButton = document.querySelector('.js-open-trailer');
  trailerButton.addEventListener(`click`, onClickTrailer);
  async function onClickTrailer(e) {
    try {
      const data = await fetchTrailer(itemId);
      // console.log(data.results.length);
      if (data.results.length > 0) {
        window.open(
          `https://www.youtube.com/watch?v=${data.results[0].key}`,
          '_blank'
        );
      } else {
        function invalidSearchTrailer() {
          const modalMovie = document.querySelector('.modal-movie');
          modalMovie.insertAdjacentHTML(
            'afterbegin',
            '<p class="trailer-search form__uncorrect-search is-hidden"></p>'
          );
          const notification = document.querySelector(
            '.form__uncorrect-search'
          );
          notification.textContent =
            'Sorry, but there is no trailer for this movie';
          setTimeout(() => {
            notification.classList.toggle('is-hidden');
          }, 1000);
          const removeNotification = setTimeout(() => {
            modalMovie.firstElementChild.remove();
          }, 2000);
        }
        invalidSearchTrailer();
      }
    } catch (error) {
      error.message;
    }
  }
  // ************* show trailer on YouTube**END*****
}

function onCloseModal(e) {
  document.body.classList.remove('modal-open');

  if (
    e.target.classList.value === 'btn-modal-close' ||
    e.target === e.currentTarget
  ) {
    refs.backdrop.classList.add('is-hidden');
    document.body.style.overflow = '';
    refs.closeBtn.removeEventListener('click', onCloseModal);
    refs.backdrop.removeEventListener('click', onCloseModal);
    refs.addWatchedBtn.removeEventListener('click', onClickWatched);
    refs.addQueueBtn.removeEventListener('click', onClickQueue);
    window.removeEventListener('keydown', onCloseModayByEsc);

    refs.modalMovie.innerHTML = '';
    refs.modalText.innerHTML = '';
  }
}

function onCloseModayByEsc(e) {
  document.body.classList.remove('modal-open');

  // console.log(e.code);
  if (e.code === 'Escape') {
    refs.backdrop.classList.add('is-hidden');
    document.body.style.overflow = '';
    refs.closeBtn.removeEventListener('click', onCloseModal);
    refs.backdrop.removeEventListener('click', onCloseModal);
    window.removeEventListener('keydown', onCloseModayByEsc);
    refs.addWatchedBtn.removeEventListener('click', onClickWatched);
    refs.addQueueBtn.removeEventListener('click', onClickQueue);

    refs.modalMovie.innerHTML = '';
    refs.modalText.innerHTML = '';
  }
}

function onClickWatched(e) {
  const removeBtn = document.querySelector('.active-watched');
  e.target.classList.toggle('active-watched');
  const currentMoviesId = Number(refs.modal.dataset.id);

  const parsedDataSearch = JSON.parse(localStorage.getItem('search-storage'));
  const resultsSearch = parsedDataSearch.results;
  arrWatchedMovies = load(LOCAL_KEY_WATCHED);

  if (removeBtn) {
    const newMoviesArr = arrWatchedMovies.filter(
      film => film.id != currentMoviesId
    );
    save(LOCAL_KEY_WATCHED, newMoviesArr);
    e.target.textContent = 'add to watched';
  }
  if (!removeBtn) {
    resultsSearch.find(object => {
      if (object.id === currentMoviesId) {
        arrWatchedMovies.push(object);
        // console.log(arrWatchedMovies);
        save(LOCAL_KEY_WATCHED, arrWatchedMovies);
        // console.log(object);
      }
    });
    e.target.textContent = 'remove from watched';
  }
}

function onClickQueue(e) {
  const removeBtn = document.querySelector('.active-queue');
  e.target.classList.toggle('active-queue');

  const currentMoviesId = Number(refs.modal.dataset.id);

  const parsedDataSearch = JSON.parse(localStorage.getItem('search-storage'));
  const resultsSearch = parsedDataSearch.results;
  arrQueueMovies = load(LOCAL_KEY_QUEUE);

  if (removeBtn) {
    const newMoviesArr = arrQueueMovies.filter(
      film => film.id != currentMoviesId
    );
    save(LOCAL_KEY_QUEUE, newMoviesArr);
    e.target.textContent = 'add to queue';
  }
  if (!removeBtn) {
    resultsSearch.find(object => {
      if (object.id === currentMoviesId) {
        arrQueueMovies.push(object);
        // console.log(arrQueueMovies);
        save(LOCAL_KEY_QUEUE, arrQueueMovies);
        // console.log(object);
      }
    });
    e.target.textContent = 'remove from queue';
  }
}

function waitingLi() {
  setTimeout(() => {
    refs.cardsList.childNodes.forEach(card => {
      card.addEventListener('click', onClickItem);
    });
  }, 200);
}

export { arrWatchedMovies, arrQueueMovies, waitingLi };

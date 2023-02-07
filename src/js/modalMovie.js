import photo from '../images/header/photo.jpg';
import { refs } from '../js/refs';
import { load, save } from './localStorage';
import { fetchTrailer } from './fetchAPI';
import { onClickTrailer } from './trailer';
import { invalidSearchTrailer } from './trailer';

// const refs = {
//   cardsList: document.querySelector('.cards__list'),
//   backdrop: document.querySelector('.backdrop'),
//   closeBtn: document.querySelector('.btn-modal-close'),
//   modal: document.querySelector('.modal'),
//   wrapperForBtns: document.querySelector('.modal-movie-btn'),
//   watchedBtn: document.querySelector('.btn-modal__watched'),
//   queueBtn: document.querySelector('.btn-modal__queue'),
// };

refs.cardsList.addEventListener('click', onClickItem);
refs.watchedBtn.addEventListener('click', onClickWatched);

console.log(refs.modalContent);

// console.log(refs.wrapperForBtns);

let arrWatchedMovies = [];

const LOCAL_KEY = 'watched-movies';

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

  const markup = `
    <div class='modal-movie'>
    <img
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
        <button type="button" class="btn__open-trailer js-open-trailer"></button>
    </div>
    <div class='modal__content'>
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
          </div>
    
    </div>
        `;
  refs.watchedBtn.addEventListener('click', onClickWatched);
  refs.modal.setAttribute('data-id', id);
  refs.modal.insertAdjacentHTML('afterbegin', markup);
}

function onClickItem(e) {
  // console.log(e.target);
  // console.log(e.currentTarget.children);
  // const childrenOfUl = e.currentTarget.childNodes;
  // console.log(childrenOfUl);
  // childrenOfUl.forEach(child => console.log(child.id));

  if (e.target.parentNode.nodeName != 'LI') {
    console.log('not li');
    return;
  }

  const itemId = Number(e.target.parentNode.id);

  const parsedDataSearch = JSON.parse(localStorage.getItem('search-storage'));

  const resultsSearch = parsedDataSearch.results;
  // console.log(resultsSearch);

  const cardSearch = resultsSearch.find(object => {
    // console.log(object);

    if (object.id === itemId) {
      // arrWatchedMovies.push(object);
      // console.log(arrWatchedMovies);
      // localStorage.setItem('watched-movies', JSON.stringify(arrWatchedMovies));
      // console.log(object);
      return object;
    }
  });

  renderCardOfMovie(cardSearch);

  refs.backdrop.classList.remove('is-hidden');
  refs.closeBtn.addEventListener('click', onCloseModal);
  refs.backdrop.addEventListener('click', onCloseModal);
  window.addEventListener('keydown', onCloseModayByEsc);
  console.log(refs.watchedBtn);
  refs.watchedBtn.addEventListener('click', onClickWatched);

  document.body.style.overflow = 'hidden';

  // ************* show trailer on YouTube**start*****
  const trailerButton = document.querySelector('.js-open-trailer');
  trailerButton.addEventListener(`click`, onClickTrailer);
  async function onClickTrailer(e) {
    try {
      const data = await fetchTrailer(itemId);
      console.log(data.results.length);
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
  if (
    e.target.classList.value === 'btn-modal-close' ||
    e.target === e.currentTarget
  ) {
    refs.backdrop.classList.add('is-hidden');
    document.body.style.overflow = '';
    // refs.closeBtn.removeEventListener('click', onCloseModal);
    // refs.backdrop.removeEventListener('click', onCloseModal);
    window.removeEventListener('keydown', onCloseModayByEsc);

    // const markup = `<button class="btn-modal-close" type="button">
    // </button><div class="modal-movie-btn">
    //   <button type="button" class="btn-modal btn-modal__watched">
    //     add to Watched
    //   </button>
    //   <button type="button" class="btn-modal btn-modal__queue">
    //     add to queue
    //   </button>
    // </div>`;

    // refs.modal.innerHTML = markup;
    // refs.modal.innerHTML = '';
  }
}

function onCloseModayByEsc(e) {
  console.log(e.code);
  if (e.code === 'Escape') {
    refs.backdrop.classList.add('is-hidden');
    document.body.style.overflow = '';
    // refs.closeBtn.removeEventListener('click', onCloseModal);
    // refs.backdrop.removeEventListener('click', onCloseModal);
    window.removeEventListener('keydown', onCloseModayByEsc);

    // const markup = `<button class="btn-modal-close" type="button">
    //   <svg class="btn-modal__icon">
    //     <use href="./images/icons.svg#icon-close"></use>
    //   </svg>
    // </button>
    // <div class="modal-movie-btn">
    //   <button type="button" class="btn-modal btn-modal__watched">
    //     add to Watched
    //   </button>
    //   <button type="button" class="btn-modal btn-modal__queue">
    //     add to queue
    //   </button>`;

    // refs.modal.innerHTML = '';
    // refs.modal.innerHTML = '';
    // refs.modalContentinnerHTML = '';
  }
}

function onClickWatched() {
  // const watchedMoviesId = Number(e.target.parentNode.dataset.id);
  const watchedMoviesId = Number(refs.modal.dataset.id);

  const parsedDataSearch = JSON.parse(localStorage.getItem('search-storage'));
  const resultsSearch = parsedDataSearch.results;

  resultsSearch.find(object => {
    if (object.id === watchedMoviesId) {
      arrWatchedMovies = load(LOCAL_KEY);
      arrWatchedMovies.push(object);
      // console.log(load(LOCAL_KEY, arrWatchedMovies));

      console.log(arrWatchedMovies);

      save(LOCAL_KEY, arrWatchedMovies);
      console.log(object);
    }
  });
}

export { arrWatchedMovies };

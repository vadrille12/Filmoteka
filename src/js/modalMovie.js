import photo from '../images/header/photo.jpg';

const refs = {
  cardsList: document.querySelector('.cards__list'),
  backdrop: document.querySelector('.backdrop'),
  closeBtn: document.querySelector('.btn-modal-close'),
  modal: document.querySelector('.modal'),
  watchedBtn: document.querySelector('.btn-modal__watched'),
  queueBtn: document.querySelector('.btn-modal__queue'),
};

refs.cardsList.addEventListener('click', onClickItem);
// refs.watchedBtn.addEventListener('click', onClickWatched);

arrWatchedMovies = [];

function renderCardOfMovie({
  title,
  vote_average,
  vote_count,
  popularity,
  poster_path,
  original_title,
  genre_ids,
  overview,
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
          <div class="modal-movie-btn">
        <button class="btn-modal btn-modal__watched">add to Watched</button>
        <button class="btn-modal btn-modal__queue">add to queue</button>
</div>
          
    </div>
        `;

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

  itemId = Number(e.target.parentNode.id);

  const parsedDataSearch = JSON.parse(localStorage.getItem('search-storage'));

  const resultsSearch = parsedDataSearch.results;
  // console.log(resultsSearch);

  const cardSearch = resultsSearch.find(object => {
    // console.log(object);

    if (object.id === itemId) {
      arrWatchedMovies.push(object);
      // console.log(arrWatchedMovies);
      localStorage.setItem('watched-movies', JSON.stringify(arrWatchedMovies));

      // console.log(object);
      return object;
    }
  });

  renderCardOfMovie(cardSearch);

  refs.backdrop.classList.remove('is-hidden');
  refs.closeBtn.addEventListener('click', onCloseModal);
  refs.backdrop.addEventListener('click', onCloseModal);
  window.addEventListener('keydown', onCloseModayByEsc);
  document.body.style.overflow = 'hidden';
}

function onCloseModal(e) {
  if (
    e.target.classList.value === 'btn-modal-close' ||
    e.target === e.currentTarget
  ) {
    refs.backdrop.classList.add('is-hidden');
    document.body.style.overflow = '';
    refs.closeBtn.removeEventListener('click', onCloseModal);
    refs.backdrop.removeEventListener('click', onCloseModal);
    window.removeEventListener('keydown', onCloseModayByEsc);
    refs.modal.innerHTML =
      '<button type="button" class="btn-modal-close">Close</button>';
  }
}

// `<button type="button" class="btn-modal-close">Close</button><div class="modal-movie-btn">
//         <button class="btn-modal btn-modal__watched">add to Watched</button>
//         <button class="btn-modal btn-modal__queue">add to queue</button>
// </div>`

function onCloseModayByEsc(e) {
  console.log(e.code);
  if (e.code === 'Escape') {
    refs.backdrop.classList.add('is-hidden');
    document.body.style.overflow = '';
    refs.closeBtn.removeEventListener('click', onCloseModal);
    refs.backdrop.removeEventListener('click', onCloseModal);
    window.removeEventListener('keydown', onCloseModayByEsc);
    refs.modal.innerHTML =
      '<button type="button" class="btn-modal-close">Close</button>';
  }
}

// function onClickWatched(e) {
//   console.log(e.currentTarget);
//   const parsedDataSearch = JSON.parse(localStorage.getItem('search-storage'));
//   const resultsSearch = parsedDataSearch.results;
//   console.log(resultsSearch);
//   resultsSearch.find(object => console.log(object.id));
// }

// some changes

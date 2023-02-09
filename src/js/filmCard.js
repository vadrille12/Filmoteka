import { fetchTrendingMovies } from './fetchAPI';
import { refs } from './refs';
import { makeTuiPagination } from './pagination';
import photo from '../images/header/photo.jpg';
import { save } from './localStorage';
import scrollToTop from './scrollToTop';
import { waitingLi } from './modalMovie';

const moviesGallery = document.querySelector('.cards__list');

let page = 1;

export async function showTrendingMovies(page = 1) {
  try {
    const data = await fetchTrendingMovies(page);
    // console.log(data);
    renderTrendingMovies(data.results);
    save('search-storage', data);

    makeTuiPagination(data.total_results, data.total_pages).on(
      'afterMove',
      ({ page }) => {
        fetchTrendingMovies(page).then(data => {
          renderTrendingMovies(data.results);
          save('search-storage', data);
          scrollToTop();
        });
      }
    );
  } catch (err) {
    console.error(err.message);
  }
}

showTrendingMovies().then(console.log);

function getGenres(genresArr) {
  return genresArr.map(genre => localStorage.getItem(genre)).join(', ');
}

export function renderTrendingMovies(data) {
  const urlImage = 'https://image.tmdb.org/t/p/w500/';
  let genresName = '';
  let releaseYear = '';
  waitingLi();
  const cardMarkup = data
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

  refs.moviesGallery.innerHTML = cardMarkup;
}

import { fetchTrendingMovies } from './fetchAPI';
import { refs } from './refs';
import { makeTuiPagination } from './pagination';

const moviesGallery = document.querySelector('.cards__list');

let page = 1;

export async function showTrendingMovies(page = 1) {
  try {
    const data = await fetchTrendingMovies(page);
    // console.log(data);
    renderTrendingMovies(data.results);

    makeTuiPagination(data.total_results, data.total_pages).on(
      'afterMove',
      ({ page }) => {
        fetchTrendingMovies(page).then(data => {
          renderTrendingMovies(data.results);
        });
      }
    );
  } catch (err) {
    console.error(err.message);
  }
}

showTrendingMovies().then(console.log);

export function renderTrendingMovies(data) {
  const urlImage = 'https://image.tmdb.org/t/p/w500/';

  const cardMarkup = data
    .map(
      ({
        poster_path,
        title,
        genre_ids: genres,
        release_date = '',
        vote_average = '',
      }) => {
        let genresName = genres
          .map(genre => localStorage.getItem(genre))
          .join(', ');

        if (genres.length > 2) {
          genresName =
            genres
              .map(genre => localStorage.getItem(genre))
              .slice(0, 2)
              .join(', ') + ', Other';
        }
        return `<li class="movie__card">
        <img
          src="${urlImage}${poster_path}"
          class="movie__cover"
        />
        <div class="movie__info">
        <h2 class="movie__title">${title}</h2>
        <div class="movie__item">
          <h3 class="movie__category">${genresName}</h3>
          <h3 class="movie__year">${release_date.slice(0, 4)}</h3>
          <div class="movie__average">${vote_average.toFixed(1)}</div>
        </div>
      </div>
      </li>
      `;
      }
    )
    .join('');

  refs.moviesGallery.innerHTML = cardMarkup;
}

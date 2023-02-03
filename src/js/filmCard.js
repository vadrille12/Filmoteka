import { getTrendingMovies } from './fetchAPI';
import { getGenres } from './fetchGenres';

const moviesEl = document.querySelector('.cards__list');
const form = document.querySelector('.header-form');

let page = 1;

export async function showTrendingMovies(page = 1) {
  try {
    const data = await getTrendingMovies(page);
    console.log(data);
    renderTrendingMovies(data.results);
  } catch (err) {
    console.error(err.message);
  }
}


showTrendingMovies().then(console.log);

function renderTrendingMovies(data) {
  // console.log(data);
  const urlImage = 'https://image.tmdb.org/t/p/w500/';

  const cardMarkup = data
    .map(
      ({
        poster_path,
        title,
        genre_ids: genres,
        release_date,
        vote_average,
      }) => {
        const genresName = genres
          .map(genre => localStorage.getItem(genre))
          .join(', ');

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
          <div class="movie__average">${Math.ceil(vote_average)}</div>

        </div>
      </div>
      </li>
      `;

      }
    )
    .join('');

  moviesEl.innerHTML = cardMarkup;

}

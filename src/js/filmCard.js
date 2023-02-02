import { getTrendingMovies } from './fetchAPI';

const moviesEl = document.querySelector('.cards__list');
console.log(moviesEl);

function showTrendingMovies(results) {
  const cardMarkup = results
    .map(
      ({ poster_path, title, genres, release_date, vote_average }) =>
        `<li class="movie__card">
      <img
        src="${poster_path}"
        class="movie__cover"
      />
    </li>
    <div class="movie__info">
      <h2 class="movie__title">${title}</h2>
      <div class="movie__item">
        <h3 class="movie__category">${genres.name}</h3>
        <h3 class="movie__year">${release_date}</h3>
        <div class="movie__average">${vote_average}</div> 
      </div>
    </div>`
    )
    .join('');

  moviesEl.insertAdjacentHTML('beforeend', cardMarkup);
}
showTrendingMovies();

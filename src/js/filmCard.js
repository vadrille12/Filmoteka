import { getTrendingMovies } from './fetchAPI';
import  onFormSubmit  from './filmSearch';

const moviesEl = document.querySelector('.cards__list');
const form = document.querySelector('.header-form');
// console.log(moviesEl);

// form.addEventListener('submit', onSubmit);

let page = 1;
let arr = getTrendingMovies().then(respData => respData.results);
// console.log(arr);

async function onFormSubmit() {
  try {
    const data = await getTrendingMovies();
    showTrendingMovies(data.results);
  } catch (err) {
    console.error(err.message);
  }
}

export function showTrendingMovies(arr) {
  try {
    const cardMarkup = arr
      .map(({ poster_path, title, release_date, vote_average }) => {
        // const genreNames = genres.map(g => g.name).join(', ');
        return `<li class="movie__card">
        <img
          src="${poster_path}"
          class="movie__cover"
        />
        <div class="movie__info">
        <h2 class="movie__title">${title}</h2>
        <div class="movie__item">
          <h3 class="movie__category"></h3>
          <h3 class="movie__year">${release_date}</h3>
          <div class="movie__average">${vote_average}</div>
        </div>
      </div>
      </li>
      `;
      })
      .join('');
      console.log(cardMarkup)
    moviesEl.innerHTML = cardMarkup;
  } catch (err) {
    console.error(err.message);
  }
}

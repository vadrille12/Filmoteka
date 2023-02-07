import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { refs } from './refs';

//const paginationEl = document.getElementById('tui-pagination-container');

export function makeTuiPagination(totalItems, totalPages) {
  const visiblePages = totalPages < 5 ? totalPages : 5;
  const options = {
    totalItems,
    itemsPerPage: 20,
    visiblePages,
    centerAlign: true,
  };

  const pagination = new Pagination(refs.paginationEl, options);

  if (visiblePages <= 1) {
    refs.paginationEl.style.display = 'none';
  } else {
    refs.paginationEl.style.display = 'block';
  }

  return pagination;
}

// My test functions//
// const list = document.querySelector('.list');
// const form = document.querySelector('.header-form');

// const API_KEY = '8b20680c766bc5c37143e5d6b7aa7894';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const TREND_URL = `${BASE_URL}/trending/movie/week`;
// const SEARCH_URL = `${BASE_URL}/search/movie`;

// async function fetchMovies(page = 1) {
//   const response = await fetch(`${TREND_URL}?api_key=${API_KEY}&page=${page}`);
//   const data = await response.json();
//   return data;
// }

// async function fetchMoviesByKeyword(page = 1, query) {
//   const response = await fetch(
//     `${SEARCH_URL}?api_key=${API_KEY}&page=${page}&query=${query}`
//   );
//   const data = await response.json();
//   return data;
// }

// fetchMovies().then(data => {
//   renderMovies(data.results);
//   makeTuiPagination(data.total_results, data.total_pages).on(
//     'afterMove',
//     ({ page }) => {
//       console.log(page);
//       fetchMovies(page).then(data => {
//         console.log(data);
//         renderMovies(data.results);
//       });
//     }
//   );
// });

// function renderMovies(data) {
//   const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

//   const markup = data
//     .map(
//       ({ poster_path, title }) => `
//    <li class="list__item">
//       <img class="list__img" src="${IMG_URL}${poster_path}" width="240" height="200" alt="">
//       <p>${title}</p>
//    </li>
//   `
//     )
//     .join('');

//   list.innerHTML = markup;
// }

// form.addEventListener('submit', onFormSubmit);

// async function onFormSubmit(e) {
//   e.preventDefault();
//   let page = 1;
//   const query = e.target.elements.searchQuery.value;
//   console.log(query);
//   const data = await fetchMoviesByKeyword(page, query);
//   console.log(data);
//   renderMovies(data.results);

//   makeTuiPagination(data.total_results, data.total_pages).on(
//     'afterMove',
//     ({ page }) => {
//       console.log(page);
//       fetchMoviesByKeyword(page, query).then(data => {
//         console.log(data);
//         renderMovies(data.results);
//       });
//     }
//   );
// }

import { API_KEY, BASE_URL, TREND_URL, SEARCH_URL } from './api-vars.js';
import { showTrendingMovies } from './filmCard';
import { renderTrendingMovies } from './filmCard';
import { makeTuiPagination } from './pagination.js';
import { refs } from './refs';
import { load, save, remove } from './localStorage';
//import {fetchTrendingMovies} from './fetchAPI'

const logo = document.querySelector(".header-logo__link");
logo.addEventListener("click", onClickLogo);

refs.form.addEventListener('submit', onFormSubmit);
let page = 1;
let query = '';

export default async function fetchMovie(query, page) {
  try {
    const response = await fetch(
      `${SEARCH_URL}?api_key=${API_KEY}&page=${page}&include_adult=false&query=${query}`
    );
    const data = await response.json();
    save('search-storage', data);
    return data;
  } catch (error) {
    console.error();
  }
}

async function onFormSubmit(event) {
  event.preventDefault();
  page = 1;
  refs.moviesGallery.innerHTML = '';
  query = event.currentTarget.elements.searchQuery.value.trim();
  console.log(query);
  refs.paginationEl.style.display = 'none';

  if (query === '') {
    invalidSearch('Search for movies is empty! Enter movie name, please', 2000);
    refs.paginationEl.style.display = 'none';
    onErrorContainerSearch();
    return;
  }
  await fetchMovie(query, page)
    .then(data => {
      console.log(data);
      const totalRes = data.total_results;
      console.log(totalRes);
      if (!totalRes) {
        invalidSearch(
          'Search result not successful. Enter the correct movie name and try again',
          2000
          );
        onErrorContainerSearch();
        refs.paginationEl.style.display = 'none';
        
      }

      if (totalRes >= 20) {
        renderTrendingMovies(data.results);
        page += 1;
        makeTuiPagination(totalRes, data.total_pages).on(
          'afterMove',
          ({ page }) => {
            fetchMovie(query, page).then(data => {
              renderTrendingMovies(data.results);
            });
          }
        );
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      refs.form.reset();
    });
}

export function onErrorContainerSearch() {
  const section = document.querySelector('.cards__container');
  // section.style.heigth = '100vh';
  section.insertAdjacentHTML(
    'beforeend',
    '<img src="http://marathaudyojak.com/assets/web/images/no-results-found.png" width=1000/>'
  );
  setTimeout(() => {
    section.lastElementChild.remove();
  }, 1000);
}

export function invalidSearch(message, showTime) {
  refs.form.insertAdjacentHTML(
    'beforeend',
    '<p class="form__uncorrect-search is-hidden"></p>'
  );
  const notification = document.querySelector('.form__uncorrect-search');
  notification.textContent = `${message}`;
  setTimeout(() => {
    notification.classList.toggle('is-hidden');
  }, showTime);
  setTimeout(() => {
    showTrendingMovies(page);
  }, 2000);

  const removeNotification = setTimeout(() => {
    refs.form.lastElementChild.remove();
  }, 2000);
}

function onClickLogo(){
  page = 1;
  showTrendingMovies(page);
}

///****************************************** */
//***ORIGINAL */
// async function onFormSubmit(event) {
//     try {
//         event.preventDefault();
//         page = 1;
//         query = event.currentTarget.elements.searchQuery.value.trim();
//         //console.log(query)
//         if (!query) {
//             moviesGallery.innerHTML = "";
//             return
//         }

//     const data = await fetchMovie(query, page);
//     console.log(data);
//         renderTrendingMovies(data.results);
//         if (data.total_results === 0) {
//         //console.log(data.total_results)
//             invalidSearch();
//             showTrendingMovies();
//            return;
//         }
//     } catch(error) {
//         console.error()
// }
// }

// const invalidSearch = function () {
//   const notification = `<p class="uncorrect-search">
//     Search result was NOT successful. Enter the correct movie name and try again!
//   </p>;`;
//  refs.form.insertAdjacentHTML('beforeend', notification);
//   const removeNotification = setTimeout(() => {
//     refs.form.lastElementChild.remove();
//     //console.log(refs.form.lastElementChild)
//   }, 2000);
//   removeNotification();
// };

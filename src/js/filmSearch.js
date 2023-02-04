import { API_KEY, BASE_URL, TREND_URL, SEARCH_URL } from './api-vars.js';
import {showTrendingMovies} from './filmCard'
import { renderTrendingMovies } from './filmCard';
import { makeTuiPagination } from './pagination.js';
import { refs } from './refs';
import { load, save, remove } from './localStorage';
//import {fetchTrendingMovies} from './fetchAPI'


export default async function fetchMovie(query, page) {
  try {
    const response = await fetch(
      `${SEARCH_URL}?api_key=${API_KEY}&page=${page}&include_adult=false&query=${query}`
    );
    const data = await response.json();
    save('search-storage', data)  
    return data;
  } catch (error) {
    console.error();
  }
}

refs.form.addEventListener('submit', onFormSubmit);
let page = 1;
let query = '';

async function onFormSubmit(event) {
  try {
    event.preventDefault();
    page = 1;
      const query = event.currentTarget.elements.searchQuery.value.trim();
    // console.log(query);
    if (query === '') {
      invalidSearch(
        'Search for movies is empty! Enter movie name, please',
        2000
      );
    }
    const data = await fetchMovie(query, page);
    //console.log(data);
    renderTrendingMovies(data.results);
    
    if (data.total_results === 0) {
      invalidSearch(
        'Search result not successful. Enter the correct movie name and try again',
        2000
        );
    showTrendingMovies()
        return
    } 
        
    makeTuiPagination(data.total_results, data.total_pages).on(
      'afterMove',
      ({ page }) => {
        fetchMovie(query, page).then(data => {
          renderTrendingMovies(data.results);
        });
      }
    );
  } catch (error) {
    console.error();
    refs.form.reset();
  }
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

  const removeNotification = setTimeout(() => {
    refs.form.lastElementChild.remove();
  }, 5000);
  removeNotification();

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

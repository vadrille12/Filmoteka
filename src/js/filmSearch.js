
import { API_KEY, BASE_URL, TREND_URL, SEARCH_URL } from './api-vars.js';
//import { showTrendingMovies } from './fetchAPI'
import { renderTrendingMovies } from './filmCard'
import { refs } from './refs';

export default async function fetchMovie(query, page) {
    try {
        const response = await fetch(`${SEARCH_URL}?api_key=${API_KEY}&page=${page}&include_adult=false&query=${query}`);
        const data = await response.json();
        return data
        //console.log(data);
    }catch(error) {
        console.error(); 
    }
}

// const formFilm = document.querySelector('.header-form');
// const moviesGallery = document.querySelector(".cards__list");

refs.form.addEventListener('submit', onFormSubmit);
let page = 1;
let query = '';

async function onFormSubmit(event) {
    try {
        event.preventDefault();
        page = 1;
        query = event.currentTarget.elements.searchQuery.value.trim();
        console.log(query)
        if (!query) {
            moviesGallery.innerHTML = "";
            return
        }
        
    const data = await fetchMovie(query, page);
    console.log(data);
    renderTrendingMovies(data.results);
    } catch (error) {
      console.error()
}
} 
// event.target(reset);

// const invalidSearch = function () {
//   const notification = `<p class="uncorrect-search">
//     Search result was NOT successful. Enter the correct movie name and try again!
//   </p>;`;
//  formFilm.insertAdjacentHTML('beforeend', notification);
//   const removeNotification = debounce(() => {
//     formFilm.lastElementChild.remove();
//   }, 2000);
//   removeNotification();
// };
//    renderTrendingMovies(data);
    //     if (query.results.total_results === 0) {
    //     invalidSearch();
    //     return;
    //     }




//  

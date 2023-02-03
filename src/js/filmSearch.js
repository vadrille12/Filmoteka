
import { API_KEY, BASE_URL, TREND_URL, SEARCH_URL } from './api-vars.js';
import { getTrendingMovies } from './fetchAPI'
import {showTrendingMovies } from './filmCard'


export default async function getMovie(query, page) {
    try {
        const response = await fetch(`${SEARCH_URL}?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`);
        if (!response.ok) {
        throw new Error(response.statusText)
        }
        const data = await response.json();
        console.log(data);
    }catch(error) {
        console.error(); 
    }
}


const formFilm = document.querySelector('.header-form');
const input = document.querySelector('.header-form__input')
const moviesGallery = document.querySelector(".cards__list");

formFilm.addEventListener('submit', onFormSubmit);
let page = 1;
let query = '';



export default  async function onFormSubmit(event) {
    try {
        event.preventDefault();
        page = 1;
        query = event.currentTarget.searchQuery.value.trim();
       
        if (!query) {
            moviesGallery.innerHTML = "";
            return
        }
    
       showTrendingMovies(arr);
        if (query.results.total_results === 0) {
        invalidSearch();
        return;
        }
    } catch (error) {
      console.error()
}
} 
// event.target(reset);

const invalidSearch = function () {
  const notification = `<p class="uncorrect-search">
    Search result was NOT successful. Enter the correct movie name and try again!
  </p>;`;
 formFilm.insertAdjacentHTML('beforeend', notification);
  const removeNotification = debounce(() => {
    formFilm.lastElementChild.remove();
  }, 2000);
  removeNotification();
};





//  

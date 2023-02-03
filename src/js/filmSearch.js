
import { API_KEY, BASE_URL, TREND_URL, SEARCH_URL } from './api-vars.js';
import { showTrendingMovies } from './filmCard'
import { renderTrendingMovies } from './filmCard'
import { refs } from './refs';

export default async function fetchMovie(query, page) {
    try {
        const response = await fetch(`${SEARCH_URL}?api_key=${API_KEY}&page=${page}&include_adult=false&query=${query}`);
        const data = await response.json();
        return data
    }catch(error) {
        console.error(); 
    }
}

refs.form.addEventListener('submit', onFormSubmit);
let page = 1;
let query = '';
//const input = document.querySelector('header-form__input');

async function onFormSubmit(event) {
    try {
        event.preventDefault();
        page = 1;
        query = event.currentTarget.elements.searchQuery.value.trim();
        //console.log(query)
        if (!query) {
            moviesGallery.innerHTML = "";
            return
        }
        
    const data = await fetchMovie(query, page);
    console.log(data);
        renderTrendingMovies(data.results);
        if (data.total_results === 0) {
        //console.log(data.total_results)
            invalidSearch();
            showTrendingMovies();
           return;
        } 
    
    } catch(error) {
        console.error()
        
}
} 

const invalidSearch = function () {
  const notification = `<p class="uncorrect-search">
    Search result was NOT successful. Enter the correct movie name and try again!
  </p>;`;
 refs.form.insertAdjacentHTML('beforeend', notification);
  const removeNotification = setTimeout(() => {
    refs.form.lastElementChild.remove();
    //console.log(refs.form.lastElementChild)
  }, 2000);
  removeNotification();
};




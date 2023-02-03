
import { API_KEY, BASE_URL, TREND_URL, SEARCH_URL } from './api-vars.js';
//import { getTrendingMovies } from './fetchAPI'
import {showTrendingMovies } from './filmCard'

    const options = {
        method: "GET",
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        } 
}
export default async function getMovie() {
    try {
        const response = await fetch(`${SEARCH_URL}?api_key=${API_KEY}`, options);
        if (!response.ok) {
        throw new Error(response.statusText)
        }
        const data = await response.json();
        console.log(data);
    }catch(error) {
        console.error(); 
    }
}
getMovie()


//const form = document.querySelector('.header-form');
const input = document.querySelector('.header-form__input');
const buttonFilmSearch = document.querySelector('.header-form__button');
const moviesGallery = document.querySelector(".cards__list")


// formFilm.addEventListener('submit', onFormSubmit);

// async function onFormSubmit(event) {
//     try {
//         event.preventDefault();
//         page = 1
//         searchQuery = event.currentTarget.elements.searchQuery.value.trim();
//         event.target(reset);
//         const dataFilm = await getMovie();
//         showTrendingMovies(dataFilm.results);
//     } catch (err) {
//         console.error(err.message)
//     }
    
//}


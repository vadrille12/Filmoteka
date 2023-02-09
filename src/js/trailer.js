import {
  API_KEY,
  BASE_URL,
  TREND_URL,
  SEARCH_URL,
  TRAILER_URL,
} from './api-vars.js';

import { refs } from './refs';
import { fetchTrailer } from './fetchAPI.js';

export async function onClickTrailer(e) {
  try {
    const data = await fetchTrailer(itemId);
    // console.log(data.results.length);
    if (data.results.length > 0) {
      window.open(
        `https://www.youtube.com/watch?v=${data.results[0].key}`,
        '_blank'
      );
    } else {
      function invalidSearchTrailer() {
        const modalMovie = document.querySelector('.modal-movie');
        //console.log(modalMovie);
        modalMovie.insertAdjacentHTML(
          'afterbegin',
          '<p class="trailer-search form__uncorrect-search is-hidden"></p>'
        );
        const notification = document.querySelector('.form__uncorrect-search');
        notification.textContent =
          'Sorry, but there is no trailer for this movie';
        setTimeout(() => {
          notification.classList.toggle('is-hidden');
        }, 1000);
        const removeNotification = setTimeout(() => {
          modalMovie.firstElementChild.remove();
        }, 2000);
      }
      invalidSearchTrailer();
    }
  } catch (error) {
    error.message;
  }
}

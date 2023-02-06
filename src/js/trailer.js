import {
  API_KEY,
  BASE_URL,
  TREND_URL,
  SEARCH_URL,
  TRAILER_URL,
} from './api-vars.js';

import { refs } from './refs';
import { fetchTrailer } from './fetchAPI.js';

export async function getTrailer(id) {
  try {
    const data = await fetchTrailer(id);
    // console.log(data);
    // console.log(data.results.length);
    if (data.results.length > 0) {
      window.open(
        `https://www.youtube.com/watch?v=${data.results[0].key}`,
        '_blank'
      );
    } else {
      console.log('Sorry, but there is no trailer for this movie');
    }
  } catch (err) {
    console.error(err.message);
  }
}
// getTrailer(4564);

import { API_KEY, BASE_URL, TREND_URL, TRAILER_URL } from './/api-vars.js';
import { save } from './localStorage';

export async function fetchTrendingMovies(page = 1) {
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },

      //   results,
    };
    const resp = await fetch(
      `${TREND_URL}?api_key=${API_KEY}&page=${page}`,
      options
    );
    const respData = await resp.json();
    save('trending-movies', respData);
    // console.log(respData);
    return respData;
  } catch (error) {
    console.error(error.message);
  }
}

//===============FETCH TRAILER
export async function fetchTrailer(filmId) {
  try {
    const response = await fetch(
      `${TRAILER_URL}/${filmId}/videos?api_key=${API_KEY}&language=en-US`
    );
    const respTrailer = await response.json();

    return respTrailer;
  } catch (error) {
    console.log(error.message);
  }
}

import { API_KEY, BASE_URL, TREND_URL } from './/api-vars.js';
import showTrendingMovies from './/filmCard';
export async function getTrendingMovies() {
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      //   page,
      //   results,
    };
    const resp = await fetch(`${TREND_URL}?api_key=${API_KEY}`, options);
    const respData = await resp.json();
    // console.log(respData);
    return respData;
  } catch (error) {
    console.error(error.message);
  }
}

(async function () {
  const data = await getTrendingMovies();
  //   console.log(data);
})();

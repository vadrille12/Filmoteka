import { API_KEY, BASE_URL, TREND_URL } from './/api-vars.js';

//const API_KEY = '8b20680c766bc5c37143e5d6b7aa7894';
//const BASE_URL = 'https://api.themoviedb.org/3';
//const TREND_URL = `${BASE_URL}/trending/movie/week`;
const options = {
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
};

export default async function getTrendingMovies() {
  const resp = await fetch(`${TREND_URL}?api_key=${API_KEY}`, options);
  const respData = await resp.json();
  console.log(respData);
}
getTrendingMovies();

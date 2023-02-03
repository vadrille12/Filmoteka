import { API_KEY, BASE_URL } from './/api-vars.js';

export async function getGenres() {
  try {
    const response = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const respGenres = await response.json();

    return respGenres;
  } catch (error) {
    console.log(error.message);
  }
}

export function genresToLocalStorage(arr) {
  arr.map(genre => {
    localStorage.setItem(JSON.stringify(genre.id), genre.name);
  });
}

getGenres().then(res => {
  genresToLocalStorage(res.genres);
});

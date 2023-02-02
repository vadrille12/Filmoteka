// import { refs } from './js/getRefs';
// // import { onSearch } from './js/onSearch';
// console.log(refs.searchForm);

// // function fetchFilmsOnSearch({page, query}) {
// //     const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}`;

// //     return await fetch(url)
// //         .then(response => response.json());
// // }

// // refs.searchForm.addEventListener('submit', onSearch)
// // function onSearch(e) {
// //     console.log(e.target)
// // }

// // async function fetchFilmsOnSearch({ page, query }) {
// //   const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}`;
// //   const response = await fetch(url);
// //   if (!response.ok) {
// //     throw new Error(response.status.Text);
// //   }
// //   const data = await response.json();
// //   console.log(data);
// //   return data;
// // }

// // async function fetchFilmsOnSearch({ page, query }) {
// //   const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}`;

// //   return await fetch(url).then(response => response.json());
// // }

// // fetchFilmsOnSearch('sex', 1);

// // const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';
// // const API_KEY = '9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const KEY = '8f517ea939a3e5bbc59bc55f9e33cbf1';

// export let queryCurr = '';

// async function fetchData(query, page) {
//   const response = await fetch(
//     `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=${page}&query=${query}`
//   );
//   if (!response.ok) {
//     throw new Error(response.status.Text);
//   }

//   const data = await response.json();
//   console.log(data);
//   return data;
// }
// // fetchData('sdas', 3);

// refs.searchForm.addEventListener('submit', onSearch);
// export function onSearch(e) {
//   console.log(e);
//   const query = e.currentTarget.elements.searchQuery.value.trim();
//   console.log(query);
//   e.preventDefault();
//   if (query === '') {
//     errNotificationShow('Please, fill the search query and try again.', 3000);
//     return;
//   }
// }

// export function errNotificationShow(message, showTime) {
//   refs.searchForm.insertAdjacentHTML(
//     'beforeend',
//     '<p class="form-alert is-hidden"></p>'
//   );
//   const formAlert = document.querySelector('.form-alert');
//   formAlert.textContent = `${message}`;
//   formAlert.classList.toggle('is-hidden');
//   setTimeout(() => {
//     formAlert.classList.toggle('is-hidden');
//   }, showTime);
// }

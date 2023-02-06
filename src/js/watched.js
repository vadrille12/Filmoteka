const watchedBtn = document.querySelector('.watched-list-btn');

const itemsPerPage = 20;

let watchedMovies = [];
getWatchedMovies();

async function getWatchedMovies() {
  main.innerHTML = '';
  if (JSON.parse(localStorage.getItem('added-to-watched')) !== null) {
    let watchedMoviesNumber = JSON.parse(
      localStorage.getItem('added-to-watched')
    ).length;

    if (JSON.parse(localStorage.getItem('added-to-watched')).length === 0) {
      main.insertAdjacentHTML(
        'beforeend',
        `<p class="alert">There are no movies in your watched list!</p>`
      );
      watchedBtn.textContent = `WATCHED`;
    } else {
      main.innerHTML = '';
      watchedMovies = JSON.parse(localStorage.getItem('added-to-watched'));

      let watchedMoviesList = [];

      for (let i = 0; i < watchedMovies.length; i++) {
        let watchedMovieId = watchedMovies[i];

        let watchedMoviesItem = await getMoviesbyId(watchedMovieId);

        watchedMoviesList.push(watchedMoviesItem);
      }

      totalPages = Math.ceil(watchedMoviesList.length / itemsPerPage);

      watchedBtn.textContent = `WATCHED : ${watchedMoviesNumber}`;
    }
  } else {
    main.insertAdjacentHTML(
      'beforeend',
      `<p class="alert">There are no movies in your watched list!</p>`
    );
    watchedBtn.textContent = `WATCHED`;
  }
  watchedBtn.setAttribute('disabled', true);
}

watchedBtn.addEventListener('click', event => {
  event.preventDefault();
  getWatchedMovies();
});

const options = document.querySelectorAll('.header-library__btn');
const optionsActive = document.querySelectorAll('.header-library__activ');
const queueBtn = document.querySelector('.queue-list-btn');

// options.forEach(function(element) {
//   element.addEventListener('click', activ);
// });

// function activ (event) {
//   const targetElement = event.target;

//   options.forEach(function(element) {
//     element.classList.remove('active');
//   });

//   targetElement.classList.add('active');

//   if (options !== optionsActive) {
//     targetElement.classList.remove('active');
//   }
// }

function getWatched() {
    const fromLS = localStorage.getItem('watched');
    queueBtn.classList.remove('btn-header--active');
    watchedBtn.classList.add('btn-header--active');
    // clear();
    if (fromLS === '[]' || fromLS === null) {
      clear();
    }
}
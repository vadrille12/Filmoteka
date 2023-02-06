
import fotoUrl from '../images/movies.jpg';

const container = document.querySelector('.empty-library');
emptyLibrary();

function emptyLibrary() {
  const markup = `<div class="empty-library">
  <p class="empty-library__title">WTF!?</p>
  <img class="empty-library__img" src="${fotoUrl}" alt ="стрічка фільму" width="780" >
  </div> `;
  container.insertAdjacentHTML('beforeend', markup);
}

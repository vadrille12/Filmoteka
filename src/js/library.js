import './switchDayNight';
import './backToTopBtn';
// import './watched';
import fotoUrl from '../images/movies.png';

const containerTravolta = document.querySelector('.empty-library');

export function emptyLibrary() {
  const markup = `<div class="empty-library">
  <p class="empty-library__title">WTF!?</p>
  <img class="empty-library__img" src="${fotoUrl}" alt ="стрічка фільму" width="780" >
  </div> `;
  
  containerTravolta.innerHTML = markup;
  // containerTravolta.insertAdjacentHTML('beforeend', markup);
}

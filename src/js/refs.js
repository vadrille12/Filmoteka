export const refs = {
  form: document.querySelector('.header-form'),
  watchedBtn: document.querySelector('.watched-list-btn'),
  paginationEl: document.getElementById('tui-pagination-container'),
  moviesGallery: document.querySelector('.cards__list'),

  //=====moviesEl будет удален - надо переименовать на -- moviesGallery в рабочем файле JS
  moviesEl: document.querySelector('.cards__list'),
  //=====formFilm будет удален - надо переименовать на -- form в рабочем файле JS
  formFilm: document.querySelector('.header-form'),

  //////    Modal movie   ////////
  cardsList: document.querySelector('.cards__list'),
  backdrop: document.querySelector('.backdrop'),
  closeBtn: document.querySelector('.btn-modal-close'),
  modal: document.querySelector('.modal'),
  wrapperForBtns: document.querySelector('.modal-movie-btn'),
  watchedBtn: document.querySelector('.btn-modal__watched'),
  queueBtn: document.querySelector('.btn-modal__queue'),
};

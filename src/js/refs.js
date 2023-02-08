export const refs = {
  body: document.querySelector('body'),
  form: document.querySelector('.header-form'),
  watchedBtn: document.querySelector('.watched-list-btn'),
  paginationEl: document.getElementById('tui-pagination-container'),
  moviesGallery: document.querySelector('.cards__list--home'),

  //=====formFilm будет удален - надо переименовать на -- form в рабочем файле JS
  formFilm: document.querySelector('.header-form'),

  //////    Modal movie   ////////
  cardsList: document.querySelector('.cards__list'),
  backdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal'),
  modalMovie: document.querySelector('.modal-movie'),
  modalContent: document.querySelector('.modal__content'),
  closeBtn: document.querySelector('.btn-modal__icon'),
  addWatchedBtn: document.querySelector('.btn-modal__watched'),
  addQueueBtn: document.querySelector('.btn-modal__queue'),
  modalText: document.querySelector('.modal__text'),
};

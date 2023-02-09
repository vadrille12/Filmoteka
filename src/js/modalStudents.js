(() => {
  const refs = {
    openModalStudentBtn: document.querySelector('[data-modal-footer-open]'),
    closeModalStudentBtn: document.querySelector('[data-modal-footer-close]'),
    modalStudent: document.querySelector('[data-modal-footer]'),
  };

  refs.openModalStudentBtn.addEventListener('click', toggleModal);
  refs.closeModalStudentBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalStudent.classList.toggle('is-hidden');
  }
})();

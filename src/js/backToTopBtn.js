export const btnToTop = document.querySelector('#btn--to_top');

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    if (this.scrollY > 100) {
      btnToTop.classList.add('show');
    } else {
      btnToTop.classList.remove('show');
    }
  });
});

import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const headerBurgerIcon = document.querySelector('.js-header-burger-icon');
const headerBurgerModal = document.querySelector('#js-header-modal');
document.addEventListener('click', onHeaderBurgerBtnClick);

function onHeaderBurgerBtnClick(e) {
  if (e.target.classList.contains('js-header-burger-icon') || e.target.tagName === 'use') {
    headerBurgerModal.showModal();
    disablePageScroll();
    headerBurgerIcon.firstElementChild.outerHTML = '<use href="./img/icons.svg#icon-close"></use>';
  } else {
    headerBurgerModal.close();
    enablePageScroll();
    headerBurgerIcon.firstElementChild.outerHTML = '<use href="./img/icons.svg#icon-burger"></use>';
  }
}

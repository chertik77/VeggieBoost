import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const headerBurgerIcon = document.querySelector('.js-header-burger-icon');
const headerBurgerModal = document.querySelector('#js-header-modal');
document.addEventListener('click', onHeaderBurgerBtnClick);

function onHeaderBurgerBtnClick(e) {
  if (
    e.target.classList.contains('js-header-burger-icon') ||
    e.target.tagName === 'use' ||
    e.target.classList.contains('.header-burger-btn')
  ) {
    headerBurgerModal.showModal();
    disablePageScroll();
    headerBurgerIcon.firstElementChild.outerHTML = '<use href="./icon-close.svg"></use>';
  } else {
    if (
      e.target.classList.contains('header-modal-container') ||
      e.target.classList.contains('header-modal-nav-list')
    ) {
      return;
    }
    headerBurgerModal.close();
    enablePageScroll();
    headerBurgerIcon.firstElementChild.outerHTML = '<use href="./img/icons.svg#icon-burger"></use>';
  }
}

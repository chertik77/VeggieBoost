import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const headerBurgerIcon = document.querySelector('.js-header-burger-icon');
const headerBurgerModal = document.querySelector('#js-header-modal');
const headerCloseIcon = document.querySelector('.js-header-icon-close');
document.addEventListener('click', onHeaderBurgerBtnClick);
headerCloseIcon.style.display = 'none';

function onHeaderBurgerBtnClick(e) {
  if (
    e.target.classList.contains('js-header-burger-icon') ||
    e.target.tagName === 'use' ||
    e.target.classList.contains('.header-burger-btn')
  ) {
    headerBurgerModal.showModal();
    disablePageScroll();
    headerBurgerIcon.style.display = 'none';
    headerCloseIcon.style.display = 'block';
  } else {
    if (
      e.target.classList.contains('header-modal-container') ||
      e.target.classList.contains('header-modal-nav-list')
    ) {
      return;
    }
    headerBurgerModal.close();
    enablePageScroll();
    headerBurgerIcon.style.display = 'block';
    headerCloseIcon.style.display = 'none';
  }
}

import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const headerBurgerIcon = document.querySelector('.js-header-burger-icon');
const headerBurgerModal = document.querySelector('#js-header-modal');
document.addEventListener('click', onHeaderBurgerBtnClick);

function onHeaderBurgerBtnClick(e) {
  if (
    e.target.classList.contains('js-header-burger-icon') ||
    e.target.closest('js-header-burger-icon')
  ) {
    headerBurgerModal.showModal();
    disablePageScroll();
    headerBurgerIcon.firstElementChild.href.baseVal = './img/icons.svg#icon-close';
  } else {
    headerBurgerModal.close();
    enablePageScroll();
    headerBurgerIcon.firstElementChild.href.baseVal = './img/icons.svg#icon-burger';
  }
}

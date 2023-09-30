import { disablePageScroll } from 'scroll-lock';

const headerBurgerBtn = document.querySelector('.header-burger-btn');
const headerBurgerIcon = document.querySelector('.header-burger-icon');
const headerBurgerModal = document.querySelector('#header-modal');
headerBurgerBtn.addEventListener('click', onHeaderBurgerBtnClick);

function onHeaderBurgerBtnClick() {
  headerBurgerModal.showModal();
  disablePageScroll();
  headerBurgerIcon.firstElementChild.href.baseVal = './img/icons.svg#icon-close';
}

'use strict';

const burgerButton = document.querySelector('.burger__button');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active__button');
  burgerButton.classList.toggle('burger__button');
});

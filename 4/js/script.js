'use strict';
// Кнопка выпадающего меню //

var showNavigationLink = document.querySelector('.catalog-button');
var showNavigation = document.querySelector('.site-nav__sublist');

showNavigationLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  showNavigation.classList.toggle('sublist-visible');
});

// Сервис слайдер //

var servicesControls = document.querySelector('.services__controls');
var servicesLinks = document.querySelectorAll('.services__switch');
var servicesItems = document.querySelectorAll('.services__item');

servicesControls.addEventListener('click', function (evt) {
  evt.preventDefault();
  var target = evt.target;
  if (target.classList.contains('services__switch')) {
    for (var i = 0; i < servicesItems.length; i++) {
      servicesItems[i].classList.remove('services__item-show');
      servicesLinks[i].classList.remove('services__switch-active');
    }
    target.classList.add('services__switch-active');
    var currentItem = document.querySelector('.services__item-' + target.id);
    currentItem.classList.add('services__item-show');
  }
});

// Модальное окно обратной связи и карта //

var linkForm = document.querySelector('.feedback-button');
var linkMap = document.querySelector('.map');
var modalForm = document.querySelector('.modal__feedback');
var modalMap = document.querySelector('.modal__map');
var formClose = modalForm.querySelector('.modal__close');
var mapClose = modalMap.querySelector('.modal__close');

linkForm.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalForm.classList.add('modal-show');
});

formClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalForm.classList.remove('modal-show');
});

linkMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('modal-show');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalForm.classList.contains('modal-show')) {
      modalForm.classList.remove('modal-show');
    }
    if (modalMap.classList.contains('modal-show')) {
      modalMap.classList.remove('modal-show');
    }
  }
});

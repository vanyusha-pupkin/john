import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// ОПИСАНИЕ

/*
npm i swiper
*/

//ПРИМЕР
/*
HTML
<!-- Главный контейнер слайдера -->
<div class="swiper-container">
  <!-- Обязательная оболочка -->
  <div class="swiper-wrapper">
    <!-- Слайды -->
    <div class="swiper-slide"><img alt=".." src="img/01.jpg"></div>
    <div class="swiper-slide"><img alt=".." src="img/02.jpg"></div>
    <div class="swiper-slide"><img alt=".." src="img/03.jpg"></div>
    ...
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>


SCSS

*/

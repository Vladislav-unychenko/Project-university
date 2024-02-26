const mySwiper = new Swiper('.swiper', {
  // Включаем бесконечный режим
  loop: true,
  // Отображаем по 3 слайда в ряд
  slidesPerView: 1,

  // Отключаем автопрокрутку
  autoplay: false,
  
  // Отключаем кнопки навигации
  navigation: {
    nextEl: '.swiper__control_next',
    prevEl: '.swiper__control_prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      effect: "cards",
    },
    // when window width is >= 640px
  }
});





























// Инициализируем Swiper
  // Инициализируем Swiper
// var mySwiper = new Swiper('.swiper-container', {
//     // Включаем бесконечный режим
//     loop: true,
//     // Отображаем по 3 слайда в ряд
//     slidesPerView: 3,
//     // Отображаем только три слайда одновременно
//     centeredSlides: true,
//     // Отключаем автопрокрутку
//     autoplay: false,
//     // Отключаем кнопки навигации
//     navigation: {
//     nextEl: '.custom-swiper-button-next',
//     prevEl: '.custom-swiper-button-prev',
//     },
// });

// var swiper = new Swiper(".swiper-container", {
//     spaceBetween: 30,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
//     mousewheel: true, // Исправлено название свойства
//     keyboard: true, // Исправлено название свойства
// });
// // Добавляем обработчики событий для пользовательских кнопок
// document.querySelector('.custom-swiper-button-prev').addEventListener('click', function() {
//     swiper.slidePrev();
//   });

//   document.querySelector('.custom-swiper-button-next').addEventListener('click', function() {
//     swiper.slideNext();
//   });
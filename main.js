import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
  },
});

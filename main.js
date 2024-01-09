import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  // 페이지 표시 N / N 으로 커스터마이징
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        ' / ' +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
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
  // nav arrows 키보드로 접근 가능
  keyboard: {
    enabled: true,
  },
});

const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 4,
  slidesPerGroup: 4,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper2-button-next',
    prevEl: '.swiper2-button-prev',
  },
  // 슬라이드 위치에 따라 prev, next 버튼 보이기/숨기기
  on: {
    init: function () {
      // 슬라이드가 처음 페이지에 위치할 때 prev 버튼 숨기기
      if (this.isBeginning) {
        document.querySelector('.swiper2-button-prev').style.display = 'none';
      }
    },
    slideChange: function () {
      // 슬라이드 변경 시 prev 버튼 보이기/숨기기
      if (this.isBeginning) {
        document.querySelector('.swiper2-button-prev').style.display = 'none';
      } else {
        document.querySelector('.swiper2-button-prev').style.display = 'block';
      }
      // 슬라이드가 마지막 페이지에 위치할 때 next 버튼 숨기기
      if (this.isEnd) {
        document.querySelector('.swiper2-button-next').style.display = 'none';
      } else {
        document.querySelector('.swiper2-button-next').style.display = 'block';
      }
    },
  },
  keyboard: {
    enabled: true,
  },
});

const swiper3 = new Swiper('.swiper3', {
  slidesPerView: 4,
  slidesPerGroup: 4,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper3-button-next',
    prevEl: '.swiper3-button-prev',
  },
  // 슬라이드 위치에 따라 prev, next 버튼 보이기/숨기기
  on: {
    init: function () {
      // 슬라이드가 처음 페이지에 위치할 때 prev 버튼 숨기기
      if (this.isBeginning) {
        document.querySelector('.swiper3-button-prev').style.display = 'none';
      }
    },
    slideChange: function () {
      // 슬라이드 변경 시 prev 버튼 보이기/숨기기
      if (this.isBeginning) {
        document.querySelector('.swiper3-button-prev').style.display = 'none';
      } else {
        document.querySelector('.swiper3-button-prev').style.display = 'block';
      }
      // 슬라이드가 마지막 페이지에 위치할 때 next 버튼 숨기기
      if (this.isEnd) {
        document.querySelector('.swiper3-button-next').style.display = 'none';
      } else {
        document.querySelector('.swiper3-button-next').style.display = 'block';
      }
    },
  },
  keyboard: {
    enabled: true,
  },
});

const swiperContainer = document.querySelector('.swiper');
const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');

swiperContainer.addEventListener('mouseenter', function () {
  prevButton.classList.remove('hidden');
  nextButton.classList.remove('hidden');
  prevButton.classList.add('opacity-100');
  nextButton.classList.add('opacity-100');
  swiper.autoplay.stop();
});

swiperContainer.addEventListener('mouseleave', function () {
  prevButton.classList.remove('opacity-100');
  nextButton.classList.remove('opacity-100');
  prevButton.classList.add('hidden');
  nextButton.classList.add('hidden');
  swiper.autoplay.start();
});

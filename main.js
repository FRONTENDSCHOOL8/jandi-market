import Swiper from 'swiper/bundle';
import 'swiper/css';
import { openModal, closeModal } from '/src/components/addCart/addCart.js';

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

/* -------------------------------------------------------------------------- */
/*    ///////////////////pb에서 상품 데이터동적 랜더링/////////////////////    */
/* -------------------------------------------------------------------------- */
const URL = `https://jandi-market.pockethost.io/api/collections/products/records`;
const imgURL = `https://jandi-market.pockethost.io/api/files/n9omag8299xjizq`;
const recommendedProductList = document.querySelector(
  '.recommended_product_list'
);
const cheapProductList = document.querySelector('.cheap_product_list');

/* 이 상품 어때요 ? */
fetch(`${URL}/?filter=(price>=15000)`)
  .then((response) => {
    if (response.ok === true) {
      return response.json();
    }
  })
  .then((data) => {
    data.items.forEach((item) => {
      const template = /* html */ `
      <li
        class="flex flex-col items-start swiper-slide"
      >
        <a href="/src/pages/productDetail/#${item.id}">
          <img
          width="249"
          height="516"
          src="${`${imgURL}/${item.id}/${item.main_image}`}" alt="${
            item.name
          }" />
        </a>
        <button class="add_cart mt-6pxr" type="button">
          <img src="/banner/add_cart_button.png" alt="" />
        </button>
        
        <span class="font-semibold text-gray-200 text-14pxr mt-16pxr"
          >${item.desc}</span
        >
        <h3 class="font-bold text-16pxr mt-8pxr">
          ${item.name}
        </h3>
        <span class="font-normal text-gray-300 text-14pxr mt-16pxr"
          >${item.price}원</span
        >
        <div>
          <span class="m-0 font-bold text-orange-600 text-16pxr"
            >${item.discount}%</span
          >
          <span class="m-0 font-semibold text-16pxr">${
            item.price - (item.price * item.discount) / 100
          }원</span>
        </div>
      </li>
    `;

      recommendedProductList.insertAdjacentHTML('beforeend', template);
      const addCart = document.querySelector('.add_cart');
      const addCartModal = document.querySelector('#add_cart_modal');
      addCart.addEventListener('click', () => {
        openModal(addCartModal, 'modal_hidden');
      });
      const closeBtn = document.querySelector('#close_modal');
      closeBtn.addEventListener('click', () => {
        closeModal(addCartModal, 'modal_hidden');
      });
    });
  })
  .catch((error) => console.log(error));

/* 놓치면 후회할 가격 */
fetch(`${URL}/?filter=(price < 15000)`)
  .then((response) => {
    if (response.ok === true) {
      return response.json();
    }
  })
  .then((data) => {
    data.items.forEach((item) => {
      const template = /* html */ `
      <li
        class="flex flex-col items-start swiper-slide"
      >
        <a href="/src/pages/productDetail/#${item.id}">
          <img
          width="249"
          height="516"
          src="${`${imgURL}/${item.id}/${item.main_image}`}" alt="${
            item.name
          }" />
        </a>
        <button class="add_cart mt-6pxr" type="button">
          <img src="/banner/add_cart_button.png" alt="" />
        </button>
        <span class="font-semibold text-gray-200 text-14pxr mt-16pxr"
          >${item.desc}</span
        >
        <h3 class="font-bold text-16pxr mt-8pxr">
          ${item.name}
        </h3>
        <span class="font-normal text-gray-300 text-14pxr mt-16pxr"
          >${item.price}원</span
        >
        <div>
          <span class="m-0 font-bold text-orange-600 text-16pxr"
            >${item.discount}%</span
          >
          <span class="m-0 font-semibold text-16pxr">${
            item.price - (item.price * item.discount) / 100
          }원</span>
        </div>
      </li>
    `;

      cheapProductList.insertAdjacentHTML('beforeend', template);
    });
  })
  .catch((error) => console.log(error));

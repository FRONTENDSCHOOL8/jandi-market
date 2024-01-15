// 총 상품개수 표시
const productNum = document.querySelector('.product-container');
const products = productNum.querySelectorAll('li');
const productTotal = document.querySelector('.product-total');

productTotal.textContent = `총 ${products.length}건`;

// 아코디언 구현
// 카테고리 1번째 버튼
// arcodian 클래스를 가진 버튼을 선택합니다.
const arcodianButton = document.querySelectorAll('.arcodian');

// categoryDetail 클래스를 가진 ul 요소를 선택합니다.
const categoryDetail = document.querySelectorAll('.categoryDetail');

arcodianButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    categoryDetail[index].classList.toggle('hidden');
    categoryDetail[index].classList.toggle('flex');
  });
});

// 카테고리 1번째 체크박스 구현
// 모든 li 요소 선택
const liItems = document.querySelectorAll('.checkbox-container');

// 각 li 요소에 대해 클릭 이벤트 추가
liItems.forEach((li) => {
  li.addEventListener('click', () => {
    // 클릭된 li 요소 내부 버튼 선택
    const button = li.querySelector('button');
    // 클릭된 li 요소 내부의 이미지를 선택
    const image = li.querySelector('img');

    // 버튼에 active 클래스를 토글한다.
    button.classList.toggle('active');

    // 이미지의 src를 변경한다.
    if (button.classList.contains('active')) {
      image.src = '/input/checkBox-isChecked.svg';
    } else {
      image.src = '/input/checkBox.svg';
    }
  });
});

const URL = `https://jandi-market.pockethost.io/api/collections/products/records`;
const imgURL = `https://jandi-market.pockethost.io/api/files/n9omag8299xjizq`;
const recommendedProductList = document.querySelector('.product-container');
const cheapProductList = document.querySelector('.cheap_product_list');

fetch(`${URL}/?filter=(price>=15000)`)
  .then((response) => {
    if (response.ok === true) {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);

    data.items.forEach((item) => {
      const template = /* html */ `
      <li
        class="flex flex-col items-start swiper-slide w-249pxr h-516pxr"
      >
        <a href="/src/pages/productDetail/#${item.id}">
          <img
          width="249"
          height="516"
          src="${`${imgURL}/${item.id}/${item.main_image}`}" alt="${
            item.name
          }" />
        </a>
        <button class="mt-6pxr" type="button">
          <img src="/banner/add cart button.png" alt="" />
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
    });
  })
  .catch((error) => console.log(error));

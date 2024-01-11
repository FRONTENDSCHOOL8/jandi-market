// const API = `https://jandi-market.pockethost.io/api/collections/products/records/:id`;
// const imgURL = `https://jandi-market.pockethost.io/api/files/:collectionsID/:id/:fileName`;

let productId = window.location.hash.slice(1);

const URL = `https://jandi-market.pockethost.io/api/collections/products/records/${productId}`;
const imgURL = `https://jandi-market.pockethost.io/api/files/n9omag8299xjizq/${productId}`;

const product = document.querySelector('.product');
const productHeader = document.querySelector('.product_header');
const productPrice = document.querySelector('.product_price');
const productOrigin = document.querySelector('.product_origin');
const productPackaging = document.querySelector('.product_packaging');
const productInfo = document.querySelector('.product_info');
const productSelectName = document.querySelector('.product_select_name');
const productSelectPrice = document.querySelector('.product_select_price');
const productDescription = document.querySelector('.product_description');
const checkPoint = document.querySelector('.check_point');
const productDetailImage = document.querySelector('.product_detail_img');

const quantityDecrease = document.querySelector('.quantity_decrease');
const productQuantity = document.querySelector('.product_quantity');
const quantityIncrease = document.querySelector('.quantity_increase');

const totalPrice = document.querySelector('.total_price');

let quantity = 1; // 상품 수량

/* -------------------------------------------------------------------------- */
/*                                   데이터바인딩                               */
/* -------------------------------------------------------------------------- */
fetch(URL)
  .then((response) => {
    if (response.ok === true) {
      return response.json();
    }
  })
  .then((data) => {
    // console.log(data);
    const discountPrice = data.price - (data.price * data.discount) / 100;
    const floorDiscountPrice = Math.floor(discountPrice / 10) * 10;

    document.title = `${data.name} | 잔디마켓`;

    const renderMainImage = /* html */ `
      <img src="${`${imgURL}/${data.main_image}`}" alt="${
        data.name
      }" width="400" height="514" />
    `;
    const renderProductHeader = /* html */ `
      <h2 class="font-semibold text-label-xl">${
        data.brand !== '' ? `${data.brand} ` : ''
      }${data.name}</h2>
      <p class="text-gray-400 text-paragraph-medium">${data.desc}</p>
    `;
    const renderProductPrice = /* html */ `
      <strong class="text-label-xl">
        <span class="text-red-500">${data.discount}%</span>
        <span>${floorDiscountPrice.toLocaleString()}</span>
        <span class="font-bold text-heading-medium">원</span>
      </strong>
      <p class="text-gray-400 text-heading-medium">
        <s>${data.price.toLocaleString()}원</s>
      </p>
    `;
    const renderProductOrigin = /* html */ `
    <p class="font-semibold text-24pxr text-content">
      원산지 : ${data.origin}
    </p>
    `;
    /* 내용 추가할 것 */
    const renderProductInfo = /* html */ `
      <div class="info_flex">
        <dt class="min-w-32">배송</dt>
        <dd>
          <p>샛별배송</p>
          <p class="text-gray-400">
            23시 전 주문 시 내일 아침 7시 전 도착
          </p>
          <p class="text-gray-400">
            (대구 부산 울산 샛별배송 운영시간 별도 확인)
          </p>
        </dd>
      </div>
      <div class="info_flex">
        <dt class="min-w-32">판매자</dt>
        <dd>
          <p>칼리</p>
        </dd>
      </div>
      <div class="info_flex">
        <dt class="min-w-32">포장타입</dt>
        <dd>
          <p>${data.packaging} (종이포장)</p>
          <p class="text-gray-400">
            택배배송은 에코 포장이 스티로폼으로 대체됩니다.
          </p>
        </dd>
      </div>
      <div class="info_flex">
        <dt class="min-w-32">판매단위</dt>
        <dd>
          <p>${data.sales_unit}</p>
        </dd>
      </div>
      <div class="info_flex">
        <dt class="min-w-32">중량/용량</dt>
        <dd>
          <p>${data.weight}</p>
        </dd>
      </div>
      ${
        data.allergy !== ''
          ? /* html */ `
      <div class="info_flex">
        <dt class="min-w-32">알레르기정보</dt>
        <dd>
          <p>${data.allergy}</p>
        </dd>
      </div>  
      `
          : ``
      }
            ${
              data.expiration_date !== ''
                ? /* html */ `
      <div class="info_flex">
        <dt class="min-w-32">유통기한</dt>
        <dd>
          <p>${data.expiration_date}</p>
        </dd>
      </div>  
      `
                : ``
            }

      ${
        data.sugar_content !== ''
          ? /* html */ `
      <div class="info_flex">
        <dt class="min-w-32">당도</dt>
        <dd>
          <p>${data.sugar_content} Brix 이상</p>
        </dd>
      </div>
      `
          : ``
      }
      ${
        data.notification !== ''
          ? /* html */ `
      <div class="info_flex">
        <dt class="min-w-32">안내사항</dt>
        <dd>
          <p>${data.notification}</p>
        </dd>
      </div>  
      `
          : ``
      }

    `;
    const renderSelectProductName = /* html */ `
    <p class="mb-3">${data.name}</p>
    `;
    const renderSelectProductPrice = /* html */ `
      <span class="text-content">${data.price.toLocaleString()}원</span>
    `;
    const renderProductDescription = /* html */ `
      <img
      src="${`${imgURL}/${data.info_main_image}`}"
      alt="${data.info_title}"
      width="1050"
      height="670"
      />

      <div class="text-center pt-76pxr pb-9">
        <p class="font-semibold text-label-xl">
          ${data.info_sub_title}
        </p>
        <h3 class="font-bold text-heading-xxxl leading_140">
          ${data.info_title}
        </h3>
      </div>
      <p
        class="flex items-start self-stretch border-t pt-7 border-t-gray-100 leading_160"
      >
        ${data.info_desc}
      </p>
    `;
    const renderCheckPoint = /* html */ `
      <img
        src="${`${imgURL}/${data.info_check_point}`}"
        alt="karly's Check Point"
        width="1010"
        height="283"
      />
    `;
    const renderProductDetailImage = /* html */ `
      <img
        src="${`${imgURL}/${data.info_detail_image}`}"
        alt="상품 상세 이미지"
      />
    `;
    const renderTotalPrice = /* html */ `
      ${floorDiscountPrice.toLocaleString()}
    `;
    product.insertAdjacentHTML('afterbegin', renderMainImage);
    productHeader.insertAdjacentHTML('afterbegin', renderProductHeader);
    productPrice.insertAdjacentHTML('afterbegin', renderProductPrice);
    productOrigin.insertAdjacentHTML('afterbegin', renderProductOrigin);
    productInfo.insertAdjacentHTML('afterbegin', renderProductInfo);
    productSelectName.insertAdjacentHTML('afterbegin', renderSelectProductName);
    productSelectPrice.insertAdjacentHTML(
      'afterbegin',
      renderSelectProductPrice
    );
    productDescription.insertAdjacentHTML(
      'afterbegin',
      renderProductDescription
    );
    checkPoint.insertAdjacentHTML('afterbegin', renderCheckPoint);
    productDetailImage.insertAdjacentHTML(
      'afterbegin',
      renderProductDetailImage
    );
    totalPrice.insertAdjacentHTML('afterbegin', renderTotalPrice);

    /* -------------------------------------------------------------------------- */
    /*                                수량 증가 & 상품금액                          */
    /* -------------------------------------------------------------------------- */

    quantityDecrease.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
      }
      if (quantity <= 1) {
        quantityDecrease.src = `/public/input/minus-disabled.svg`;
        quantityDecrease.alt = `수량 감소 비활성화`;
      }
      productQuantity.textContent = quantity;
      // 상품 수량을 누르면 그 값에 따라 금액도 달라진다.
      let total = floorDiscountPrice * quantity;
      totalPrice.textContent = total.toLocaleString();
    });
    quantityIncrease.addEventListener('click', () => {
      quantity++;
      if (quantity >= 0) {
        quantityDecrease.src = `/public/input/minus.svg`;
        quantityDecrease.alt = `수량 감소`;
      }
      productQuantity.textContent = quantity;
      // 상품 수량을 누르면 그 값에 따라 금액도 달라진다.
      let total = floorDiscountPrice * quantity;
      totalPrice.textContent = total.toLocaleString();
    });
  })
  .catch((err) => console.log(err));

/* -------------------------------------------------------------------------- */
/*    하트 클릭 시, localStorage에 상태( true, false ) 저장하여 .active 구현하기    */
/* -------------------------------------------------------------------------- */

const wishList = document.querySelector('.wish_list');
const iconHeart = document.querySelector('.icon_heart');

let productWish = JSON.parse(localStorage.getItem(productId) || 'false');

// 초기 아이콘 설정
updateHeartIcon();

wishList.addEventListener('click', () => {
  productWish = !productWish; // wish 상태를 반전
  console.log(productWish);
  wishList.dataset.wish = String(productWish);
  localStorage.setItem(productId, JSON.stringify(productWish));
  updateHeartIcon();
});

function updateHeartIcon() {
  iconHeart.setAttribute(
    'href',
    `/public/icon/_sprite.svg#Heart${productWish ? '-active' : ''}`
  );
}

/* -------------------------------------------------------------------------- */
/*                                     탭기능                                  */
/* -------------------------------------------------------------------------- */
// 각 버튼을 누르면 해당 스크롤이 섹션으로 이동한다.
// 이동했을 경우 aria-selected가 true로 변경된다.
// 이동했을 경우 is_active_tab 클래스가 추가된다.
// 다른 버튼들은 aria-selected가 모두 false로 변경된다.
// 키보드로도 이동할 수 있도록 만들어준다.

const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');
const tabPanel = document.querySelectorAll('[role="tabpanel"]');

// 이벤트 버블링을 이용

function moveScrollToTab(e) {
  const tabButton = e.target;
  const controlledPanelId = tabButton.getAttribute('aria-controls');
  tabs.forEach((tab) => {
    tab.classList.remove('is_active_tab');
    tab.setAttribute('aria-selected', false);
  });
  tabPanel.forEach((panel) => {
    if (panel.getAttribute('id') === controlledPanelId) {
      tabButton.classList.add('is_active_tab');
      tabButton.setAttribute('aria-selected', true);
      panel.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
    }
  });
}

tabList.addEventListener('click', moveScrollToTab);

/* -------------------------------------------------------------------------- */
/*                                   장바구니 담기                              */
/* -------------------------------------------------------------------------- */
// cartButton을 누르면 상품id, 유저id, 갯수가 장바구니 DB로 넘어간다.

const cartButton = document.querySelector('.cart_button');
const cartData = import.meta.env.VITE_PH_CART;
// let productId = window.location.hash.slice(1);
// let quantity = 1; // 상품 수량
cartButton.addEventListener('click', () => {
  // local
  let userId = localStorage.getItem('userId');

  console.log(`${userId} 의 ${productId} 상품을 ${quantity}개 담았습니다.`);

  let url = decodeURIComponent(
    `${cartData}?filter=(userId="${userId}"&&productId="${productId}")`
  );
  /* 카트의 정보를 가져온다. */
  fetch(url).then((response) => {
    console.log(response);
  });
  // .then((data) => {
  /* DB의 정보를 가져온다. */

  // console.log(data);
  // });
});

// data.items.forEach((user) => {
//   if (user.id === userId) {
//     console.log('왜안나와');
//   }
// data.items.forEach((cart) => {
//   let cartUser = cart.userId;
//   let cartProduct = cart.productId;
//   let cartQuantity = cart.quantity;
//   let totalQuantity = quantity + cartQuantity;

//   console.log(
//     `${cartUser} 의 ${cartProduct} 상품을 ${totalQuantity}개 담겼습니다.`
//   );
//   console.log(totalQuantity);

//   console.log(cartUser === userId);
//   console.log(cartProduct === productId);

//   if (cartUser === userId && cartProduct === productId) {
//     fetch(`${cartData}/${cart.id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         userId,
//         productId,
//         quantity: quantity + cartQuantity,
//       }),
//     })
//       .then((response) => {
//         console.log(response);
//         if (response.ok) {
//           return response.json();
//         }
//       })
//       .then((data) => console.log(data));
//   } else {
//     console.log('초면이네요');
//     fetch(cartData, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         userId,
//         productId,
//         quantity,
//       }),
//     }).then((response) => {
//       console.log(response);
//     });
//   }
// });
//     });
// });

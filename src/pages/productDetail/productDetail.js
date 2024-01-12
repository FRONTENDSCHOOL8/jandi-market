import './accordionToggle';

let quantity = 1; // 상품 수량
const COLLECTIONS_ID = 'n9omag8299xjizq';
const productId = window.location.hash.slice(1);

const URL = `${import.meta.env.VITE_PH_PL}/${productId}`;
const imgURL = `${import.meta.env.VITE_PH_IMG}/${COLLECTIONS_ID}/${productId}`;

const quantityDecrease = document.querySelector('.quantity_decrease');
const productQuantity = document.querySelector('.product_quantity');
const quantityIncrease = document.querySelector('.quantity_increase');

function insertAfterBegin(node, renderTemplate) {
  node = document.querySelector(node);

  return node.insertAdjacentHTML('afterbegin', renderTemplate);
}
function generateInfoSection(title, content, addContent = '') {
  return content !== ''
    ? /* html */ `
      <div class="info_flex">
        <dt class="min-w-32">${title}</dt>
        <dd>
          <p>${content}</p>
          ${addContent}
        </dd>
      </div>`
    : '';
}

/* -------------------------------------------------------------------------- */
/*                                   데이터바인딩                               */
/* -------------------------------------------------------------------------- */

async function displayProductDetails() {
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error('API 호출에 실패했습니다.');

    const data = await response.json();

    const discountPrice = data.price - (data.price * data.discount) / 100;
    const floorDiscountPrice = Math.floor(discountPrice / 10) * 10;

    document.title = `${data.name} | 잔디마켓`;

    insertAfterBegin(
      '.product',
      `
      <img src="${`${imgURL}/${data.main_image}`}" alt="${
        data.name
      }" width="400" height="514" />
    `
    );
    insertAfterBegin(
      '.product_header',
      `
      <h2 class="font-semibold text-label-xl">${
        data.brand !== '' ? `${data.brand} ` : ''
      }${data.name}</h2>
      <p class="text-gray-400 text-paragraph-medium">${data.desc}</p>
    `
    );
    insertAfterBegin(
      '.product_price',
      `
      <strong class="text-label-xl">
        <span class="text-red-500">${data.discount}%</span>
        <span>${floorDiscountPrice.toLocaleString()}</span>
        <span class="font-bold text-heading-medium">원</span>
      </strong>
      <p class="text-gray-400 text-heading-medium">
        <s>${data.price.toLocaleString()}원</s>
      </p>
    `
    );
    insertAfterBegin(
      '.product_origin',
      `
    <p class="font-semibold text-24pxr text-content">
      원산지 : ${data.origin}
    </p>
    `
    );
    insertAfterBegin(
      '.product_info',
      `
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
      ${generateInfoSection('판매자', '칼리')}
      ${generateInfoSection(
        '포장타입',
        `${data.packaging} (종이포장)`,
        `<p class="text-gray-400">
            택배배송은 에코 포장이 스티로폼으로 대체됩니다.
          </p>`
      )}
      ${generateInfoSection('판매단위', data.sales_unit)}
      ${generateInfoSection('중량/용량', data.weight)}
      ${generateInfoSection('알레르기정보', data.allergy)}
      ${generateInfoSection('유통기한', data.expiration_date)}
      ${generateInfoSection('당도', `${data.sugar_content} Brix 이상`)}
      ${generateInfoSection('안내사항', data.notification)}
    `
    );
    insertAfterBegin(
      '.product_select_name',
      `
    <p class="mb-3">${data.name}</p>
    `
    );
    insertAfterBegin(
      '.product_select_price',
      `
      <span class="text-content">${data.price.toLocaleString()}원</span>
    `
    );
    insertAfterBegin(
      '.product_description',
      `
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
    `
    );
    insertAfterBegin(
      '.check_point',
      `
      <img
        src="${`${imgURL}/${data.info_check_point}`}"
        alt="karly's Check Point"
        width="1010"
        height="283"
      />
    `
    );
    insertAfterBegin(
      '.product_detail_img',
      `
      <img
        src="${`${imgURL}/${data.info_detail_image}`}"
        alt="상품 상세 이미지"
      />
    `
    );
    insertAfterBegin(
      '.total_price',
      `
      ${floorDiscountPrice.toLocaleString()}
    `
    );

    /* -------------------------------------------------------------------------- */
    /*                                수량 증가 & 상품금액                          */
    /* -------------------------------------------------------------------------- */

    function calculateTotalPrice() {
      productQuantity.textContent = quantity;
      let total = floorDiscountPrice * quantity;
      totalPrice.textContent = total.toLocaleString();
    }

    function updateQuantity(increase) {
      quantity += increase ? 1 : -1;
      if (quantity <= 1) {
        quantityDecrease.src = `/public/input/minus-disabled.svg`;
        quantityDecrease.alt = `수량 감소 비활성화`;
      } else if (quantity > 1) {
        quantityDecrease.src = `/public/input/minus.svg`;
        quantityDecrease.alt = `수량 감소`;
      }
      calculateTotalPrice();
    }

    quantityDecrease.addEventListener('click', () => {
      if (quantity > 1) {
        updateQuantity(false);
      }
    });
    quantityIncrease.addEventListener('click', () => {
      updateQuantity(true);
    });
  } catch (error) {
    console.error(error);
  }
}
displayProductDetails();
/* -------------------------------------------------------------------------- */
/*    하트 클릭 시, localStorage에 상태( true, false ) 저장하여 .active 구현하기    */
/* -------------------------------------------------------------------------- */

const wishList = document.querySelector('.wish_list');
const iconHeart = document.querySelector('.icon_heart');

let productWish = JSON.parse(localStorage.getItem(productId) || 'false');

updateHeartIcon();

wishList.addEventListener('click', () => {
  productWish = !productWish;
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

const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');
const tabPanel = document.querySelectorAll('[role="tabpanel"]');

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

const cartButton = document.querySelector('.cart_button');
const CART_URL = import.meta.env.VITE_PH_CART;

cartButton.addEventListener('click', () => {
  let userId = localStorage.getItem('userId');

  console.log(`${userId} 의 ${productId} 상품을 ${quantity}개 담았습니다.`);

  const FILTER_URL = `${CART_URL}?filter=(userId%3D'${userId}'%26%26productId%3D'${productId}')`;

  async function updateCart() {
    try {
      const response = await fetch(FILTER_URL);
      if (!response.ok) throw new Error('CART API 요청이 실패했습니다.');

      const data = await response.json();
      if (data.items.length > 0) {
        const cartId = data.items[0].id;
        const patchResponse = await fetch(`${CART_URL}/${cartId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId,
            productId,
            quantity: data.items[0].quantity + quantity,
          }),
        });

        if (!patchResponse.ok)
          throw new Error('Patch API 요청이 실패했습니다.');
        const patchData = await patchResponse.json();
        alert(`${patchData.id}가 추가로 담겼습니다`);
      } else {
        const postResponse = await fetch(CART_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId,
            productId,
            quantity,
          }),
        });
        if (!postResponse.ok) throw new Error('Patch API 요청이 실패했습니다.');
        const patchData = await patchResponse.json();
        alert(`${patchData.id}가 추가로 담겼습니다`);
      }
    } catch (error) {
      console.error(error);
    }
  }
  updateCart();
});

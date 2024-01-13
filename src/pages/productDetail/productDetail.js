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
        <span class="text-red-500">${`${
          data.discount > 0 ? `${data.discount}%` : ''
        }`}</span>
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

    /* -------------------------------------------------------------------------- */
    /*                                     모달창                                  */
    /* -------------------------------------------------------------------------- */

    const reviewButton = document.querySelector('.review_button');
    const inquiryButton = document.querySelector('.inquiry_button');

    function clickedShowModal() {
      const dialog = detailModal.children[1];
      dialog.showModal();
      dialog.classList.remove('modal_hidden');
    }

    const desc = document.querySelector('#desc');
    const virtualPlaceholder = document.querySelector('.virtual_placeholder');
    const textLength = document.querySelector('.text_length');
    const MAX_LENGTH = 5000;

    function updateTextUI() {
      const length = desc.value.length;
      virtualPlaceholder.classList.toggle('hidden', length > 0);
      virtualPlaceholder.classList.toggle('flex', length <= 0);
      textLength.textContent = `${length} / ${MAX_LENGTH}`;
      if (length > MAX_LENGTH) {
        desc.value = desc.value.slice(0, MAX_LENGTH);
      }
    }
    function closeButton() {
      const closeButton = document.querySelector('.close_button');

      closeButton.addEventListener('click', () => {
        const dialog = document.querySelector('dialog');

        dialog.close();
        dialog.classList.add('modal_hidden');
        updateTextUI();
      });
    }
    desc.addEventListener('input', () => {
      updateTextUI();
    });

    reviewButton.addEventListener('click', () => {
      clickedShowModal();
      updateTextUI();

      const ModalTitle = document.querySelector('.modal_title');
      const ModalProduct = document.querySelector('.modal_product');
      const modalContentTitle = document.querySelector('.modal_content_title');
      const virtualPlaceholder = document.querySelector('.virtual_placeholder');
      const secretCheck = document.querySelector('.secret_check');
      ModalTitle.innerHTML = `
      <h2 class="text-heading-xl font-bold leading-[140%]">후기 작성하기</h2>
      <svg role="후기작성 모달창 닫기" class="cursor-pointer close_button" width="30" height="30">
        <use href="/icon/_sprite.svg#Cancel" />
      </svg>
      `;
      ModalProduct.innerHTML = `
      <img src="${`${imgURL}/${data.main_image}`}" alt="${
        data.name
      }" width="72" height="72" />
      <h3 class="font-semibold text-label-medium">${
        data.brand ? data.brand : ''
      } ${data.name}</h3>
      `;
      modalContentTitle.innerHTML = `<label
        for="review_title"
        class="pt-2 pr-2 font-semibold text-content text-label-medium w-100pxr"
        >제목</label
      >
      <input
        type="text"
        id="review_title"
        value="${data.brand ? data.brand : ''} ${data.name}"
        disabled
        class="w-full text-paragraph-medium placeholder:leading-[160%] text-gray-400 border border-gray-300 rounded p-5 h-11 outline-none flex items-center self-stretch"
      />`;

      virtualPlaceholder.innerHTML = `
              <p>
                컬리는 믿을 수 있는 후기문화를 함께 만들어가고자 합니다. 식품
                등의 표시광고에 대한 법률을 준수하고자 다음과 같은 부당한
                상품평에 대해서는 별도 고지 없이 임시 대처, 비공개 전환, 삭제,
                적립금 회수 등의 필요한 조치가 취해 질 수 있습니다.
              </p>
              <div>
                <strong class="leading-normal text-label-medium"
                  >후기 작성 시 유의사항</strong
                >
                <ul class="ml-4 list-disc marker:text-10pxr">
                  <li>
                    개인의 주관적인 의견으로 인해 상품의 기능 및 효과에 대하여
                    오해의 소지가 있는 내용
                  </li>
                  <li>
                    식품/건강기능식품과 관련하여 질병의 예방 및 치료,
                    체중감량(다이어트)에 효능효과가 있다는 내용
                  </li>
                  <li>
                    일반 화장품을 기능성화장품의 효능효과가 있다는 내용을 통한
                    오인 표현
                  </li>
                  <li>의약외품을 의약품으로 오인하게 하는 표현</li>
                  <li>
                    생활화학제품을 본래 용도와 다르게 사용하는 내용 및
                    효능효과를 과장하는 내용
                  </li>
                  <li>
                    욕설, 폭력성, 음란성, 상업성 등의 게시물 또는 구매 상품과
                    무관하거나 반복되는 동일 단어나 문장을 사용하여 판매자나
                    다른 이용자의 후기 이용을 방해한다고 판단되는 경우
                  </li>
                  <li>
                    구매한 상품이 아닌 캡쳐 사진, 타인 사진 도용, 포장 박스,
                    퍼플박스, 구매 상품을 구분할 수 없는 전체 사진 등 상품과
                    관련 없는 이미지, 동영상을 사용한 경우
                  </li>
                  <li>
                    본인 또는 타인의 주민등록번호, (휴대)전화번호, 이메일 등
                    개인정보가 포함된 경우
                  </li>
                  <li>
                    그 밖에 상품평으로 인해 다른 회원 또는 제3자에게 피해가
                    가해질 내용
                  </li>
                  <li>
                    작성된 글과 첨부된 멀티미디어 파일 등으로 이루어진 각
                    상품평은 개인의 의견을 반영하므로, 게시된 내용에 대한 모든
                    책임은 작성자에게 있습니다. 또한 비정상적인 방법을 통해
                    후기를 작성하고 적립금을 취득한 경우 작성자에 법적 책임의
                    소지가 있음을 알려드립니다.
                  </li>
                </ul>
                <strong class="text-info-error"
                  >※ 작성된 글과 첨부된 멀티미디어 파일 등으로 이루어진 각
                  상품평은 개인의 의견을 반영하므로, 게시된 내용에 대한 모든
                  책임은 작성자에게 있습니다. 또한 비정상적인 방법을 통해 후기를
                  작성하고 적립금을 취득한 경우 작성자에 법적 책임의 소지가
                  있음을 알려드립니다.</strong
                >
              </div>`;
      secretCheck.innerHTML = ``;

      closeButton();
    });

    inquiryButton.addEventListener('click', () => {
      clickedShowModal();
      updateTextUI();
      const ModalTitle = document.querySelector('.modal_title');
      const ModalProduct = document.querySelector('.modal_product');
      const modalContentTitle = document.querySelector('.modal_content_title');
      const virtualPlaceholder = document.querySelector('.virtual_placeholder');
      const secretCheck = document.querySelector('.secret_check');
      ModalTitle.innerHTML = `
      <h2 class="text-heading-xl font-bold leading-[140%]">상품 문의하기</h2>
      <svg role="상품문의 모달창 닫기" class="cursor-pointer close_button" width="30" height="30">
      <use href="/icon/_sprite.svg#Cancel" />
      </svg>
      `;
      ModalProduct.innerHTML = `
      <img src="${`${imgURL}/${data.main_image}`}" alt="${
        data.name
      }" width="72" height="72" />
      <h3 class="font-semibold text-label-medium">${
        data.brand ? data.brand : ''
      } ${data.name}</h3>
      `;
      modalContentTitle.innerHTML = `<label
      for="review_title"
      class="pt-2 pr-2 font-semibold text-content text-label-medium w-100pxr"
      >제목</label
      >
      <input
      type="text"
      id="review_title"
      placeholder="제목을 입력해 주세요"
      class="w-full text-paragraph-medium placeholder:leading-[160%] border border-gray-300 rounded p-5 h-11 outline-none flex items-center self-stretch"
      />`;
      virtualPlaceholder.innerHTML = `<div>
                <strong class="leading-normal text-label-medium"
                  >상품문의 작성 전 확인해 주세요</strong
                >
                <ul class="ml-4 list-disc marker:text-10pxr">
                  <li>답변은 영업일 기준 2~3일 소요됩니다.</li>
                  <li>
                    해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로
                    이동될 수 있습니다.
                  </li>
                  <li>
                    배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은
                    마이칼리 내 1:1 문의에 남겨주세요.
                  </li>
                </ul>
              </div>

              <div>
                <strong class="leading-normal text-label-medium">제품</strong>
                <ul class="ml-4 list-disc marker:text-10pxr">
                  <li>
                    입고일 : 품절 상품 입고 일이 확정된 경우, 섬네일에 기재되어
                    있습니다. (종 모양을 클릭하여, 재입고 알림 설정 가능)
                  </li>
                  <li>
                    제품 상세정보 : 영양성분 및 함량, 용량, 보관 및 취급 방법 등
                    제품 정보는 상세이미지 또는 상세정보에서 확인 가능합니다.
                  </li>
                </ul>
              </div>

              <div>
                <strong class="leading-normal text-label-medium"
                  >주문취소</strong
                >
                <ul class="ml-4 list-disc marker:text-10pxr">
                  <li>배송 단계별로 주문취소 방법이 상이합니다.</li>
                  <li>
                    [입금확인] 단계 : [마이칼리 > 주문내역 상세페이지] 에서 직접
                    취소 가능
                  </li>
                  <li>[입금확인] 이후 단계 : 고객센터로 문의</li>
                  <li>
                    생산이 시작된 [상품 준비중] 이후에는 취소가 제한되는 점
                    고객님의 양해 부탁드립니다.
                  </li>
                  <li>
                    비회원은 모바일 App 또는 모바일 웹사이트에서 [마이칼리 >
                    비회원 주문 조회 페이지] 에서 취소가 가능합니다.
                  </li>
                  <li>일부 예약상품은 배송 3~4일 전에만 취소 가능합니다.</li>
                </ul>
                <strong class="text-info-error">
                  ※ 주문상품의 부분 취소는 불가능합니다. 전체 주문 취소 후
                  재구매 해주세요.
                </strong>
              </div>

              <div>
                <strong class="leading-normal text-label-medium">배송</strong>
                <ul class="ml-4 list-disc marker:text-10pxr">
                  <li>
                    주문 완료 후 배송 방법(샛별/택배)은 변경이 불가능합니다.
                  </li>
                  <li>배송일 배송시간 지정은 불가능합니다. (예약배송 포함)</li>
                </ul>
                <strong class="text-info-error">
                  ※ 전화번호, 이메일, 주소, 계좌번호 등의 상세 개인정보가 문의
                  내용에 저장되지 않도록 주의해 주시기 바랍니다.
                </strong>
              </div>
      `;
      secretCheck.innerHTML = `
      <fieldset class="flex pl-82pxr pb-22pxr">
        <input
          type="checkbox"
          id="itemSelect2"
          class="input_checkbox_label peer"
        />

        <label
          for="itemSelect2"
          class="flex items-center checkbox_before_label peer-checked:before:bg-[url(/input/checkBox-isChecked.svg)]"
        >
          <span class="block w-87pxr text-paragraph-small leading-[160%]"
            >비밀글로 문의하기</span
          >
        </label>
      </fieldset>
      `;

      closeButton();
    });
  } catch (error) {
    console.error(error);
  }
}
displayProductDetails();

/*--------------------------------------------------------------------------*/
/*    하트 클릭 시, localStorage에 상태( true, false ) 저장하여 .active 구현하기 */
/*--------------------------------------------------------------------------*/

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

const tabListPostions = 1320;
const tabPositions = [1400, 3040, 4380, 5100];

// 모든 active클래스 지우기
function removeIsActiveTab() {
  return tabs.forEach((tab) => {
    tab.classList.remove('is_active_tab');
    tab.setAttribute('aria-selected', false);
  });
}
function setActiveTab(selector) {
  selector.classList.add('is_active_tab');
  selector.setAttribute('aria-selected', true);
}

function scrollingChanged() {
  const scroll = window.scrollY;
  if (scroll >= tabListPostions) {
    tabList.style.top = '56px';

    if (scroll >= tabPositions[0]) {
      removeIsActiveTab();
      setActiveTab(tabs[0]);
    }
    if (scroll >= tabPositions[1]) {
      removeIsActiveTab();
      setActiveTab(tabs[1]);
    }
    if (scroll >= tabPositions[2]) {
      removeIsActiveTab();
      setActiveTab(tabs[2]);
    }
    if (scroll >= tabPositions[3]) {
      removeIsActiveTab();
      setActiveTab(tabs[3]);
    }
  } else {
    removeIsActiveTab();
  }
}
function moveScrollToTab(e) {
  const tabButton = e.target;
  const controlledPanelId = tabButton.getAttribute('aria-controls');

  removeIsActiveTab();
  tabPanel.forEach((panel, index) => {
    if (panel.getAttribute('id') === controlledPanelId) {
      setActiveTab(tabButton);
      window.scrollTo(0, tabPositions[index]);
    }
  });
}
window.addEventListener('scroll', scrollingChanged);
tabList.addEventListener('click', moveScrollToTab);

/* -------------------------------------------------------------------------- */
/*                                   장바구니 담기                              */
/* -------------------------------------------------------------------------- */

const cartButton = document.querySelector('.cart_button');
const CART_URL = import.meta.env.VITE_PH_CART;

let userId = sessionStorage.getItem('userId');
const FILTER_URL = `${CART_URL}?filter=(userId%3D'${userId}'%26%26productId%3D'${productId}')`;

cartButton.addEventListener('click', () => {
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
        if (!postResponse.ok) throw new Error('POST API 요청이 실패했습니다.');
        const postData = await postResponse.json();
      }
    } catch (error) {
      console.error(error);
    }
  }
  updateCart();
});

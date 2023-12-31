// const API = `https://jandi-market.pockethost.io/api/collections/products/records/:id`;
// const imgURL = `https://jandi-market.pockethost.io/api/files/:collectionsID/:id/:fileName`;

const URL = `https://jandi-market.pockethost.io/api/collections/products/records/elp6ix59srmj5io`;
const imgURL = `https://jandi-market.pockethost.io/api/files/n9omag8299xjizq/elp6ix59srmj5io`;

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

fetch(URL)
  .then((response) => {
    if (response.ok === true) {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
    const discountPrice = data.price - (data.price * data.discount) / 100;

    document.title = `${data.name} | 잔디마켓`;

    const renderMainImage = /* html */ `
      <img src="${`${imgURL}/${data.main_image}`}" alt="${
        data.name
      }" width="400" height="514" />
    `;
    const renderProductHeader = /* html */ `
      <h2 class="font-semibold text-label-xl">${data.name}</h2>
      <p class="text-gray-400 text-paragraph-medium">${data.desc}</p>
    `;
    const renderProductPrice = /* html */ `
      <strong class="text-label-xl">
        <span class="text-red-500">${data.discount}%</span>
        <span>${discountPrice.toLocaleString()}</span>
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
      <div class="info_flex">
        <dt class="min-w-32">유통기한</dt>
        <dd>
          <p>${data.expiration_date}</p>
        </dd>
      </div>
      <div class="info_flex">
        <dt class="min-w-32">당도</dt>
        <dd>
          <p>${data.sugar_content} Brix 이상</p>
        </dd>
      </div>
      <div class="info_flex">
        <dt class="min-w-32">안내사항</dt>
        <dd class="font-normal">
          <p>${data.notification}</p>
        </dd>
      </div>
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
  })
  .catch((err) => console.log(err));

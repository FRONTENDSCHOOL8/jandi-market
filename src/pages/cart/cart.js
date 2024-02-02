/* -------------------------------------------------------------------------- */
/*                       장바구니 리스트 카테고리 클릭 시 토글 버튼                        */
/* -------------------------------------------------------------------------- */
const productCategory = document.querySelectorAll('.group_category');

productCategory.forEach(function (category) {
  const CategoryButton = category.querySelector('.list_toggle');
  const cartProductList = category.querySelector('.product_list');

  CategoryButton.addEventListener('click', function () {
    cartProductList.classList.toggle('hidden');
    CategoryButton.classList.toggle('rotate-180');
  });
});

/* -------------------------------------------------------------------------- */
/*                            장바구니에 담긴 상품 데이터 바인딩                          */
/* -------------------------------------------------------------------------- */

const userId = sessionStorage.getItem('userId');
const CART_URL = `${import.meta.env.VITE_PH_CART}`;
const imgURL = `https://jandi-market.pockethost.io/api/files/`;
const categoryRefrigerated = document.querySelector('.category_refrigerated');
const categoryFrozen = document.querySelector('.category_frozen');
const categoryNormal = document.querySelector('.category_normal');
const productRefrigerator = document.querySelector('.product_refrigerated');
const productFrozen = document.querySelector('.product_frozen');
const productNormal = document.querySelector('.product_normal');
const cartNoneList = document.querySelector('.cart_nonelist');

function comma(number) {
  number=(Math.floor(number/10) * 10);
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function beforeComma(text){
  const words = text.split(",");
  let result = "";
  for(let i = 0; i < words.length; i++){
    if(i === words.length - 1){
      words[i] = words[i].slice(0, -1);
    }
    result = result + words[i];
  }
  return result
}


async function cartPage() {
  try {
    const reviewResponse = await fetch(CART_URL);
    if (!reviewResponse.ok) {
      throw new Error('REVIEW API 통신에 실패했습니다.');
    }
    const reviewData = await reviewResponse.json();
    const dataItem = reviewData.items;
    const userCartData = [];

    dataItem.forEach((items) => {
      if (items.userId === userId) {
        userCartData.push({
          productId: items.productId,
          quantity: items.quantity,
        });
      }
    });

    let count = 0;

    for await (const data of userCartData){
      const productURL = `${import.meta.env.VITE_PH_PL}/${data.productId}`;

      const productDataList = await fetch(productURL);
      if (!productDataList.ok) {
        throw new Error("REVIEW API 통신에 실패했습니다.");
      }
      const productDatas = await productDataList.json();

      let {
        id,
        packaging,
        discount,
        price,
        brand,
        name,
        collectionId,
        main_image,
      } = productDatas;

      const discountPrice = price - (price * discount) / 100;

      const template = /* html */ `
        <li class="flex items-center py-5 item">
                      <fieldset class="item_select">
                        <input
                          type="checkbox"
                          name="cartList"
                          id="itemSelect${++count}"
                          class="input_checkbox_nonlabel peer top-17pxr relative z-1"
                        />
                        <label
                          for="itemSelect${count}"
                          class="check_label checkbox_before_nonlabel peer-checked:before:bg-[url(/input/checkBox-isChecked.svg)]"
                        >
                          <span class="sr-only">목록 선택</span>
                        </label>
                      </fieldset>
                      <a href="/src/pages/productDetail/index.html" class="mr-5">
                        <img
                          src="${imgURL}${collectionId}/${id}/${main_image}"
                          alt="${brand}${name}"
                          class="w-60pxr h-78pxr"
                        />
                      </a>
                      <a href="/src/pages/productDetail/index.html" class="product_name mr-5">
                        <span class="block w-345pxr"
                          >${brand}${name}</span
                        >
                      </a>
                      <div class="option_count">
                        <button
                          type="button"
                          class="minus w-30pxr h-30pxr"
                          style="
                            background-image: url(/input/minus-disabled.svg);
                          "
                        >
                          <span class="sr-only">수량 감소</span>
                        </button>
                        <span class="item_count">${data.quantity}</span>
                        <button
                          type="button"
                          class="plus w-30pxr h-30pxr"
                          style="background-image: url(/input/plus.svg)"
                        >
                          <span class="sr-only">수량 증가</span>
                        </button>
                      </div>
                      <div
                        class="flex flex-col items-end font-bold product_price w-130pxr"
                      >
                        <span class="after_discount">${comma(
                          discountPrice * data.quantity
                        )}원</span>
                        <span class="before_discount price_delete"
                          >${price * data.quantity}원</span
                        >
                      </div>
                      <button class="product_delete ml-10pxr">
                        <span class="sr-only">목록 삭제하기</span>
                        <svg
                          role="img"
                          class="category-icon"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                        >
                          <use href="/icon/_sprite.svg#Cancel" />
                        </svg>
                      </button>
                    </li>`;

      if (packaging === "냉동") {
        cartNoneList.classList.add("hidden");
        categoryFrozen.classList.remove("hidden");
        categoryFrozen.classList.add("block");
        productFrozen.insertAdjacentHTML("beforeend", template);
      } else if (packaging === "냉장") {
        cartNoneList.classList.add("hidden");
        categoryRefrigerated.classList.remove("hidden");
        categoryRefrigerated.classList.add("block");
        productRefrigerator.insertAdjacentHTML("beforeend", template);
      } else if (packaging === "상온") {
        cartNoneList.classList.add("hidden");
        categoryNormal.classList.remove("hidden");
        categoryNormal.classList.add("block");
        productNormal.insertAdjacentHTML("beforeend", template);
      }
    }

    const itemCounts = document.querySelectorAll(".item_count");
    const afterDiscount = document.querySelectorAll(".after_discount");
    const beforeDiscount = document.querySelectorAll(".before_discount");

    let value = 0;

    for(let value = 0; value < itemCounts.length; value++){
      const itemCount = itemCounts[value];
      let quantity = Number(itemCount.innerText);

      const minusButton = itemCount.previousElementSibling;
      const plusButton = itemCount.nextElementSibling;

      const discountPrice = Number(beforeComma(afterDiscount[value].innerText) / quantity);
      const beforeDiscountPrice = Number(beforeComma(beforeDiscount[value].innerText) / quantity);

      const nextPrice = minusButton.parentElement.nextElementSibling;
      const changeminusPrice = nextPrice.querySelector('.after_discount');
      const reMinusPrice = nextPrice.querySelector('.before_discount');

      if(discountPrice === beforeDiscountPrice){
        reMinusPrice.classList.add('hidden');
      }

      if(quantity > 1){
        minusButton.style.backgroundImage = 'url(/input/minus.svg)';
        minusButton.disabled = false;
      }

      /**
       * TODO: form 은 지금 만드신 코드 대부분의 역활을 대신해 줍니다.
       * form 의 change 이벤트와 submit 이벤트를 사용했으면 좋았겠습니다.
       */
      // 마이너스 버튼 클릭 이벤트
      function clickMinusButton() {
        // 1이상일 때 감소
        if (quantity > 1) {
          quantity--;
          itemCount.innerText = quantity;
        }
        // 1일 때 disabled
        if (quantity === 1) {
          minusButton.style.backgroundImage = "url(/input/minus-disabled.svg)";
          minusButton.disabled = true;
        }
          changeminusPrice.innerText = `${comma(discountPrice * quantity)}원`;
          reMinusPrice.innerText = `${comma(beforeDiscountPrice * quantity)}원`;

      }

      // 플러스 버튼 클릭 이벤트
      function clickPlusButton() {
        ++quantity;
        itemCount.innerText = quantity;
        minusButton.style.backgroundImage = "url(/input/minus.svg)";
        minusButton.disabled = false;

        changeminusPrice.innerText = `${comma(discountPrice * quantity)}원`;

        reMinusPrice.innerText = `${comma(beforeDiscountPrice * quantity)}원`;
      }

      minusButton.addEventListener("click", clickMinusButton);
      plusButton.addEventListener("click", clickPlusButton);

    };
    /* -------------------------------------------------------------------------- */
    /*                            cart list 전체선택 구현                            */
    /* -------------------------------------------------------------------------- */

    const checkBoxes = document.querySelectorAll('input[name="cartList"]'); // 전체 체크박스
    const itemSelectAll = document.querySelector('input[id="itemAllSelect"]'); // select all 체크박스
    const itemSelectAll2 = document.querySelector('input[id="itemAllSelect2"]'); // select all 하단 체크박스

    // 전체선택 옆 상품 갯수, 체크된 상품 갯수 표시
    const cartProduct = document.querySelectorAll(".item");
    const checkedCount = document.querySelectorAll(".checked_count");
    const allCheckCount = document.querySelectorAll(".all_check_count");

    allCheckCount.forEach((items) => {
      items.innerText = cartProduct.length;
    });

    // 하나라도 풀리면 전체선택 풀리도록
    function unSelectAll(e) {
      if (!e.target.checked) {
        itemSelectAll.checked = false;
        itemSelectAll2.checked = false;
      }

      let check = e.target.checked;
      checkBoxes.forEach((checkbox) => {
        if (checkbox.checked === false) {
          check = false;
        }
      });
      if (check) {
        itemSelectAll.checked = true;
        itemSelectAll2.checked = true;
      }

      // 선택된 체크박스 리스트 수 나오기
      let count = 0;

      checkBoxes.forEach((checkitem) => {
        if (checkitem.checked) {
          count++;
        }
      });
      checkedCount.forEach((item) => {
        item.textContent = count;
      });
    }

    // 전체선택 체크하면 모두 체크되도록
    function selectAll(e) {
      if (e.target.checked) {
        itemSelectAll.checked = true;
        itemSelectAll2.checked = true;

        // 카테고리가 hidden 상태일 때 전체선택 클릭 시 이벤트
        const cartProductList = document.querySelectorAll(".product_list");
        cartProductList.forEach((check) => {
          check.classList.remove("hidden");
        });
      }
      if (!e.target.checked) {
        itemSelectAll.checked = false;
        itemSelectAll2.checked = false;
      }

      checkBoxes.forEach((checkbox) => {
        checkbox.checked = e.target.checked;
      });

      // 전체선택 클릭 시 선택된 수 나오기
      let count = 0;

      checkBoxes.forEach((checkitem) => {
        if (checkitem.checked) {
          count++;
        }
      });
      checkedCount.forEach((item) => {
        item.textContent = count;
      });
    }

    checkBoxes.forEach((checkbox) => {
      checkbox.addEventListener("click", unSelectAll);
    });

    itemSelectAll.addEventListener("click", selectAll);
    itemSelectAll2.addEventListener("click", selectAll);
  } catch {
    (error) => console.log(error);
  }
}

cartPage();

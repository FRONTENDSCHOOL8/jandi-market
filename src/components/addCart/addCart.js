// 클릭했을 때 모달 열리기
export const openModal = (element, className) => {
  element.classList.remove(className);
};

// 취소 버튼 클릭하여 모달 닫기
export const closeModal = (element, className) => {
  element.classList.add(className);
};

/* -------------------------------------------------------------------------- */
/*                               상품 수량 증가, 감소 버튼                              */
/* -------------------------------------------------------------------------- */
const itemCounts = document.querySelectorAll('.item_count');
const minusButtons = document.querySelectorAll('.minus');
const plusButtons = document.querySelectorAll('.plus');

itemCounts.forEach(function (itemCount) {
  itemCount.innerText = '1';
  let quantity = Number(itemCount.innerText);

  const minusButton = itemCount.previousElementSibling;
  const plusButton = itemCount.nextElementSibling;

  // 마이너스 버튼 클릭 이벤트
  function clickMinusButton() {
    // 1이상일 때 감소
    if (quantity > 1) {
      quantity--;
      itemCount.innerText = quantity;
    }
    // 1일 때 disabled
    if (quantity === 1) {
      minusButton.style.backgroundImage = 'url(/input/minus-disabled.svg)';
      minusButton.disabled = true;
    }
  }

  // 플러스 버튼 클릭 이벤트
  function clickPlusButton() {
    quantity++;
    itemCount.innerText = quantity;
    minusButton.style.backgroundImage = 'url(/input/minus.svg)';
    minusButton.disabled = false;
  }

  minusButton.addEventListener('click', clickMinusButton);
  plusButton.addEventListener('click', clickPlusButton);
});

// cart list 전체선택 구현

// 전체 체크박스
const checkBoxes = document.querySelectorAll('input[name="cartList"]');
// select all 체크박스
const itemSelectAll = document.querySelector('input[id="itemAllSelect"]');
// select all 하단 체크박스
const itemSelectAll2 = document.querySelector('input[id="itemAllSelect2"]');

// 하나라도 풀리면 전체선택 풀리도록
function unSelectAll(e)  {
  
  if(!e.target.checked){
    itemSelectAll.checked = false;
    itemSelectAll2.checked = false;
  }
  
  let check = e.target.checked;
  checkBoxes.forEach((checkbox) => {
    if(checkbox.checked === false){
      check = false;
    }
  })
  if(check){
    itemSelectAll.checked = true;
    itemSelectAll2.checked = true;
  }
}

// 전체선택 체크하면 모두 체크되도록
function selectAll(e)  {
  
  if(e.target.checked){
    itemSelectAll.checked = true;
    itemSelectAll2.checked = true;
  }
  
  checkBoxes.forEach((checkbox) => {
    checkbox.checked = e.target.checked;
  })
}
  
checkBoxes.forEach((checkbox) => {
  checkbox.addEventListener("click", unSelectAll)
})

itemSelectAll.addEventListener("click",selectAll);
itemSelectAll2.addEventListener("click",selectAll);



// 상품 수량 증가, 감소 버튼
const itemCounts = document.querySelectorAll(".item_count");
const minusButtons = document.querySelectorAll(".minus");
const plusButtons = document.querySelectorAll(".plus");

itemCounts.forEach(function(itemCount) {
  itemCount.innerText = "1";
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
    if (quantity === 1){
      minusButton.style.backgroundImage = "url(/input/minus-disabled.svg)";
      minusButton.disabled = true;
    }
  };

  // 플러스 버튼 클릭 이벤트
  function clickPlusButton() {
    quantity++;
    itemCount.innerText = quantity;
    minusButton.style.backgroundImage = "url(/input/minus.svg)";
    minusButton.disabled = false;
  };
  
  minusButton.addEventListener('click', clickMinusButton);
  plusButton.addEventListener('click', clickPlusButton);
});



// 장바구니 리스트 카테고리 클릭 시 토글 버튼
const productCategory = document.querySelectorAll('.group_category');

productCategory.forEach(function(category) {
  const CategoryButton = category.querySelector('.list_toggle');
  const cartProductList = category.querySelector('.product_list');
  
  CategoryButton.addEventListener('click', function() {
    cartProductList.classList.toggle('hidden');
  });
});
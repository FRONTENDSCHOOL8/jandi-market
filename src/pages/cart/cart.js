// cart list 전체선택 구현

// 전체 체크박스
const checkBoxes = document.querySelectorAll('input[name="cartList"]');
console.log(checkBoxes);
// 선택된 체크박스
// const selectedBoxes = document.querySelectorAll('input[name="cartList"]:checked');
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
  // 낱개가 모두 선택되면 전체선택 되도록
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
  
  console.log(e.target.checked);
  
}

  
checkBoxes.forEach((checkbox) => {
  checkbox.addEventListener("click", unSelectAll)
})

itemSelectAll.addEventListener("click",selectAll);
itemSelectAll2.addEventListener("click",selectAll);



const itemCounts = document.querySelectorAll(".item_count");
const minusButtons = document.querySelectorAll(".minus");
const plusButtons = document.querySelectorAll(".plus");

itemCounts.forEach(function(itemCount) {
  itemCount.innerText = "1";
  let quantity = Number(itemCount.innerText);

  const minusButton = itemCount.previousElementSibling;
  const plusButton = itemCount.nextElementSibling;

  minusButton.addEventListener('click', function() {
    if (quantity > 1) {
      quantity--;
      itemCount.innerText = quantity;
      console.log("올라감");
      
    }
    if (quantity === 1){
      minusButton.style.backgroundImage = "url(/input/minus-disabled.svg)";
      minusButton.disabled;
      console.log("최소수량");
      
    }
  });

  plusButton.addEventListener('click', function() {
    quantity++;
    itemCount.innerText = quantity;
    if (quantity > 1)
    minusButton.style.backgroundImage = "url(/input/minus.svg)";
    console.log("우왕");
  
  });
  console.log(minusButton.style.backgroundImage);
});

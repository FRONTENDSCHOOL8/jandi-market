// cart list 전체선택 구현

// 전체 체크박스
const checkBoxes = document.querySelectorAll('input[name="cartList"]');
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
  console.log("네ㅔ에?");
  
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
  
  checkBoxes.forEach((checkbox) => {
    checkbox.checked = e.target.checked
  })
  
  console.log(e.target.checked);
  
}

  
checkBoxes.forEach((checkbox) => {
  checkbox.addEventListener("click", unSelectAll)
})

itemSelectAll.addEventListener("click",selectAll);
itemSelectAll2.addEventListener("click",selectAll);


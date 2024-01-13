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
    // categoryDetail[index].classList.toggle('flex');
  });
});

// // arcodianButton에 클릭 이벤트 리스너를 추가합니다.
// arcodianButton.addEventListener('click', function () {
//   // categoryDetail의 hidden 클래스 유무를 토글합니다.
//   categoryDetail.classList.toggle('hidden');
// });

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
      image.src = '/public/input/checkBox-isChecked.svg';
    } else {
      image.src = '/public/input/checkBox.svg';
    }
  });
});

const loginPoint = document.querySelectorAll('.login_point');

function accumulatePoints() {
  console.log(localStorage.getItem('userId'));
  if (localStorage.getItem('userId')) {
    loginPoint[0].textContent = `적립 제외 상품 입니다`;
    loginPoint[1].textContent = `구매 시 0원 적립`;
  }
}
accumulatePoints();

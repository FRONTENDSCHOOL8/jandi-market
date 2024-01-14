export function accumulatePoints(loginPoint, userId) {
  if (userId) {
    loginPoint[0].textContent = `적립 제외 상품 입니다`;
    loginPoint[1].textContent = `구매 시 0원 적립`;
  }
}

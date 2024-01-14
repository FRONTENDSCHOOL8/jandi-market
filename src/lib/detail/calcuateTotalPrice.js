export function calculateTotalPrice(
  productQuantity,
  floorDiscountPrice,
  quantity,
  totalPrice
) {
  productQuantity.textContent = quantity;
  let total = floorDiscountPrice * quantity;
  totalPrice.textContent = total.toLocaleString();
}

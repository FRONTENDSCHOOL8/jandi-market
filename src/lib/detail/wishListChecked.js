/*--------------------------------------------------------------------------*/
/*    하트 클릭 시, localStorage에 상태( true, false ) 저장하여 .active 구현하기 */
/*--------------------------------------------------------------------------*/

export function wishListChecked(productId, wishList, iconHeart) {
  let productWish = JSON.parse(localStorage.getItem(productId) || 'false');
  function updateHeartIcon() {
    iconHeart.setAttribute(
      'href',
      `/public/icon/_sprite.svg#Heart${productWish ? '-active' : ''}`
    );
  }
  updateHeartIcon();

  wishList.addEventListener('click', () => {
    productWish = !productWish;
    wishList.dataset.wish = String(productWish);

    if (productWish) {
      localStorage.setItem(productId, JSON.stringify(productWish));
    } else {
      localStorage.removeItem(productId);
    }

    updateHeartIcon();
  });
}

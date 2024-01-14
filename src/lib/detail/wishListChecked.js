import { updateHeartIcon } from './updateHeartIcon';

export function wishListChecked(productId, wishList, iconHeart) {
  let productWish = JSON.parse(localStorage.getItem(productId) || 'false');

  updateHeartIcon(iconHeart, productWish);
  function wishToggle() {
    productWish = !productWish;
    wishList.dataset.wish = String(productWish);

    if (productWish) {
      localStorage.setItem(productId, JSON.stringify(productWish));
    } else {
      localStorage.removeItem(productId);
    }

    updateHeartIcon(iconHeart, productWish);
  }
  wishList.addEventListener('click', wishToggle);
}

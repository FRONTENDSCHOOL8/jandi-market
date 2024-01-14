export function updateHeartIcon(iconHeart, productWish) {
  iconHeart.setAttribute(
    'href',
    `/public/icon/_sprite.svg#Heart${productWish ? '-active' : ''}`
  );
}

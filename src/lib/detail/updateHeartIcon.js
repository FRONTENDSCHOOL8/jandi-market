import { getNode } from './getNode.js';
export function updateHeartIcon(productWish) {
  const iconHeart = getNode('.icon_heart');

  iconHeart.setAttribute(
    'href',
    `/icon/_sprite.svg#Heart${productWish ? '-active' : ''}`
  );
}

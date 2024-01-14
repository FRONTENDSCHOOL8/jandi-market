export function insertAfterBegin(node, renderTemplate) {
  node = document.querySelector(node);

  node.insertAdjacentHTML('afterbegin', renderTemplate);
}
export function insertBeforeEnd(node, renderTemplate) {
  node = document.querySelector(node);

  node.insertAdjacentHTML('beforeend', renderTemplate);
}

export function insertAfterBegin(node, renderTemplate) {
  node = document.querySelector(node);

  node.insertAdjacentHTML('afterbegin', renderTemplate);
}

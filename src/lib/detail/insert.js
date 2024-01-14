export function insertAfterBegin(node, renderTemplate) {
  if (typeof node === 'string') node = getNode(node);
  return node.insertAdjacentHTML('afterbegin', renderTemplate);
}
export function insertAfterend(node, renderTemplate) {
  if (typeof node === 'string') node = getNode(node);
  return node.insertAdjacentHTML('afterend', renderTemplate);
}
export function insertBeforeBegin(node, renderTemplate) {
  if (typeof node === 'string') node = getNode(node);
  return node.insertAdjacentHTML('beforebegin', renderTemplate);
}
export function insertBeforeEnd(node, renderTemplate) {
  if (typeof node === 'string') node = getNode(node);
  return node.insertAdjacentHTML('beforeend', renderTemplate);
}

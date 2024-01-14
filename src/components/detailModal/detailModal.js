import { getNode } from '/src/lib/detail/index.js';

const dialog = getNode('dialog');
const resetButton = getNode('[type="reset"]');

function closeModal() {
  dialog.close();
  dialog.classList.add('modal_hidden');
}

resetButton.addEventListener('click', closeModal);

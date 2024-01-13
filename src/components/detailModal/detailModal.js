const dialog = document.querySelector('dialog');
const detailModal = document.querySelector('#detailModal');
const resetButton = document.querySelector('[type="reset"]');
const reviewCloseButton = document.querySelector('.review_close_button');

function closeModal() {
  dialog.close();
  dialog.classList.add('modal_hidden');
}

resetButton.addEventListener('click', closeModal);

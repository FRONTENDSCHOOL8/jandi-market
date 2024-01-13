const dialog = document.querySelector('dialog');
const detailModal = document.querySelector('#detailModal');
const resetButton = document.querySelector('[type="reset"]');
const submitButton = document.querySelector('[type="submit"]');
const reviewCloseButton = document.querySelector('.review_close_button');

function closeModal() {
  dialog.close();
  dialog.classList.add('modal_hidden');
}
resetButton.addEventListener('click', closeModal);
reviewCloseButton.addEventListener('click', closeModal);

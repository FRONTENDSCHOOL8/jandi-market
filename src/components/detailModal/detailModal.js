const dialog = document.querySelector('dialog');
const resetButton = document.querySelector('[type="reset"]');

function closeModal() {
  dialog.close();
  dialog.classList.add('modal_hidden');
}

resetButton.addEventListener('click', closeModal);

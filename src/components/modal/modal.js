export const changeMessage = (newMessage) => {
  const messageElement = document.getElementById('message');
  messageElement.textContent = newMessage;
};

export const closeMessageModal = (closeMessage) => {
  const messageBox = document.querySelector('#modal_box');
  const closeButton = document.querySelector('#close_modal');
  const modal = document.querySelector('dialog');

  changeMessage(closeMessage);

  closeButton.addEventListener('click', () => {
    modal.close();
    messageBox.classList.add('hidden');
  });
};

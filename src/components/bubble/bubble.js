export const changeBubbleMessage = async (
  COLLECTIONS_ID,
  productId,
  newMessage
) => {
  try {
    const IMG_URL = `${
      import.meta.env.VITE_PH_IMG
    }/${COLLECTIONS_ID}/${productId}`;
    const URL = `${import.meta.env.VITE_PH_PL}/${productId}`;

    const response = await fetch(URL);
    if (!response.ok) throw new Error('API 호출에 실패했습니다.');
    const data = await response.json();

    const messageElement = document.querySelector('#bubble_message');
    const bubbleImage = document.querySelector('.bubble_image');
    const bubbleProductName = document.querySelector('.bubble_product_name');

    const name = `${data.brand} ${data.name}`;
    bubbleImage.src = `${IMG_URL}/${data.main_image}`;
    bubbleImage.alt = name;
    bubbleProductName.textContent = name;
    messageElement.textContent = newMessage;
  } catch (error) {
    console.error(error);
  }
};

export const closeBubbleMessageModal = (
  COLLECTIONS_ID,
  productId,
  closeMessage
) => {
  const messageBox = document.querySelector('#addBubble');

  changeBubbleMessage(COLLECTIONS_ID, productId, closeMessage);
  messageBox.classList.remove('hidden');

  setTimeout(() => {
    messageBox.classList.add('hidden');
  }, 2000);
};

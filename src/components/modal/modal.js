export default function changeMessage(newMessage) {
  const messageElement = document.getElementById('message');
  messageElement.textContent = newMessage;
}

const addCartModal = document.querySelector("#addCartModal");
const closeModalBtn = document.querySelector("#closeModal");

// 클릭했을 때 모달 열리기
function openModal() {
  console.log("열려라 모달");
  addCartModal.classList.remove("modal_hidden"); 
}

// 취소 버튼 클릭하여 모달 닫기
function closeModal() {
  console.log("닫혀라 모달");
  addCartModal.classList.add("modal_hidden"); 
}

closeModalBtn.addEventListener("click", closeModal);

function setDocumentTitle(title) {
  document.title = title;
}
setDocumentTitle('회원가입 - 잔디마켓');

const addressFind = document.querySelector('#address_find');

function findAddress() {
  new daum.Postcode({
    oncomplete: function (data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
      // 예제를 참고하여 다양한 활용법을 확인해 보세요.
    },
  }).open();
}

window.onload = function () {
  var dateInput = document.getElementById('birthday');
  dateInput.addEventListener('click', function (e) {
    this.focus(e);
  });
};

addressFind.addEventListener('click', findAddress);

const birthday = document.querySelector('#birthday');

const getBirth = (e) => {
  const value = e.target.value;
  console.log(value);
};

birthday.addEventListener('input', getBirth);

function setDocumentTitle(title) {
  document.title = title;
}
setDocumentTitle('회원가입 - 잔디마켓');

const URL = `https://jandi-market.pockethost.io/api/collections/users/records/`;

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const doubleCheckPassword = document.querySelector('#check_password');
const name = document.querySelector('#name');
const phone = document.querySelector('#phone');

const addressFind = document.querySelector('#address_find');
const birthday = document.querySelector('#birthday');

fetch(URL)
  .then((response) => {
    if (response.ok === true) {
      return response.json();
    }
  })
  .then((data) => {
    const usersData = data.items;
    console.log(usersData);
  });

let emailPass = false;

const checkEmail = (e) => {
  const value = e.target.value;
  const emailError = document.querySelector('#email_error');
  if (emailReg(value)) {
    emailError.classList.remove('error');
    emailError.classList.add('hidden');
    s;
  } else {
    emailError.classList.remove('hidden');
    emailError.classList.add('error');
  }
};

const checkPassword = (e) => {
  const value = e.target.value;
  const passwordError = document.querySelector('#password_error');
  if (pwReg(value)) {
    passwordError.classList.remove('error');
    passwordError.classList.add('hidden');
  } else {
    passwordError.classList.remove('hidden');
    passwordError.classList.add('error');
  }
};

const confirmPassword = (e) => {
  const value = e.target.value;
  const passwordError = document.querySelector('#check_password_error');
  if (value === password.value) {
    passwordError.classList.remove('error');
    passwordError.classList.add('hidden');
  } else {
    passwordError.classList.remove('hidden');
    passwordError.classList.add('error');
  }
};

const checkName = (e) => {
  const value = e.target.value;
};

email.addEventListener('input', checkEmail);
password.addEventListener('input', checkPassword);
doubleCheckPassword.addEventListener('input', confirmPassword);

function findAddress() {
  new daum.Postcode({
    oncomplete: function (data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
      // 예제를 참고하여 다양한 활용법을 확인해 보세요.
    },
  }).open();
}

addressFind.addEventListener('click', findAddress);

const getBirth = (e) => {
  const value = e.target.value;
};
birthday.addEventListener('input', getBirth);

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

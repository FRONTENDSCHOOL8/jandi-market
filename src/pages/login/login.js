function setDocumentTitle(title) {
  document.title = title;
}
setDocumentTitle('로그인 - 잔디마켓');

const loadUsersData = import.meta.env.VITE_PH_USERS;

let usersData;

// 데이버베이스에 있는 유저 정보 가져오기
fetch(loadUsersData)
  .then((response) => {
    if (response.ok === true) {
      return response.json();
    }
  })
  .then((data) => {
    usersData = data.items;
  });

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginButton = document.querySelector('#login');
const goToRegister = document.querySelector('#go_register');

let emailValue = '';
let passwordValue = '';

const handleCheckEmail = (e) => {
  emailValue = e.target.value;
};

const handleCheckPassword = (e) => {
  passwordValue = e.target.value;
};

// 데이터베이스의유저 이메일과 비밀번호를 입력 값과 비교해 로그인 시도
const handleLogin = () => {
  const user = usersData.find(
    (user) => user.email === emailValue && user.password === passwordValue
  );
  if (user) {
    alert('로그인 성공!');
    // 로그인 성공 시 로컬 스토리지에 사용자의 ID 값을 저장 후 메인 페이지로 이동
    sessionStorage.setItem('userId', user.id);
    window.location.href = '/';
  } else {
    alert('로그인 실패: 이메일 또는 비밀번호가 잘못되었습니다.');
  }
};

// password 입력 창에서 enter key를 사용해 로그인 시도 가능
password.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleLogin();
  }
});

email.addEventListener('change', handleCheckEmail);
password.addEventListener('change', handleCheckPassword);
loginButton.addEventListener('click', handleLogin);

//회원가입 버튼 클릭시 회원가입 페이지로 이동
goToRegister.addEventListener('click', () => {
  window.location.href = '/src/pages/register/';
});

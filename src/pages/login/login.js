function setDocumentTitle(title) {
  document.title = title;
}
setDocumentTitle('로그인 - 잔디마켓');

let usersData;

// 데이버베이스에 있는 유저 정보 가져오기
const getUsersData = async () => {
  const response = await fetch(import.meta.env.VITE_PH_USERS);
  if (response.ok) {
    const data = await response.json();
    usersData = data.items;
  }
};
getUsersData();

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

const errorMessage = document.querySelector('#login_error');

const closeModal = () => {
  const closeButton = document.querySelector('#close_modal');
  const errorModal = document.querySelector('dialog');

  closeButton.addEventListener('click', (e) => {
    console.log(e.target);
    errorModal.close();
    errorMessage.classList.add('hidden');
  });
};

// 데이터베이스의유저 이메일과 비밀번호를 입력 값과 비교해 로그인 시도
const handleLogin = () => {
  // 사용자 데이터가 아직 로드되지 않았으면 로그인을 시도하지 않음
  if (!usersData) {
    alert('데이터가 아직 로드되지 않았습니다. 잠시 후 다시 시도해주세요.');
    return;
  }

  const user = usersData.find(
    (user) => user.email === emailValue && user.password === passwordValue
  );
  if (user) {
    // 로그인 성공 시 로컬 스토리지에 사용자의 ID 값을 저장 후 메인 페이지로 이동
    sessionStorage.setItem('userId', user.id);
    window.location.href = '/';
  } else {
    errorMessage.classList.remove('hidden');
    closeModal();
  }
};

// password 입력 창에서 enter key를 사용해 로그인 시도 가능
password.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleLogin();
  }
});

email.addEventListener('input', handleCheckEmail);
password.addEventListener('input', handleCheckPassword);
loginButton.addEventListener('click', handleLogin);

//회원가입 버튼 클릭시 회원가입 페이지로 이동
goToRegister.addEventListener('click', () => {
  window.location.href = '/src/pages/register/';
});

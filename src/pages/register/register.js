function setDocumentTitle(title) {
  document.title = title;
}
setDocumentTitle('회원가입 - 잔디마켓');

const URL = `https://jandi-market.pockethost.io/api/collections/users/records/`;

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const doubleCheckPassword = document.querySelector('#check_password');
const nameInput = document.querySelector('#name');
const phone = document.querySelector('#phone');
const birthday = document.querySelector('#birthday');
const gender = document.querySelector('#gender_list');

let userData = {
  email: '',
  password: '',
  name: '',
  phone: '',
  postNo: '',
  address: '',
  addressDtl: '',
  gender: '',
  birth: '',
};

// 중복 체크 할 유저 정보 가져오기
let usersData; // 데이터베이스에서 가져온 유저들 데이터
fetch(URL)
  .then((response) => {
    if (response.ok === true) {
      return response.json();
    }
  })
  .then((data) => {
    usersData = data.items;
  });

//유효성체크 가능한 재사용 함수
const isValidField = (validator, errorMessageEl, valueKey) => {
  return (e) => {
    let value = e.target.value;
    const errorElement = document.querySelector(errorMessageEl);
    if (validator(value)) {
      errorElement.classList.remove('error');
      errorElement.classList.add('hidden');
      userData[valueKey] = value;
    } else {
      errorElement.classList.remove('hidden');
      errorElement.classList.add('error');
      userData[valueKey] = '';
    }
  };
};

// 회원가입 입력값 유효성 체크 및 각 변수에 value 저장
const handleEmail = isValidField(emailReg, '#email_error', 'email');
const handlePassword = isValidField(pwReg, '#password_error', 'password');
const handleConfirmPassword = isValidField(
  (value) => value === password.value,
  '#check_password_error',
  'doubleCheckPassword'
);
const handleName = isValidField(
  (value) => value.trim().length > 0,
  '#name_error',
  'name'
);
const handlePhone = isValidField(
  (value) => value.length >= 10 && value.length < 12,
  '#phone_error',
  'phone'
);
const handleBirth = (e) => {
  const value = e.target.value;
  userData[birth] = value;
};
const handleGender = (e) => {
  const value = e.target.id;
  userData[gender] = value;
};

gender.addEventListener('click', handleGender);

const emailButton = document.querySelector('#is_duplicated_email');
const phoneButton = document.querySelector('#is_duplicated_phone');

const checkDuplication = (value) => {
  return () => {
    const isDuplicated = usersData.some(
      (user) => user[value] === userData[value]
    );
    if (isDuplicated) {
      alert(`이미 사용중인 ${value}입니다.`);
    } else {
      alert(`사용 가능한 ${value}입니다.`);
    }
  };
};

// 이메일과 휴대폰 중복 체크 함수
const checkEmailDuplication = checkDuplication('email');
const checkPhoneDuplication = checkDuplication('phone');

// 이메일과 휴대폰 중복 체크 이벤트 리스너
emailButton.addEventListener('click', checkEmailDuplication);
phoneButton.addEventListener('click', checkPhoneDuplication);

email.addEventListener('input', handleEmail);
password.addEventListener('input', handlePassword);
doubleCheckPassword.addEventListener('input', handleConfirmPassword);
nameInput.addEventListener('input', handleName);
phone.addEventListener('input', handlePhone);
birthday.addEventListener('input', handleBirth);

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// 주소 찾기
const addressFind = document.querySelector('#address_find');

const addAddressValue = () => {
  const addressBox = document.querySelector('#address_box');

  addressFind.classList.add('hidden');
  addressFind.classList.remove('flex_center');

  const templete = /* html */ `
    <label for="postcodeValue" class="sr-only">우편번호</label>
    <input
      type="text"
      id="postcodeValue"
      class="mt-2 w-190pxr h-11 px-4 py-0.5 border rounded border-gray-300 leading-6 outline-none"
      placeholder="우편번호"
      required
    /><br />
    <label for="addressValue" class="sr-only">주소</label>
    <input
      type="text"
      id="addressValue"
      class="input_style mt-2"
      placeholder="주소"
      required
    /><br />
    <div class="flex gap-2">
      <label for="detailAddressValue" class="sr-only"
        >상세주소</label
      >
      <input
        type="text"
        id="detailAddressValue"
        class="mt-2 h-11 px-4 py-0.5 border rounded border-gray-300 leading-6 outline-none"
        placeholder="상세주소"
        required
      />
      <label for="extraAddressValue" class="sr-only"
        >참고항목</label
      >
      <input
        type="text"
        id="extraAddressValue"
        class="mt-2 w-210pxr h-11 px-4 py-0.5 border rounded border-gray-300 leading-6 outline-none"
        placeholder="참고항목"
      />
    </div>
    `;
  addressBox.insertAdjacentHTML('afterbegin', templete);

  //detailAddressValue를 가진 요소가 동적으로 추가되니 insert된 후에
  // DOM 요소를 찾아 이벤트 실행
  const detailAddress = document.querySelector('#detailAddressValue');
  detailAddress.addEventListener('input', handleDetailAddress);
};

function findAddress() {
  addAddressValue();
  let width = 500; //팝업의 너비
  let height = 600; //팝업의 높이
  new daum.Postcode({
    width,
    height,
    oncomplete: function (data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

      // 각 주소의 노출 규칙에 따라 주소를 조합한다.
      // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
      let address = ''; // 주소 변수
      let extraAddress = ''; // 참고항목 변수
      //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
      if (data.userSelectedType === 'R') {
        // 사용자가 도로명 주소를 선택했을 경우
        address = data.roadAddress;
      } else {
        // 사용자가 지번 주소를 선택했을 경우(J)
        address = data.jibunAddress;
      }

      // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
      if (data.userSelectedType === 'R') {
        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
          extraAddress += data.bname;
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== '' && data.apartment === 'Y') {
          extraAddress +=
            extraAddress !== '' ? ', ' + data.buildingName : data.buildingName;
        }
        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraAddress !== '') {
          extraAddress = ' (' + extraAddress + ')';
        }
        // 조합된 참고항목을 해당 필드에 넣는다.
        document.getElementById('extraAddressValue').value = extraAddress;
      } else {
        document.getElementById('extraAddressValue').value = '';
      }
      //우편번호와 주소 정보를 해당 필드에 넣는다.
      document.getElementById('postcodeValue').value = data.zonecode;
      document.getElementById('addressValue').value = address;
      userData[poshNo] = data.zonecode;
      userData[address] = address;
      // 커서를 상세주소 필드로 이동한다.
      document.getElementById('detailAddressValue').focus();
    },
  }).open({
    left: window.screen.width / 2 - width / 2,
    top: window.screen.height / 2 - height / 2,
  });
}
addressFind.addEventListener('click', findAddress);

const handleDetailAddress = (e) => {
  const value = e.target.value;
  userData[addressDtl] = value;
};

// 모든 체크박스를 선택
let checkboxes = document.querySelectorAll('input[type=checkbox]');
// '전체 동의' 체크박스를 선택
let allCheckbox = document.getElementById('all');

// '전체 동의' 체크박스에 클릭 이벤트 리스너 추가
allCheckbox.addEventListener('click', (e) => {
  // '전체 동의' 체크박스의 체크 상태에 따라 모든 체크박스의 체크 상태를 설정
  checkboxes.forEach((checkbox) => {
    checkbox.checked = e.target.checked;
  });
});

// 나머지 체크박스들에 클릭 이벤트 리스너 추가
checkboxes.forEach((checkbox) => {
  if (checkbox !== allCheckbox) {
    checkbox.addEventListener('click', () => {
      // 체크박스가 모두 체크되었는지 확인
      let isAllChecked = Array.from(checkboxes)
        .filter((checkbox) => checkbox !== allCheckbox)
        .every((checkbox) => checkbox.checked);

      // '전체 동의' 체크박스의 체크 상태를 업데이트
      allCheckbox.checked = isAllChecked;
    });
  }
});

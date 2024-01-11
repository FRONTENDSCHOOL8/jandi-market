const usersData = import.meta.env.VITE_PH_USERS;

fetch(usersData)
  .then((response) => {
    if (response.ok === true) {
      return response.json();
    }
  })
  .then((data) => {
    data;
  });
const goToRegister = document.querySelector('#go_register');

goToRegister.addEventListener('click', () => {
  window.location.href = '/src/pages/register/';
});

// header.html 파일을 가져와서 header 요소에 삽입
fetch('/src/components/header/header.html')
  .then((response) => response.text())
  .then((html) => {
    const headerElement = document.querySelector('#header');
    headerElement.innerHTML = html;
    return import('/src/components/header/header.js');
  })
  .catch((error) => {
    console.error(error);
  });

// footer.html 파일을 가져와서 footer 요소에 삽입
fetch('/src/components/footer/footer.html')
  .then((response) => response.text())
  .then(async (html) => {
    const footerElement = document.querySelector('#footer');
    footerElement.innerHTML = html;
    return import('/src/components/footer/footer.js');
  })
  .catch((error) => {
    console.error(error);
  });

  // addCart.html 파일을 가져와서 addCart 요소에 삽입
fetch('/src/components/addCart/addCart.html')
.then((response) => response.text())
.then(async (html) => {
  const addCartElement = document.querySelector('#addCart');
  addCartElement.innerHTML = html;
  return import('/src/components/addCart/addCart.js');
})
.catch((error) => {
  console.error(error);
});
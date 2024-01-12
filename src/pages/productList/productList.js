const productNum = document.querySelector('.product-container');
const products = productNum.querySelectorAll('li');
console.log(products);
const productTotal = document.querySelector('.product-total');

productTotal.textContent = `총 ${products.length}건`;

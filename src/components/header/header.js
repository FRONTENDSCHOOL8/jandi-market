import '/src/styles/tailwind.css';

const topBanner = document.querySelector('.top_banner');

const closeBanner = (e) => {
  e.preventDefault();

  const closeButton = e.target.closest('button');

  if (closeButton) {
    topBanner.style.transform = 'translateY(-100%)';
    topBanner.style.transition = 'transform .2s ease-out';
    topBanner.addEventListener('transitionend', () => {
      topBanner.style.display = 'none';
    });
  }
};

topBanner.addEventListener('click', closeBanner);

const menuBox = document.getElementById('menu_list_box');
const menuButton = document.getElementById('menu_button');
const menuList = document.getElementById('menu_list');

menuBox.addEventListener('mouseover', () => {
  menuList.classList.remove('menu_hidden');
});

menuBox.addEventListener('mouseout', (e) => {
  const isInside = menuButton.contains(e.currentTarget);
  if (!isInside) {
    menuList.classList.add('menu_hidden');
  }
});

menuList.addEventListener('mouseover', () => {
  menuList.classList.remove('menu_hidden');
});

menuList.addEventListener('mouseout', (e) => {
  const isInside = menuButton.contains(e.currentTarget);
  if (!isInside) {
    menuList.classList.add('menu_hidden');
  }
});

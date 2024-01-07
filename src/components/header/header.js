const topBanner = document.querySelector('.top_banner');

const closeBanner = (e) => {
  e.preventDefault();

  const closeButton = e.target.closest('button');

  if (closeButton) {
    topBanner.style.transform = 'translateY(-100%)';
    topBanner.style.transition = 'transform .3s ease-out';
  }
};

topBanner.addEventListener('click', closeBanner);

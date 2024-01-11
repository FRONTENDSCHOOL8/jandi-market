// 리뷰 섹션
const reviewTitle = document.querySelectorAll('.review_title');
const reviewContents = document.querySelectorAll('.review_content');

const handleClickReviewTitle = (title) => {
  const content = title.nextElementSibling;
  const isHidden = !content.hidden;

  // 모든 리뷰 내용을 숨깁니다.
  reviewContents.forEach((eachContent) => {
    eachContent.hidden = true;
    eachContent.setAttribute('aria-hidden', 'true');
  });

  // 모든 리뷰 제목의 aria-expanded를 false로 설정합니다.
  reviewTitle.forEach((eachTitle) => {
    eachTitle.setAttribute('aria-expanded', 'false');
  });

  // 클릭된 리뷰 내용의 hidden 상태를 반전시킵니다.
  content.hidden = isHidden;
  content.setAttribute('aria-hidden', String(isHidden));

  // 클릭된 리뷰 제목의 aria-expanded를 반전시킵니다.
  title.setAttribute('aria-expanded', String(!isHidden));
};

reviewTitle.forEach((title) => {
  title.addEventListener('click', () => handleClickReviewTitle(title));
});

// 문의 섹션
const inquiryTitle = document.querySelectorAll('.inquiry_title');
const inquiryContents = document.querySelectorAll('.inquiry_content');

const handleClickInquiryTitle = (title) => {
  const content = title.nextElementSibling;
  const isHidden = !content.hidden;

  // 모든 문의 내용을 숨깁니다.
  inquiryContents.forEach((eachContent) => {
    eachContent.hidden = true;
    eachContent.setAttribute('aria-hidden', 'true');
    eachContent.classList.remove('flex_column');
  });

  // 모든 문의 제목의 aria-expanded를 false로 설정합니다.
  inquiryTitle.forEach((eachTitle) => {
    eachTitle.setAttribute('aria-expanded', 'false');
  });

  // 클릭된 문의 내용의 hidden 상태를 반전시킵니다.
  content.hidden = isHidden;
  content.setAttribute('aria-hidden', String(isHidden));

  // 클릭된 문의 제목의 aria-expanded를 반전시킵니다.
  title.setAttribute('aria-expanded', String(!isHidden));

  // 클릭된 문의 내용의 클래스를 조정합니다.
  if (!content.hidden) {
    content.classList.add('flex_column');
  }
};

inquiryTitle.forEach((title) => {
  title.addEventListener('click', () => handleClickInquiryTitle(title));
});

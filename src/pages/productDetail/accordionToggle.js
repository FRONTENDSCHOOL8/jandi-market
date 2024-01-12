// 리뷰 섹션
const reviewTitle = document.querySelectorAll('.review_title');
const reviewContents = document.querySelectorAll('.review_content');
// 문의 섹션
const inquiryTitle = document.querySelectorAll('.inquiry_title');
const inquiryContents = document.querySelectorAll('.inquiry_content');

function toggleContent(titles, contents) {
  titles.forEach((title) => {
    title.addEventListener('click', () => {
      const content = title.nextElementSibling;
      let hidden = !content.hidden;
      contents.forEach((content) => {
        content.hidden = true;
        content.setAttribute('aria-hidden', true);
        titles.forEach((title) => title.setAttribute('aria-expanded', false));
        contents.forEach((content) => content.classList.remove('flex_column'));
      });

      content.hidden = hidden;
      content.setAttribute('aria-hidden', hidden);
      if (title === inquiryTitle) content.classList.add('flex_column');
      title.setAttribute('aria-expanded', !hidden);
    });
  });
}
toggleContent(reviewTitle, reviewContents);
toggleContent(inquiryTitle, inquiryContents);

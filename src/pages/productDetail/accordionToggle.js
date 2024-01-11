// 리뷰 섹션
const reviewTitle = document.querySelectorAll('.review_title');
const reviewContents = document.querySelectorAll('.review_content');
// 문의 섹션
const inquiryTitle = document.querySelectorAll('.inquiry_title');
const inquiryContents = document.querySelectorAll('.inquiry_content');

// reviewTitle.forEach((title) => {
//   title.addEventListener('click', () => {
//     const content = title.nextElementSibling;
//     let hidden = !content.hidden;
//     console.log(hidden);
//     reviewContents.forEach((content) => {
//       // 클릭하면 모든 hidden 나타남
//       content.hidden = true;
//       // 클릭하면 모든 aria-hidden true
//       content.setAttribute('aria-hidden', true);
//       if () {
//        // 클릭하면 classList remove flex_column
//       }
//       // 클릭하면 모든 제목 aria-expanded false
//       reviewTitle.forEach((title) => {
//         title.setAttribute('aria-expanded', false);
//       });
//     });

//     // 토글
//     // 클릭하면 hidden 사라짐
//     content.hidden = hidden;
//     // 클릭하면 aria-hidden false
//     content.setAttribute('aria-hidden', hidden);
//     // 클릭하면 제목 aria-expanded true
//     title.setAttribute('aria-expanded', !hidden);
//   });
// });

function toggleContent(titles, contents) {
  titles.forEach((title) => {
    title.addEventListener('click', () => {
      const content = title.nextElementSibling;
      console.log(content);
      let hidden = !content.hidden;
      contents.forEach((content) => {
        // 클릭하면 모든 hidden 나타남
        content.hidden = true;
        // 클릭하면 모든 aria-hidden true
        content.setAttribute('aria-hidden', true);
        // 클릭하면 모든 제목 aria-expanded false
        titles.forEach((title) => {
          title.setAttribute('aria-expanded', false);
        });
        // 클릭하면 classList remove flex_column
        contents.forEach((content) => {
          content.classList.remove('flex_column');
        });
      });

      // 토글
      // 클릭하면 hidden 사라짐
      content.hidden = hidden;
      // 클릭하면 aria-hidden false
      content.setAttribute('aria-hidden', hidden);
      console.log(hidden);
      if (title === inquiryTitle) {
        // 클릭하면 classList add flex_column
        content.classList.add('flex_column');
      }
      // 클릭하면 제목 aria-expanded true
      title.setAttribute('aria-expanded', !hidden);
    });
  });
}

toggleContent(reviewTitle, reviewContents);
toggleContent(inquiryTitle, inquiryContents);

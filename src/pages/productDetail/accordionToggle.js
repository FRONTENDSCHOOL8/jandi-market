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
      contents.forEach((content, index) => {
        content.hidden = true;
        content.setAttribute('aria-hidden', true);
        content.classList.remove('flex_column');
        titles[index].setAttribute('aria-expanded', false);
      });

      content.hidden = hidden;
      content.setAttribute('aria-hidden', hidden);
      if (!hidden) {
        content.classList.add('flex_column');
      }
      title.setAttribute('aria-expanded', !hidden);
    });
  });
}

/* -------------------------------------------------------------------------- */
/*                                     비밀글                                  */
/* -------------------------------------------------------------------------- */
function secretCheck() {
  inquiryTitle.forEach((title) => {
    if (title.dataset.secret == 'true') {
      let content = title.nextElementSibling;

      title.innerHTML = `
      <button class="flex font-semibold border-b border-b-gray-100">
        <div class="text-gray-400 inquiry_table_subject"> 
        비밀글입니다.
          <span>
          <svg width="12" height="14" aria-hidden="true">
            <use href="/icon/_sprite.svg#Lock"></use>
          </svg>
        </span> 
      </div>
      <div class="table_width100">김*식</div>
      <time datetime="2022-11-11" class="table_width100">
        2022.11.11
      </time>
      <div class="text-center text-primary py-17pxr w-100pxr">
        답변완료
      </div>
    </button>
      `;

      content.style.display = 'none';
      content.setAttribute('aria-hidden', true);
      content.hidden = true;
      content.classList.remove('flex_column');
      title.setAttribute('aria-expanded', false);

      // 만약 로그인 한 사람이 본인이거나 어드민일 경우 다 보임
    }
  });
}
secretCheck();
toggleContent(reviewTitle, reviewContents);
toggleContent(inquiryTitle, inquiryContents);

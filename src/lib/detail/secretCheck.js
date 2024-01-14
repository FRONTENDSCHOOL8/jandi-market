/* -------------------------------------------------------------------------- */
/*                                     비밀글                                  */
/* -------------------------------------------------------------------------- */
export function secretCheck(inquiryTitle, inquiry, userName, createDay) {
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
              <div class="table_width100">${userName}</div>
              <time datetime="${createDay}" class="table_width100">
                ${createDay}
              </time>
                  ${
                    inquiry.answerStatus
                      ? `<div class="table_width100 text-primary font-semibold">
                              답변 완료
                            </div>`
                      : `<div class="table_width100">
                              답변 대기
                            </div>`
                  }
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

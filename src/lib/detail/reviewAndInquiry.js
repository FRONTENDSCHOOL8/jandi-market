import { accordion } from './accordion';
import { insertBeforeEnd } from './insert';

export async function reviewDataRender(productId) {
  const reviewList = document.querySelector('.review_list');
  const reviewCount = document.querySelector('.review_count');
  const tabReviews = document.querySelector('#tab_reviews');
  const REVIEW_URL = import.meta.env.VITE_PH_REVIEW;
  const USER_URL = import.meta.env.VITE_PH_USERS;
  const REVIEW_FILTER_URL = `${REVIEW_URL}?filter=(productId%3D'${productId}')`;

  const reivewGetResponse = await fetch(REVIEW_FILTER_URL);

  if (!reivewGetResponse.ok) throw new Error('REVIEW API 통신에 실패했습니다.');

  const data = await reivewGetResponse.json();

  reviewCount.textContent = `총 ${data.items.length}개`;
  tabReviews.textContent = `후기 ( ${data.items.length} )`;
  const initialTemplate = /* html */ `
    <div
      class="items-center gap-5 py-10 border-b border-b-gray-100 flex_column"
    >
      <svg
        class="text-gray-100"
        width="48"
        height="48"
        aria-hidden="true"
      >
        <use href="/icon/_sprite.svg#Notice"></use>
        </svg>
        <p>따뜻한 첫 후기를 기다리고 있어요.</p>
        </div>`;
  await data.items.forEach(async (review) => {
    const createDay = String(review.created).slice(0, 10);

    const userResponse = await fetch(`${USER_URL}/${review.userId}`);
    if (!userResponse.ok) throw new Error('USER API 통신에 실패했습니다.');
    const userData = await userResponse.json();
    const userName = `
    ${userData.name[0]}${'*'.repeat(userData.name.length - 2)}${
      userData.name[2]
    }`;

    const reviewTemplate = /* html */ `
      <div class="review_user_post_structure">
        <div class="review_member">
          <span class="best_badge">베스트</span>
          <span class="purple_badge">퍼플</span>
          <span class="self-start">${userName}</span>
        </div>
        <div class="review_user_post_contents">
          <h4 class="text_gray_semibold">${review.title}</h4>
          <p class="leading_160">
            ${review.contents}
          </p>
          <p class="text_gray_semibold">${createDay}</p>
        </div>
      </div>`;
    if (data.items.length === 0) {
      reviewList.innerHTML = initialTemplate;
    } else {
      insertBeforeEnd('.review_list', reviewTemplate);
    }
  });
}

export async function inquiryDataRender(productId) {
  const inquiryList = document.querySelector('.inquiry_list');
  const INQUIRY_URL = import.meta.env.VITE_PH_INQUIRY;
  const USER_URL = import.meta.env.VITE_PH_USERS;
  const INQUIRY_FILTER_URL = `${INQUIRY_URL}?filter=(productId%3D'${productId}')`;

  const response = await fetch(INQUIRY_FILTER_URL);
  if (!response.ok)
    throw new Error(`${INQUIRY_FILTER_URL} API 호출에 실패했습니다.`);

  const inqurityData = await response.json();
  const initialTemplate = /* html */ `
    <div
      class="items-center gap-5 py-10 border-b border-b-gray-100 flex_column"
    >
      <p>등록된 문의가 없습니다.</p>
  </div>`;
  inquiryList.innerHTML = '';

  for (const inquiry of inqurityData.items) {
    const createDay = String(inquiry.created).slice(0, 10);
    const answerDay = String(inquiry.answerDay).slice(0, 10);

    const userResponse = await fetch(`${USER_URL}/${inquiry.userId}`);
    if (!userResponse.ok) throw new Error('USER API 통신에 실패했습니다.');
    const userData = await userResponse.json();
    const userName = `
    ${userData.name[0]}${'*'.repeat(userData.name.length - 2)}${
      userData.name[2]
    }`;

    const inquiryTemplate = /* html */ `<div>
                <h2
                  class="inquiry_title"
                  aria-expanded="false"
                  data-secret="${inquiry.secret}"
                >
                  <button class="flex font-semibold border-b border-b-gray-100">
                    <div class="inquiry_table_subject">${inquiry.title}</div>
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
                </h2>
                <div class="inquiry_content" aria-hidden="true" hidden>
                  <div class="question inquiry_contents_layout">
                    <span>
                      <svg width="24" height="24" aria-hidden="true">
                        <use href="/icon/_sprite.svg#Question"></use>
                      </svg>
                    </span>
                    <p class="inquiry_contents_question">
                      ${inquiry.question}
                    </p>
                  </div>
                  <div class="answer inquiry_contents_layout">
                    <span>
                      <svg width="24" height="24" aria-hidden="true">
                        <use href="/icon/_sprite.svg#Answer"></use>
                      </svg>
                    </span>
                    <div class="inquiry_contents_answer">
                      <p class="text-content">
                        ${inquiry.answer ? inquiry.answer : '답변 대기중입니다'}
                      </p>
                      <time class="text-gray-400" datetime="${
                        answerDay ? answerDay : ''
                      }"
                        >${answerDay ? answerDay : ''}</time
                      >
                    </div>
                  </div>
                </div>
              </div>`;
    insertBeforeEnd('.inquiry_list', inquiryTemplate);

    if (inqurityData.items.length === 0) {
      inquiryList.innerHTML = initialTemplate;
    }

    accordion(inquiry, userName, createDay);
  }
}

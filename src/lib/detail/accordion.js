import { secretCheck } from './secretCheck.js';
import { toggleContent } from './toggleContent.js';
import { getNodes } from './getNode.js';
export function accordion(inquiry, userName, createDay) {
  // 리뷰 섹션

  const reviewTitle = getNodes('.review_title');
  const reviewContents = getNodes('.review_content');
  // 문의 섹션
  const inquiryTitle = getNodes('.inquiry_title');
  const inquiryContents = getNodes('.inquiry_content');

  secretCheck(inquiryTitle, inquiry, userName, createDay);
  toggleContent(reviewTitle, reviewContents);
  toggleContent(inquiryTitle, inquiryContents);
}

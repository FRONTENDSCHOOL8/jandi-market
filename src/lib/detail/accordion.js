import { secretCheck } from './secretCheck';
import { toggleContent } from './toggleContent';

export function accordion(inquiry, userName, createDay) {
  // 리뷰 섹션
  const reviewTitle = document.querySelectorAll('.review_title');
  const reviewContents = document.querySelectorAll('.review_content');
  // 문의 섹션
  const inquiryTitle = document.querySelectorAll('.inquiry_title');
  const inquiryContents = document.querySelectorAll('.inquiry_content');

  secretCheck(inquiryTitle, inquiry, userName, createDay);
  toggleContent(reviewTitle, reviewContents);
  toggleContent(inquiryTitle, inquiryContents);
}

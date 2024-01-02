/** @type {import('tailwindcss').Config} */
import { range } from 'lodash';

const pxToRem = (px, base = 16) => `${px / base}rem`;

const pxToRemFunc = (start, end) =>
  range(start, end).reduce((acc, px) => {
    acc[`${px}pxr`] = pxToRem(px);
    return acc;
  }, {});

export default {
  content: ['./index.html', './src/**/*.html'],
  theme: {
    extend: {
      spacing: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      inset: {
        ...pxToRemFunc(0, 1000),
      },
      fontSize: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      lineHeight: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      screens: {
        mobile: '360px',
        tablet: '768px',
        desktop: '1280px',
      },
    },
  },
  plugins: [],
};

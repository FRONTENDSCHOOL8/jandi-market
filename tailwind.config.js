/** @type {import('tailwindcss').Config} */
import { range } from 'lodash';

const pxToRem = (px, base = 16) => `${px / base}rem`;

const pxToRemFunc = (start, end) =>
  range(start, end).reduce((acc, px) => {
    acc[`${px}pxr`] = pxToRem(px);
    return acc;
  }, {});

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        secondary: '#BD76FF',
        primary: '#5F0080',
        content: '#333333',
        'gray-50': '#F9F9F9',
        'gray-100': '#E1E1E1',
        'gray-200': ' #C4C4C4',
        'gray-300': ' #A6A6A6',
        'gray-400': ' #898989',
        'gray-500': ' #6B6B6B',
        'gray-600': ' #565656',
        'gray-700': ' #404040',
        'gray-800': ' #2B2B2B',
        'gray-900': ' #151515',
        'blue-100': ' #CCE0FF',
        'blue-200': ' #99C2FF',
        'blue-300': ' #66A3FF',
        'blue-400': ' #3385FF',
        'blue-500': ' #0066FF',
        'blue-600': ' #0052CC',
        'blue-700': ' #003D99',
        'blue-800': ' #002966',
        'blue-900': ' #001433',
        'info-error': '#F03F40',
        'accent-yellow': '#FA622F',
      },
      spacing: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      inset: {
        ...pxToRemFunc(0, 1000),
      },
      fontSize: {
        ...pxToRemFunc(0, 1000),
        // base size: heading---medium (16px) */
        'heading-medium': '1rem',
        'heading-large': '1.33rem',
        'heading-xl': '1.78rem',
        'heading-xxl': '2.37rem',
        'heading-xxxl': '3.16rem',
        'label-small': '0.75rem',
        'label-medium': '1rem',
        'label-large': '1.33rem',
        'label-xl': '1.78rem',
        'label-xxl': '2.37rem',
        'paragraph-small': '0.7em',
        'paragraph-medium': '1rem',
        'paragraph-large': '1.3rem',
        'paragraph-xl': '1.78rem',
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

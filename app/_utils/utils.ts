import { ImageArray } from '@/app/_types/component-types';


export const shortenDescription = (str: string, n: number) => {
  return str.length > n ? str.slice(0, n - 1) + '...' : str;
};
export const fillRatingStars = (rating: number | null) => {
  const stars = [];
  if (!rating) {
    for (let i = 0; i < 5; i++) {
      stars.push('empty');
    }
    return stars;
  }
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push('fill');
  }
  while (stars.length < 5) {
    stars.push('empty');
  }
  return stars;
};

export const generateCaptionLength = (screenWidth: number, type: string) => {
  if (screenWidth < 480) return 97;
  else if (screenWidth < 650) return 197;
  else if (type === 'blogPost') return 250;
  else return 397;
};

export const getRandomImages = (imgArray: ImageArray) => {
  let firstNum = Math.floor(Math.random() * (imgArray.length - 1 + 1)) + 1;
  let secondNum = Math.floor(Math.random() * (imgArray.length - 1 + 1)) + 1;
  while (firstNum === secondNum) {
    secondNum = Math.floor(Math.random() * (imgArray.length - 1 + 1)) + 1;
  }
  return { firstNum, secondNum };
};

export const numberSeparator = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const priceFormatter = (price: number): string => {
  if (Number.isInteger(price)) {
    return price.toFixed(2);
  } else {
    const decimalCount = price.toString().split('.')[1].length;
    if (decimalCount === 1) return price.toFixed(2);
    else {
      return price.toString();
    }
  }
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

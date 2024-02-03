import { ImageArray } from '@/app/_types/types';

export const shortenDescription = (str: string, n: number) => {
  return str.length > n ? str.slice(0, n - 1) + '...' : str;
};
export const fillRatingStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push('fill');
  }
  if (!Number.isInteger(rating)) stars.push('half');
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
  let firstNum = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
  let secondNum = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
  while (firstNum === secondNum) {
    secondNum = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
  }
  console.log(firstNum, secondNum);
  return { firstNum, secondNum };
};

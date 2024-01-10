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

export const generateCaptionLength = (screenWidth: number) => {
  if (screenWidth < 480) return 97;
  else if (screenWidth < 650) return 197;
  else return 397;
};

import { BASE_URL, CATEGORIES_URL } from '@/app/_config/api';

export const getAllCategories = async () => {
  try {
    const res = await fetch(BASE_URL + CATEGORIES_URL);
    if (!res.ok) {
      throw new Error('Failed to Fetch Categories');
    }

    const data = await res.json();
    return data.categories;
  } catch (error) {
    console.error('Error Loading Categories', error);
  }
};

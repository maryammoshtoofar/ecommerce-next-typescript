import { BASE_URL, SUBCATEGORIES_URL } from '@/app/_config/api';

export const getSubcategoriesByCategory = async (id: string) => {
  try {
    const res = await fetch(`${BASE_URL}${SUBCATEGORIES_URL}?category=${id}`);
    if (!res.ok) {
      throw new Error('Failed to Fetch Subcategories');
    }

    const data = await res.json();
    return data.subcategories;
  } catch (error) {
    console.error('Error Loading SubCategories', error);
  }
};

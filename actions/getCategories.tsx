import { Category } from '@/types';

const CATEGORIES_URL = process.env.STORE_API_URL + '/categories';

const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(CATEGORIES_URL);

  return response.json();
};

export default getCategories;

import { Category } from '@/types';

const CATEGORIES_URL = `${process.env.STORE_PUBLIC_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(CATEGORIES_URL);

  console.log(response.json);
  return response.json();
};

export default getCategories;

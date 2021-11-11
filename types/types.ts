export type Category = 'fridge' | 'freezer';

export type Food = {
  id: string;
  img?: string;
  quantity?: string;
  name?: string;
  category: Category;
  added: string;
  expires?: string;
};
export type FridgeArea = {
  space: Category;
};

export type Food = {
  id: string;
  img?: string;
  quantity?: string;
  name?: string;
  category: 'Fridge' | 'Freezer';
  added: string;
  expires?: string;
};
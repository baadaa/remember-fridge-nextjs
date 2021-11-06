import { createContext, useContext } from 'react';

import { Food } from '../types/types';

export type FoodContextValue = {
  foodItems: Array<Food | null>;
  setFoodItems: (data: Array<Food>) => void;
};

const initialValue: FoodContextValue = {
  foodItems: [{ id: '', category: 'Fridge', added: '' }],
  setFoodItems: (data) => console.warn('no theme provider', data),
};
export const FoodContext = createContext<FoodContextValue>(initialValue);

export const useFoods = () => useContext(FoodContext);

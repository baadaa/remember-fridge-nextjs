import { createContext, useContext } from 'react';

import { Food } from '@/types/types';
import { emptyFoodItem } from '@/components/foodTemplate';

export type FoodContextType = {
  foodItems: Array<Food | null>;
  setFoodItems: (data: Array<Food>) => void;
};

const initialValue: FoodContextType = {
  foodItems: [emptyFoodItem],
  setFoodItems: (data) => console.warn('no theme provider', data),
};
export const FoodContext = createContext<FoodContextType>(initialValue);

export const useFoods = (): FoodContextType => useContext(FoodContext);

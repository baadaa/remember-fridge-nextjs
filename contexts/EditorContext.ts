import { createContext, useContext } from 'react';

import { Food } from '../types/types';
import { emptyFoodItem } from '@/components/foodTemplate';

export type EditorContextType = {
  foodInEditor: Food;
  setFoodInEditor: (data: Food) => void;
};

const initialValue: EditorContextType = {
  foodInEditor: emptyFoodItem,
  setFoodInEditor: (data) => console.warn('no theme provider', data),
};
export const EditorContext = createContext<EditorContextType>(initialValue);

export const useFoodInEditor = (): EditorContextType =>
  useContext(EditorContext);

import axios from 'axios';
import { Food } from '../types/types';
import { useFoods } from '../contexts/FoodContext';

export const isBrowser = typeof window !== 'undefined';

export const setLocalStorage = (key = '', data = ''): void => {
  window.localStorage.setItem(key, data);
};

export const loadSamples = () => {
  return axios.get('/sampleData.json').then((res) => {
    if (isBrowser) {
      return res.data
    }
  });
};

export const localStorageIsAvailable = (data: string): boolean =>
  !!window.localStorage.getItem(data);

import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import {
  ThemeContext,
  Theme,
  FoodContext,
  EditorContext,
} from '@/contexts/index';
import { Food } from '@/types/types';
import {
  setLocalStorage,
  toggleColorMode,
} from '@/coreMethods//dataPersistence';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>(Theme.Light);
  const [foodItems, setFoodItems] = useState<Array<Food>>([]);
  const [foodInEditor, setFoodInEditor] = useState<Food>({
    id: '',
    img: '',
    quantity: '',
    name: '',
    category: 'fridge',
    added: '',
    expires: '',
  });
  const colorMode = { theme, setTheme };
  const foods = { foodItems, setFoodItems };
  const foodInFocus = { foodInEditor, setFoodInEditor };
  const applyColorTheme = (isDark: boolean) => {
    if (isDark) {
      setTheme(Theme.Dark);
    } else {
      setTheme(Theme.Light);
    }
    toggleColorMode(isDark);
  };
  const loadColorTheme = () => {
    const savedTheme = localStorage.getItem('b_fridge_colorMode');
    if (!savedTheme) {
      const isDark = false;
      applyColorTheme(isDark);
      return null;
    }
    const currentTheme = JSON.parse(savedTheme) as string;
    const isDark = currentTheme === 'Dark';
    applyColorTheme(isDark);
  };
  const loadStoredFoods = () => {
    const storedFoods = window.localStorage.getItem('b_fridge_foods');
    if (storedFoods) {
      setFoodItems(JSON.parse(storedFoods));
    }
  };
  useEffect(() => {
    loadColorTheme();
    loadStoredFoods();
  }, []);

  useEffect(() => {
    setLocalStorage('b_fridge_colorMode', JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    setLocalStorage('b_fridge_foods', JSON.stringify(foodItems));
  }, [foodItems]);

  return (
    <ThemeContext.Provider value={colorMode}>
      <FoodContext.Provider value={foods}>
        <EditorContext.Provider value={foodInFocus}>
          <Component {...pageProps} />
        </EditorContext.Provider>
      </FoodContext.Provider>
    </ThemeContext.Provider>
  );
}

export default MyApp;

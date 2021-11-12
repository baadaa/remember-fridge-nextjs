import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import {
  ThemeContext,
  Theme,
  FoodContext,
  EditorContext,
} from '@/contexts/index';
import { Food } from '@/types/types';
import { emptyFoodItem } from '@/components/foodTemplate';
import {
  setLocalStorage,
  toggleColorMode,
} from '@/coreMethods//dataPersistence';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>(Theme.Light);
  const [foodItems, setFoodItems] = useState<Array<Food>>([]);
  const [foodInEditor, setFoodInEditor] = useState<Food>(emptyFoodItem);

  const colorMode = { theme, setTheme };
  const foods = { foodItems, setFoodItems };
  const foodInFocus = { foodInEditor, setFoodInEditor };
  const applyColorTheme = (targetMode: Theme) => {
    setTheme(targetMode);
    toggleColorMode(targetMode);
  };
  const loadStoredFoods = () => {
    const storedFoods = window.localStorage.getItem('b_fridge_foods');
    if (storedFoods) {
      setFoodItems(JSON.parse(storedFoods));
    }
  };

  useEffect(() => {
    const loadColorTheme = () => {
      const savedTheme = localStorage.getItem('b_fridge_colorMode');
      if (!savedTheme) {
        applyColorTheme(Theme.Light);
        return null;
      }
      const currentTheme = JSON.parse(savedTheme) as Theme;
      applyColorTheme(currentTheme);
    };
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

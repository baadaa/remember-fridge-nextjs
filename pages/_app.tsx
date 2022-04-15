import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import {
  ThemeContext,
  Theme,
  FoodContext,
  LocalUserContext,
  EditorContext,
} from '@/contexts/index';
import { Food, User } from '@/types/types';
import { emptyFoodItem } from '@/components/foodTemplate';
import {
  setLocalStorage,
  toggleColorMode,
} from '@/coreMethods//dataPersistence';
import { Leopard } from '@/components/Avatars/Leopard';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>(Theme.Light);
  const [localUser, setLocalUser] = useState<User>();
  const [foodItems, setFoodItems] = useState<Array<Food>>([]);
  const [foodInEditor, setFoodInEditor] = useState<Food>(emptyFoodItem);

  const colorMode = { theme, setTheme };
  const foods = { foodItems, setFoodItems };
  const currentLocalUser = { localUser, setLocalUser };
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
  const initLocalUser = () => {
    const savedUser = window.localStorage.getItem('b_fridge_localUser');
    if (savedUser) {
      setLocalUser(JSON.parse(savedUser));
    } else {
      const randomUser: User = {
        id: 'whatever',
        name: 'whoever',
        avatar: <Leopard />,
      };
      setLocalUser(randomUser);
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
    initLocalUser();
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
      <LocalUserContext.Provider value={currentLocalUser}>
        <FoodContext.Provider value={foods}>
          <EditorContext.Provider value={foodInFocus}>
            <Component {...pageProps} />
          </EditorContext.Provider>
        </FoodContext.Provider>
      </LocalUserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default MyApp;

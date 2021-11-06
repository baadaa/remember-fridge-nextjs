import { useState, useEffect } from 'react';
// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeContext, Theme } from '../contexts/ThemeContext';
import { FoodContext } from '../contexts/FoodContext';
import { Food } from '../types/types';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(Theme.Light);
  const [foodItems, setFoodItems] = useState<Array<Food>>([]);
  const colorMode = { theme, setTheme };
  const foods = { foodItems, setFoodItems };
  const loadPreference = () => {
    const blob = localStorage.getItem('b_fridge_colorMode');
    if (!blob) {
      setTheme(Theme.Light);
      document.body.className = 'lightMode';
      return null;
    }
    const currentTheme = JSON.parse(blob) as string;
    const isDark = currentTheme === 'Dark';
    if (isDark) {
      setTheme(Theme.Dark);
    } else {
      setTheme(Theme.Light);
    }
    document.body.className = isDark ? 'darkMode' : 'lightMode';
  };
  const savePreference = () => {
    localStorage.setItem('b_fridge_colorMode', JSON.stringify(theme));
  };
  useEffect(() => {
    loadPreference();
  }, []);

  useEffect(() => {
    savePreference();
  }, [theme]);

  return (
    <ThemeContext.Provider value={colorMode}>
      <FoodContext.Provider value={foods}>
        <Component {...pageProps} />
      </FoodContext.Provider>
    </ThemeContext.Provider>
  );
}

export default MyApp;

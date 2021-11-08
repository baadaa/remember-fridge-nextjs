import axios from 'axios';

export const isBrowser = typeof window !== 'undefined';

export const setLocalStorage = (key = '', data = ''): void => {
  window.localStorage.setItem(key, data);
};

export const loadSamples = () =>
  axios.get('/sampleData.json').then((res) => {
    if (isBrowser) {
      return res.data;
    }
  });

export const localStorageIsAvailable = (data: string): boolean =>
  !!window.localStorage.getItem(data);

export const toggleColorMode = (isDark: boolean): void => {
  if (isBrowser) {
    document.body.className = isDark ? 'darkMode' : 'lightMode';
  }
};

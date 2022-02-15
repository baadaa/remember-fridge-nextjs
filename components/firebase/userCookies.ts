import cookies from 'js-cookie';
import { mapUserData } from './mapUserData';

export const getUserFromCookie = () => {
  const cookie = cookies.get('b_fridge_auth');
  if (!cookie) return;
  // console.log(cookie);
  return JSON.parse(cookie);
};

export const setUserCookie = (user) => {
  // console.log(user);
  cookies.set('b_fridge_auth', JSON.stringify(user));
};

export const removeUserCookie = () => cookies.remove('b_fridge_auth');

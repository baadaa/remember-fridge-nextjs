import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import initFirebase from './initFirebase';
import {
  removeUserCookie,
  setUserCookie,
  getUserFromCookie,
} from './userCookies';
import { mapUserData, UserInfo } from './mapUserData';
initFirebase();

const useUser = () => {
  const [user, setUser] = useState<UserInfo>();
  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .catch((e) => console.error(e));
  };
  useEffect(() => {
    const cancelAuthListener = firebase
      .auth()
      .onIdTokenChanged((currentUser) => {
        if (currentUser) {
          const userData = mapUserData(currentUser);
          console.log('user:', currentUser, 'userData', userData);
          setUserCookie(userData);
          setUser(userData);
        } else {
          removeUserCookie();
          setUser(null);
        }
      });

    const userFromCookie = getUserFromCookie();
    if (!userFromCookie) return;
    setUser(userFromCookie);

    return () => {
      cancelAuthListener();
    };
  }, []);

  return { user, logout };
};

export { useUser };

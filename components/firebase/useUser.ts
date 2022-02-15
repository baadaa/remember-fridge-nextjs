import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
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
  const [db, setDb] = useState<any>();
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
          // console.log('user:', currentUser, 'userData', userData);
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
  useEffect(() => {
    if (!user) return;
    const database = firebase.database();
    const foods = database.ref(`users/${user.id}/foods`);
    setDb(database);
    foods.on('value', (data) => {
      console.log(data.val());
    });
  }, [user]);
  return { user, logout, db };
};

export { useUser };

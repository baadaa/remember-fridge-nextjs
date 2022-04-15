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

const useFirebaseUser = () => {
  const [firebaseUser, setFirebaseUser] = useState<UserInfo>();
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
          setFirebaseUser(userData);
        } else {
          removeUserCookie();
          setFirebaseUser(null);
        }
      });

    const userFromCookie = getUserFromCookie();
    if (!userFromCookie) return;

    setFirebaseUser(userFromCookie);

    return () => {
      cancelAuthListener();
    };
  }, []);
  useEffect(() => {
    if (!firebaseUser) return;
    const database = firebase.database();
    const foods = database.ref(`users/${firebaseUser.id}/foods`);
    setDb(database);
    foods.on('value', (data) => {
      console.log(data.val());
    });
  }, [firebaseUser]);
  return { firebaseUser, logout, db };
};

export { useFirebaseUser };

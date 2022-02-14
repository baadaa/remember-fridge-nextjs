import firebase from 'firebase/compat/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export default function initFirebase() {
  if (!firebase.apps.length) firebase.initializeApp(config);
}
// This function creates the Firebase singleton for the app
// let firebaseInstance;
// export const getFirebase = (firebase) => {
//   if (firebaseInstance) {
//     return firebaseInstance;
//   }

//   const defaultFirebase = firebase.default;

//   defaultFirebase.initializeApp(config);
//   firebaseInstance = defaultFirebase;

//   return defaultFirebase;
// };

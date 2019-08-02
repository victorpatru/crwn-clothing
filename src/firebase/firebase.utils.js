import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBl0xHlG6nEFDqZixHtBUKi-WPtB0caRf4",
  authDomain: "crwn-db-7c81f.firebaseapp.com",
  databaseURL: "https://crwn-db-7c81f.firebaseio.com",
  projectId: "crwn-db-7c81f",
  storageBucket: "",
  messagingSenderId: "710774170962",
  appId: "1:710774170962:web:7b861b47206047d0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
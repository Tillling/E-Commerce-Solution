import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

const config = {
  apiKey: "AIzaSyCO8KggCpkEAyVAfD8AutWU1O9ujgyrhHI",
  authDomain: "e-commerce-7113e.firebaseapp.com",
  databaseURL: "https://e-commerce-7113e.firebaseio.com",
  projectId: "e-commerce-7113e",
  storageBucket: "e-commerce-7113e.appspot.com",
  messagingSenderId: "572796198338",
  appId: "1:572796198338:web:5fb9efe0e29a348ffeca5b",
  measurementId: "G-YSQ62DPD3Z",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

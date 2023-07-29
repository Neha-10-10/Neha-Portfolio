
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDmG_-xPRqkeYCajp2vgpZX9DY4K3euLmQ",
  authDomain: "np-project-4fcd8.firebaseapp.com",
  projectId: "np-project-4fcd8",
  storageBucket: "np-project-4fcd8.appspot.com",
  messagingSenderId: "1025780320535",
  appId: "1:1025780320535:web:e60c4099e375ab7caacf52",
  measurementId: "G-PR6Y33EQ65"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
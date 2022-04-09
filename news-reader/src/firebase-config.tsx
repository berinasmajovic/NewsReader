import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBGSEbayPjUK1WLjJpdh20cc-JgNbC2Jec",
    authDomain: "newsreader-b09de.firebaseapp.com",
    projectId: "newsreader-b09de",
    storageBucket: "newsreader-b09de.appspot.com",
    messagingSenderId: "809900679595",
    appId: "1:809900679595:web:69563cc1fed162c3cbf2ee",
    measurementId: "G-C6KNCQZYKT"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    }
    catch(error: any) {
      alert(error.message);
    }
  }

  const registerWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    }
    catch(error: any) {
      alert(error.message);
    }
  }

  const logout = () => {
    signOut(auth);
  }

  export {
    auth,
    loginWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout
  }
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc as getDocumentReference, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZHKh-yv9HCokgHB79aAsbZCMhKLJU400",
  authDomain: "react-refresher-db.firebaseapp.com",
  projectId: "react-refresher-db",
  storageBucket: "react-refresher-db.appspot.com",
  messagingSenderId: "1007785572879",
  appId: "1:1007785572879:web:da48f0479ea672ac15017a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Auth
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// Firestore
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalProperties) => {
  const userDocRef = getDocumentReference(db, 'users', userAuth.uid); // this is created on the firestore side if it doesnt exist.
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalProperties });
    } catch (error) {
      console.error("createUserDocumentFromAuth:", error);
    }
  }
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWIthEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const registerAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback);

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCC5_BwNtgqDb7Sw8LlbCOLOa242JwAUHQ",
  authDomain: "login-b7c22.firebaseapp.com",
  projectId: "login-b7c22",
  storageBucket: "login-b7c22.appspot.com",
  messagingSenderId: "33877411970",
  appId: "1:33877411970:web:your-app-id",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, collection, addDoc, getDocs, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };

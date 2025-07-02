import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsFDmf72rsLAH2_Ln2PcjDsuoFo9KcDbM",
  authDomain: "collin-suzette.firebaseapp.com",
  projectId: "collin-suzette",
  storageBucket: "collin-suzette.firebasestorage.app",
  messagingSenderId: "1012540605988",
  appId: "1:1012540605988:web:da8330ffc537c3f967fab1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, GoogleAuthProvider };
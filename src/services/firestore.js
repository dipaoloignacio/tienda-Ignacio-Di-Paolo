import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZSAnkjFvPGdJLLljaZXRl8OQTF9Ao_OE",
  authDomain: "comercio-e1dae.firebaseapp.com",
  projectId: "comercio-e1dae",
  storageBucket: "comercio-e1dae.appspot.com",
  messagingSenderId: "1088324871828",
  appId: "1:1088324871828:web:e18808e6568427bf5c7681",
  measurementId: "G-MFS3MHDLZ7"
};

const app = initializeApp(firebaseConfig);
const booksDB = getFirestore(app);

export default booksDB;
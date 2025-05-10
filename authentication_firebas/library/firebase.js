import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBHcJWnkH21lCD52NhYEcd_GdSfpRG8IuU",
  authDomain: "auth-test-43d2b.firebaseapp.com",
  projectId: "auth-test-43d2b",
  storageBucket: "auth-test-43d2b.firebasestorage.app",
  messagingSenderId: "158154237",
  appId: "1:158154237:web:c82b8e31a4add4be84ed94",
  measurementId: "G-19CLPYQ5YF"
};

const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
  
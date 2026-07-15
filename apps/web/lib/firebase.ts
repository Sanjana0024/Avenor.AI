import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAujMVOk3YA24FA2nT_KMKdSLZE5B_jY_E",
  authDomain: "avenor-1c144.firebaseapp.com",
  projectId: "avenor-1c144",
  storageBucket: "avenor-1c144.firebasestorage.app",
  messagingSenderId: "23070572018",
  appId: "1:23070572018:web:102c70a40d0fceff52ff6b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
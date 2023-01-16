// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB2_thOr6T36Fdx2L_2GB1Ls_CX61jABtA",
  authDomain: "vue-realtime-todo-app.firebaseapp.com",
  projectId: "vue-realtime-todo-app",
  storageBucket: "vue-realtime-todo-app.appspot.com",
  messagingSenderId: "462916858222",
  appId: "1:462916858222:web:c6a202396efa856b46d17f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

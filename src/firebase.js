import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUlYzonlSITWPQXs0MYm1ESxoHBtE9z_c",
  authDomain: "to-do-list-3e681.firebaseapp.com",
  databaseURL: "https://to-do-list-3e681-default-rtdb.firebaseio.com",
  projectId: "to-do-list-3e681",
  storageBucket: "to-do-list-3e681.appspot.com",
  messagingSenderId: "591283565287",
  appId: "1:591283565287:web:c74984fc31cf2799866842"
};



const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const firebaseConfig = {
  apiKey: "AIzaSyDW45_4t7b5zhUk4CwVs8B08B1di0bD2hQ",
  authDomain: "carrot-market-83a12.firebaseapp.com",
  databaseURL:
    "https://carrot-market-83a12-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carrot-market-83a12",
  storageBucket: "carrot-market-83a12.appspot.com",
  messagingSenderId: "202173294256",
  appId: "1:202173294256:web:f79d31516164fd5e3ebd75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);

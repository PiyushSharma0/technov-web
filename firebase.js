import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyATxcxmVnUeYffRPz7azVt-0aqwjT5mNCM",
    authDomain: "technova-leaderboard.firebaseapp.com",
    projectId: "technova-leaderboard",
    storageBucket: "technova-leaderboard.appspot.com",
    messagingSenderId: "205794101556",
    appId: "1:205794101556:web:94557c354123b12e417d61"
  };


function createFirebaseApp() {
  try {
    return getApp();
  } catch {
    return initializeApp(firebaseConfig);
    
  }
}

export const app = createFirebaseApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
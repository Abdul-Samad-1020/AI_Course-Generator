// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {initializeAuth , getReactNativePeristance } from "firebase/auth";
import { ReactNativeAsyncStorage } from "@react-native-async-storage/async-storage"
import { getFirestoore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD7AJB0B7CrAPhEjOt5vAq2gv_isRuQlk",
  authDomain: "projectai-f7fd8.firebaseapp.com",
  projectId: "projectai-f7fd8",
  storageBucket: "projectai-f7fd8.firebasestorage.app",
  messagingSenderId: "1014676330969",
  appId: "1:1014676330969:web:726fce44ae0cd795e2a1c8",
  measurementId: "G-4RXQDSV6ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = initializeAuth(app, {
    persistence:getReactNativePeristance(ReactNativeAsyncStorage)
})
export const db = getFirestoore(app);
const analytics = getAnalytics(app);
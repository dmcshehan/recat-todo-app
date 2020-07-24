// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwf3-JbuVcqlmJETzx-36CUwIhJ7NXmEE",
  authDomain: "todo-app-62790.firebaseapp.com",
  databaseURL: "https://todo-app-62790.firebaseio.com",
  projectId: "todo-app-62790",
  storageBucket: "todo-app-62790.appspot.com",
  messagingSenderId: "811998509517",
  appId: "1:811998509517:web:4df21680c24ac6bd996c84",
  measurementId: "G-V3SV6V8YGD",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;

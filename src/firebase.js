// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDWqDGYdz7YXQq6rs_lu1xDpaLeNERpeTw",
//   authDomain: "react-todo-app-3456d.firebaseapp.com",
//   projectId: "react-todo-app-3456d",
//   storageBucket: "react-todo-app-3456d.appspot.com",
//   messagingSenderId: "1001218444879",
//   appId: "1:1001218444879:web:f10b6df310f01671a5643a",
//   measurementId: "G-VY1T46TVW6",
// };


import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDWqDGYdz7YXQq6rs_lu1xDpaLeNERpeTw",
  authDomain: "react-todo-app-3456d.firebaseapp.com",
  projectId: "react-todo-app-3456d",
  storageBucket: "react-todo-app-3456d.appspot.com",
  messagingSenderId: "1001218444879",
  appId: "1:1001218444879:web:f10b6df310f01671a5643a",
  measurementId: "G-VY1T46TVW6",

});
const db = firebaseApp.firestore();
// const auth = firebase.auth();

export default db;
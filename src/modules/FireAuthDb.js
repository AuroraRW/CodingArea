// // import firebase from 'firebase/compat/app';
// // import 'firebase/compat/auth';
// // import 'firebase/compat/firestore';
// import { initializeApp } from 'firebase/app';
// import { getDatabase } from "firebase/database";
// import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//     apiKey: "AIzaSyAtVkj_CtEMwWMSFdROkXajNKub76tqSZc",
//     authDomain: "coding-test-8816b.firebaseapp.com",
//     databaseURL: "https://coding-test-8816b-default-rtdb.firebaseio.com",
//     projectId: "coding-test-8816b",
//     storageBucket: "coding-test-8816b.appspot.com",
//     messagingSenderId: "158303777672",
//     appId: "1:158303777672:web:5f34891a6e6339842bc03d"
//   };

// // Use this to initialize the firebase App
// // firebase.initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);


// // Use these for db & auth
// // const db = firebaseApp.database();
// const db = getDatabase(app);
// const auth = getAuth(app);

// // const auth = firebase.auth();
// export { auth, db };

import fb from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAtVkj_CtEMwWMSFdROkXajNKub76tqSZc",
    authDomain: "coding-test-8816b.firebaseapp.com",
    databaseURL: "https://coding-test-8816b-default-rtdb.firebaseio.com",
    projectId: "coding-test-8816b",
    storageBucket: "coding-test-8816b.appspot.com",
    messagingSenderId: "158303777672",
    appId: "1:158303777672:web:5f34891a6e6339842bc03d"
  };

// Initialize Firebase
fb.initializeApp(firebaseConfig);
export const db = fb.database();
export const auth = fb.auth();
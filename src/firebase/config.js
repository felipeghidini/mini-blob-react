import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCI5ZH0YhQ24exyf091uLt5BHEwRO9z5zg",
  authDomain: "miniblog-81278.firebaseapp.com",
  projectId: "miniblog-81278",
  storageBucket: "miniblog-81278.appspot.com",
  messagingSenderId: "1046416007448",
  appId: "1:1046416007448:web:fae295e34e99a38fb87e6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
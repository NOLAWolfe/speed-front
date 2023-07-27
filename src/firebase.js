// import { initializeApp } from "firebase/app";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyD8FJcXlEmNee1kDttigDS8uS4nkgAdjdw",
  authDomain: "the-speed-45992.firebaseapp.com",
  projectId: "the-speed-45992",
  storageBucket: "the-speed-45992.appspot.com",
  messagingSenderId: "100011199446",
  appId: "1:100011199446:web:5b6ebed48575d07c147277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import 'dotenv/config'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// console.log(process.env.VITE_APIKEY)
// console.log(process.env.VITE_AUTHDOMAIN)
// console.log(process.env.VITE_PROJECTID)
// console.log(process.env.VITE_STORAGEBUCKET)
// console.log(process.env.VITE_MESSAGINGSENDERID)
// console.log(process.env.VITE_APPID)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXfqRjSGNr_Mze9K65ZDeGkWb3RjI04Tw",
  authDomain: "cars-and-stuffs.firebaseapp.com",
  projectId: "cars-and-stuffs",
  storageBucket: "cars-and-stuffs.appspot.com",
  messagingSenderId: "237640144900",
  appId: "1:237640144900:web:13ff77204501756950bd51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
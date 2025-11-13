// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI0Wge3VTum0d_VgViA5NI4cHU7eGJK68",
  authDomain: "assairment--9.firebaseapp.com",
  projectId: "assairment--9",
  storageBucket: "assairment--9.firebasestorage.app",
  messagingSenderId: "168057864503",
  appId: "1:168057864503:web:3c48f4aa34a18c2b7cdab2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export default app;
// export const auth = getAuth(app);
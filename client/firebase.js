// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCLVQpix2NU4rVzaq941RLYBgLbqLyG7bI',
  authDomain: 'zeitgeist-software-project.firebaseapp.com',
  projectId: 'zeitgeist-software-project',
  storageBucket: 'zeitgeist-software-project.firebasestorage.app',
  messagingSenderId: '296735423817',
  appId: '1:296735423817:web:0b6b25ae490a1e31356e98',
  measurementId: 'G-CGCNNZ94WJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

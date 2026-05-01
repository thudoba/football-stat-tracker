// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBE3iTW636Y5VxoYOam7KFk7NNYN-ldkS8',
  authDomain: 'football-stat-tracker-1608f.firebaseapp.com',
  projectId: 'football-stat-tracker-1608f',
  storageBucket: 'football-stat-tracker-1608f.firebasestorage.app',
  messagingSenderId: '552441049382',
  appId: '1:552441049382:web:c174d8b96dc753a48611e7',
  measurementId: 'G-DTB9PQ7PNC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAfhMIm-OOxewMQ1MJE3k2k-xjgIIyBCzg',
  authDomain: 'blogapp-38078.firebaseapp.com',
  projectId: 'blogapp-38078',
  storageBucket: 'blogapp-38078.appspot.com',
  messagingSenderId: '990045005593',
  appId: '1:990045005593:web:518967642b8428e0f60788',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

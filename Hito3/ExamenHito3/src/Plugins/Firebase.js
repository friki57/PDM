
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
   apiKey: "AIzaSyACp1UtDWhB6eO4BJG4Q0alzn6BLK25KSs",
   authDomain: "hito3pdm.firebaseapp.com",
   databaseURL: "https://hito3pdm.firebaseio.com",
   projectId: "hito3pdm",
   storageBucket: "hito3pdm.appspot.com",
   messagingSenderId: "196626242902",
   appId: "1:196626242902:web:d18db6472fd170ce8a4af7"
 };


 firebase.initializeApp(firebaseConfig);

 //export const firestore = firebase.firestore();
 export default firebase;

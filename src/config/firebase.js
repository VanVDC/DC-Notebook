import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyD_05almMajMdDK7Q42ohobBKIGczsAZNE",
  authDomain: "scheduler-a5161.firebaseapp.com",
  databaseURL: "https://scheduler-a5161.firebaseio.com",
  projectId: "scheduler-a5161",
  storageBucket: "scheduler-a5161.appspot.com",
  messagingSenderId: "180734875364",
  appId: "1:180734875364:web:5807798cc1c3e5bafc3ef1",
  measurementId: "G-SEC21LZG11"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;
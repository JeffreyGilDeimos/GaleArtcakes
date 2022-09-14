import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkop4HTLO2FInmlIcGYJmgGUVQRWR_UBo",
    authDomain: "react-artcakes.firebaseapp.com",
    projectId: "react-artcakes",
    storageBucket: "react-artcakes.appspot.com",
    messagingSenderId: "836433413617",
    appId: "1:836433413617:web:effc8b3e24bc2df2ab3050"
  };


 // use this to initialize the firebase app
 const firebaseapp = firebase.initializeApp(firebaseConfig);

 // Use for db
const db = firebaseapp.firestore()
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();


export { db, auth, googleProvider } 
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {

  apiKey: "AIzaSyDbSKqWndcEQnYFu1LueeHqMnMimeI709Y",

  authDomain: "go-grants.firebaseapp.com",

  projectId: "go-grants",

  storageBucket: "go-grants.appspot.com",

  messagingSenderId: "658135675858",

  appId: "1:658135675858:web:4dc6ee079dcc143ca08e0b",

  measurementId: "G-CF3BW3ZP4Q"

};


const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
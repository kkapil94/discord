import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDR5FkilYKo_tlIpixeoFc9FIC9xvK6dfg",
    authDomain: "discord-react-8a4a5.firebaseapp.com",
    projectId: "discord-react-8a4a5",
    storageBucket: "discord-react-8a4a5.appspot.com",
    messagingSenderId: "204353020008",
    appId: "1:204353020008:web:4fd317205bf53aab291bdd",
    measurementId: "G-YFVXTP5EM9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAOhf9wmGWr3WhT2rVCjb7-aS4ZdZ9mtH4",
    authDomain: "crwn-db-143fc.firebaseapp.com",
    databaseURL: "https://crwn-db-143fc.firebaseio.com",
    projectId: "crwn-db-143fc",
    storageBucket: "crwn-db-143fc.appspot.com",
    messagingSenderId: "522825451026",
    appId: "1:522825451026:web:5844c31435ffdf46997acb",
    measurementId: "G-072WYZ3CFF"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;

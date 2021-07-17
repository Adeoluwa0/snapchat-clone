import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCMZs5uo9302QFM5k6PMHeLOuyk4FxsNo4",
  authDomain: "snapchat-clone-yt-41d56.firebaseapp.com",
  projectId: "snapchat-clone-yt-41d56",
  storageBucket: "snapchat-clone-yt-41d56.appspot.com",
  messagingSenderId: "1085057970390",
  appId: "1:1085057970390:web:ef50320dd554c044439977"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,storage, provider}
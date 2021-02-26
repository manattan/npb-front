import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC92d2PgTFeajjaAS2GPSZG81fFYW0z1VA",
  authDomain: "search-npb.firebaseapp.com",
  projectId: "search-npb",
  storageBucket: "search-npb.appspot.com",
  messagingSenderId: "112456931628",
  appId: "1:112456931628:web:68f714b79c8ae804ab3489",
  measurementId: "G-ZCD3SQ4ZWR",
};

firebase.initializeApp(firebaseConfig);
export default firebase;

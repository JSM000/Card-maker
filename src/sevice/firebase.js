import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: "business-card-maker-f357c.appspot.com",
  messagingSenderId: "232460040008",
  appId: "1:232460040008:web:3be8613619f4c1dc6ca57d",
  measurementId: "G-18N078RYQQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.database(firebaseApp); 
export {firebaseApp, database};

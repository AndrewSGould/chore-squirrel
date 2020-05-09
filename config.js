import Firebase from "firebase";

let config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "choresquirrel-f2593.firebaseapp.com",
  databaseURL: "https://choresquirrel-f2593.firebaseio.com",
  projectId: "choresquirrel-f2593",
  storageBucket: "choresquirrel-f2593.appspot.com",
  messagingSenderId: "380344162013",
  appId: "1:380344162013:web:6b9ffeb34f83ed393fad34",
  measurementId: "G-LNF4R4E32Y",
};

let app = Firebase.initializeApp(config);

export const db = app.database();

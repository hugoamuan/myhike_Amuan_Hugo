//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyC0-yo-ZD0-b_5Hz_-gwLCxzO2QiXK5QDY",
    authDomain: "comp-1800-demo07-fa5cf.firebaseapp.com",
    projectId: "comp-1800-demo07-fa5cf",
    storageBucket: "comp-1800-demo07-fa5cf.appspot.com",
    messagingSenderId: "760833688021",
    appId: "1:760833688021:web:03410e5ecf07cfa49dbd5c"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

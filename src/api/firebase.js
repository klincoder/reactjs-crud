// Import resources
import firebase from "firebase";

// Initialize Firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDI5aJtssczlfO3DAjOE0dGY7BirL5pZ6s",
  authDomain: "backend-test-62b79.firebaseapp.com",
  databaseURL: "https://backend-test-62b79-default-rtdb.firebaseio.com",
  projectId: "backend-test-62b79",
  storageBucket: "backend-test-62b79.appspot.com",
  messagingSenderId: "413379196541",
  appId: "1:413379196541:web:7d4eabe58d92fe25ffe314",
});

// Define database
const fireDB = firebaseApp.firestore();

// Export firebase
export { fireDB };

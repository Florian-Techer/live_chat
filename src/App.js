import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCxjwiEmxk0i4f7SjLqL3Dk5aD1P7HD_bE",
  authDomain: "livechat-60720.firebaseapp.com",
  projectId: "livechat-60720",
  storageBucket: "livechat-60720.appspot.com",
  messagingSenderId: "517337903237",
  appId: "1:517337903237:web:905b3c824d7cc099de79ec",
  measurementId: "G-07DMREESSC",
});

const auth = firebase.auth();
const store = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;

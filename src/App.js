import "./App.css";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

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
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
export { auth, firestore };

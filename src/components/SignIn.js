import React from "react";
import firebase from 'firebase/compat/app';

import { auth } from "../App";

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
  };
  return (
    <>
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </>
  );
}

export default SignIn;

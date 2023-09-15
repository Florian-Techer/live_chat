import React, { useState, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";
import ChatMessage from "./ChatMessage";

import { auth, firestore } from "../App";

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });
  const [inputValue, setInputValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: inputValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setInputValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <div>
        {messages &&
          messages.map((msg) => {
            return <ChatMessage key={msg.id} message={msg} />;
          })}
        <span ref={dummy}></span>

        <form onSubmit={sendMessage}>
          <input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            placeholder="say something nice"
          />
          <button type="submit" disabled={!inputValue}>Envoyer</button>
        </form>
      </div>
    </main>
  );
}

export default ChatRoom;

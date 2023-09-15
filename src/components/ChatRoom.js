import React, { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from 'firebase/compat/app';
import ChatMessage from "./ChatMessage";

import { auth, firestore } from "../App"; 

function ChatRoom() {
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
  };

  return (
    <>
      <div>
        {messages &&
          messages.map((msg) => {
            return <ChatMessage key={msg.id} message={msg} />;
          })}

        <form onSubmit={sendMessage}>
          <input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </>
  );
}

export default ChatRoom;

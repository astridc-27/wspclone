import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainChatLayout from './pages/MainChatLayout.jsx';
import chatData from './data/chatData.js'
import './App.css';

function App() {
  const [chats, setChats] = useState(chatData);

  const handleSendMessage = (chatId, newMessageOrAction, updatedMessages) => {
    setChats(prevChats =>
      prevChats.map(chat => {
        if (chat.id === chatId) {
          if (newMessageOrAction === '__delete__' && Array.isArray(updatedMessages)) {
            return { ...chat, messages: updatedMessages };
          }
          return { ...chat, messages: [...chat.messages, newMessageOrAction] };
        }
        return chat;
      })
    );
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<MainChatLayout chats={chats} onSendMessage={handleSendMessage} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

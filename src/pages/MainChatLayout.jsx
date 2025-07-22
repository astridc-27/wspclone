import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from '../components/Sidebar.jsx';
import ChatWindow from '../components/ChatWindow.jsx';
import ChatWelcome from '../components/ChatWelcome.jsx';
import './MainChatLayout.css';

function MainChatLayout({ chats, onSendMessage }) {
  return (
        <div className="main-layout">
            <Sidebar chats={chats} />
            <Routes>
                <Route path="/:chatId" element={<ChatWindow chats={chats} onSendMessage={onSendMessage} />} />
                <Route path="*" element={<ChatWelcome/>} />
            </Routes>
        </div>
    );
}

export default MainChatLayout;
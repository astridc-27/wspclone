import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Sidebar from '../components/Sidebar.jsx';
import ChatWindow from '../components/ChatWindow.jsx';
import ChatWelcome from '../components/ChatWelcome.jsx';
import './MainChatLayout.css';

function MainChatLayout({ chats, onSendMessage }) {
    const { chatId } = useParams();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

  return (
        <div className="main-layout">
            {(!isMobile || !chatId) && <Sidebar chats={chats} />}
            <Routes>
                <Route path="/:chatId" element={<ChatWindow chats={chats} onSendMessage={onSendMessage} />} />
                <Route path="*" element={isMobile ? null : <ChatWelcome />} />
            </Routes>
        </div>
    );
}

export default MainChatLayout;
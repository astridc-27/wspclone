import React from "react";
import ChatItem from './ChatItem.jsx';
import './ChatList.css';

function ChatList({ chats }) {
    return (
        <ul className="chat-list">
            {chats.map(chat => (
                <ChatItem key={chat.id} chat={chat} />
            ))}
        </ul>
    );
}

export default ChatList;
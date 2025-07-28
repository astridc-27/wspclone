import React from "react";
import { Link, useParams } from 'react-router-dom';
import './ChatItem.css';

function ChatItem({ chat }) {
    const { chatId } = useParams();

    return (
        <li>
            <Link to={`/${chat.id}`} key={chat.id} className="chat-item">
                <img src={chat.avatar} alt={`${chat.name} avatar`} className="avatar" />
                <div className="chat-info">
                    <div className="chat-name">
                        {chat.name}
                    </div>
                    <div className="chat-last-message">
                        {chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].text : ''}
                    </div>
                </div>
                <div className="chat-time">
                    {chat.messages.length > 0 ? chat.messages[chat.messages.length -1].time : ''}
                </div>
            </Link>
        </li>
    );
}

export default ChatItem;
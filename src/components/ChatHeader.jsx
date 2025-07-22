import React from "react";
import "./ChatHeader.css";
import { IoMdCamera } from "react-icons/io";
import { IoMdMic } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

function ChatHeader({ chat }) {
    return (
        <header className="chat-header">
            <img src={chat.avatar} alt={`${chat.name} avatar`} className="chat-avatar" />
            <div className="chat-header-info">
                <h3>{chat.name}</h3>
                <p>{chat.lastSeen}</p>
            </div>
            <div className="chat-header-icons">
                <span className="icon camera"><IoMdCamera /></span>
                <span className="icon microphone"><IoMdMic /></span>
                <span className="icon search"><FaSearch /></span>
            </div>
        </header>
    );
}

export default ChatHeader;
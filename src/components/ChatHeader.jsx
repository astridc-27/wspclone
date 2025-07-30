import React from "react";
import "./ChatHeader.css";
import { BsCameraVideo, BsTelephone } from "react-icons/bs";
import { LiaSearchSolid } from "react-icons/lia";

function ChatHeader({ chat }) {
    return (
        <header className="chat-header">
            <img src={chat.avatar} alt={`${chat.name} avatar`} className="chat-avatar" />
            <div className="chat-header-info">
                <h3>{chat.name}</h3>
                <p>{chat.lastSeen}</p>
            </div>
            <div className="chat-header-icons">
                <div className="header-icons-box">
                    <span className="icon-box camera"><BsCameraVideo /></span>
                    <span className="icon-box"><BsTelephone /></span>
                </div>
                <span className="search"><LiaSearchSolid /></span>
            </div>
        </header>
    );
}

export default ChatHeader;
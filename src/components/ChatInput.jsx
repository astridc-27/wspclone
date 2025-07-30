import React from "react";
import { IoSendSharp } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { GiBatMask } from "react-icons/gi";
import { GrAttachment } from "react-icons/gr";
import './ChatInput.css';

function ChatInput({ newMessage, onChange, onSend, onKeyPress }) {
  return (
        <div className="chat-input">
            <button className="icon input-icon"><GiBatMask /></button>
            <button className="icon input-icon"><GrAttachment /></button>
            <input 
            type="text" 
            placeholder="Escribe un mensaje"
            value={newMessage}
            onChange={onChange}
            onKeyDown={onKeyPress}
            />
            <button className="send-btn" onClick={onSend} title="Enviar mensaje">
                <IoSendSharp />
            </button>
            <button className="icon input-icon"><IoMdMic /></button>
        </div>
    );
}

export default ChatInput;
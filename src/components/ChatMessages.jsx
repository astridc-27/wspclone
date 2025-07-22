import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import './ChatMessages.css';

function ChatMessages({ messages, messagesEndRef, chatId, onSendMessage }) {
  const handleDeleteMessage = (indexToDelete) => {
    const updatedMessages = messages.map((msg, index) => {
      if (index === indexToDelete) {
        return {
          ...msg,
          text: 'Este mensaje fue eliminado',
          deleted: true
        };
      }
      return msg;
    });

    onSendMessage(chatId, '__delete__', updatedMessages);
  };

  return (
    <div className="chat-messages">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message-bubble ${msg.from === 'me' ? 'sent' : 'received'} ${msg.deleted ? 'deleted' : ''}`}
        >
          <div className="message-content">
            <span>{msg.text}</span>
            <div className="message-info">
              <span className="time">{msg.time}</span>
              {msg.from === 'me' && !msg.deleted && (
                <button
                  className="delete-button"
                  onClick={() => handleDeleteMessage(index)}
                  title="Eliminar mensaje"
                >
                  <FaTrashAlt />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
}

export default ChatMessages;
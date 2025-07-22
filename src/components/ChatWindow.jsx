import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ChatHeader from './ChatHeader.jsx';
import ChatMessages from './ChatMessages.jsx';
import ChatInput from './ChatInput.jsx';
import './ChatWindow.css';

function ChatWindow({ chats, onSendMessage }) {
  const { chatId } = useParams();
  const chat = chats.find(c => c.id === chatId);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat?.messages]);

  const handleChange = e => {
    setNewMessage(e.target.value);
  };

  const handleSend = () => {
    if (newMessage.trim() === '') return;

    const message = {
      from: 'me',
      text: newMessage.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    onSendMessage(chatId, message);
    setNewMessage('');
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter' && newMessage.trim()) {
      handleSend();
    }
  };

  if (!chat) {
    return <div className="chat-window empty">Selecciona un chat para comenzar</div>;
  }

  return (
        <section className="chat-window">
      <ChatHeader chat={chat} />
      <ChatMessages messages={chat.messages} onSendMessage={onSendMessage} chatId={chatId} messagesEndRef={messagesEndRef} />
      <ChatInput
        newMessage={newMessage}
        onChange={handleChange}
        onSend={handleSend}
        onKeyPress={handleKeyPress}
      />
    </section>
    );
}

export default ChatWindow;
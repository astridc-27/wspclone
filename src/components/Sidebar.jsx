import React, { useState } from "react";
import ChatList from './ChatList';
import { RiChatNewLine } from "react-icons/ri";
import { IoFilterSharp, IoSearch } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { LuCircleDashed } from "react-icons/lu";
import { PiListBold } from "react-icons/pi";
import './Sidebar.css';

function Sidebar({ chats }) {
    const [searchTerm, setSearchTerm] = useState('');

    //Busqueda de chats en la barra de busqueda
    const filteredChats = chats.filter(chat =>
        chat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <aside className="sidebar">
            <nav className="sidebar-nav-vertical">
                <button className="nav-btn" title="Navegación" >
                    <PiListBold />
                </button>
                <button className="nav-btn active" title="Chats" >
                    <BiMessageRoundedDetail />
                </button>
                <button className="nav-btn" title="Llamadas">
                    <FaPhoneAlt />
                </button>
                <button className="nav-btn" title="Estados">
                    <LuCircleDashed />
                </button>
                <div className="sidebar-footer">
                    <button className="settings-btn nav-btn" title="Ajustes" >
                        <MdOutlineSettings />
                    </button>
                    <img src="/profile.jpg" alt="Perfil" className="profile-pic" title="Perfil" />
                </div>
            </nav>

            <div className="sidebar-main">
                <div className="sidebar-header">
                    <h2>Chats</h2>
                    <div className="sidebar-icons">
                        <span className="icon new-chat" title="Nuevo chat">
                            <RiChatNewLine />
                        </span>
                        <span className="icon filter" title="Filtro">
                            <IoFilterSharp />
                        </span>
                    </div>
                </div>

                <div className="search-box">
                    <input type="text"
                    placeholder="Buscar un chat o iniciar uno nuevo"
                    value={searchTerm}
                    onChange={handleSearchChange} />
                    <span className="search-icon"><IoSearch /></span>
                </div>

                <ChatList chats={filteredChats} />
            </div>
        </aside>
    );
}

export default Sidebar;
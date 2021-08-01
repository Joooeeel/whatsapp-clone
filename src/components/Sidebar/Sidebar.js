import React from 'react'
import './SideBar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'

import SideBarChat from './ChatsComponents'

export default () => {
    return (
        <div className="sidebar">

            {/* SIDEBAR HEADER COMPONENT*/}
            <div className="sidebar-header">
                <Avatar />
                <div className="sidebar-headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            {/* SIDEBAR  SEARCH COMPONENT*/}
            <div className="sidebar-search">
                <div className="sidebar-searchContainer">
                    <SearchOutlined />
                    <input placeholder='Buscar o empezar nuevo chat' type="text" />
                </div>
            </div>

            {/* SIDEBAR CHATS COMPONENTS*/}
            <div className="sidebar-chats">
                <SideBarChat />
                <SideBarChat />
                <SideBarChat />
                <SideBarChat />
            </div>
        </div>
    )
}

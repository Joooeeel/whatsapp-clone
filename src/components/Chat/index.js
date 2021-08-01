import './chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined, InsertEmoticon, Mic } from '@material-ui/icons';

import ChatMsg from './msg'

export default () => {
    return (
        <div className='chat'>
            <div className="chat-header">
                <Avatar />
                <div className="chat-headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat-headerInfoRight">
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                </div>
            </div>
            <div className="chat-body">
                <ChatMsg />
                <ChatMsg sender="chat-reciver" />
                <ChatMsg />
            </div>
            <div className="chat-footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <form>
                    <input placeholder="Escribe tu mensaje" type="text" />
                    <button type="submit"> Enviar mensaje</button>
                </form>
                <IconButton>
                    <Mic />
                </IconButton>
            </div>
        </div>
    )
}
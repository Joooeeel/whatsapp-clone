import { useState } from 'react';
import './chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined, InsertEmoticon, Mic } from '@material-ui/icons';
import axios from '../../services'
import ChatMsg from './msg'


export default ({ msg }) => {

    const [inputMsg, setInputMsg] = useState('');

    const sendMsg = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new', {
            msg: inputMsg,
            name: "Testing",
            timestamp: new Date().getUTCDate(),
            received: false
        })

        setInputMsg('')
    }
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
                {msg.map((msg, key) => {
                    return <ChatMsg key={key} data={msg} />
                })}
            </div>
            <div className="chat-footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <form>
                    <input
                        value={inputMsg}
                        onChange={e => setInputMsg(e.target.value)}
                        placeholder="Escribe tu mensaje"
                        type="text" />

                    <button
                        onClick={sendMsg}
                        type="submit">
                        Enviar mensaje
                    </button>
                </form>
                <IconButton>
                    <Mic />
                </IconButton>
            </div>
        </div>
    )
}
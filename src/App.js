import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';

import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import axios from './services';

function App() {
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
      .then(res => {
        setMsg(res.data);
      })
  }, []);

  useEffect(() => {
    //once a time
    const pusher = new Pusher('05a4d925632180f5f896', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      setMsg([...msg, data]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [msg])

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat msg={msg} />
      </div>
    </div>
  );
}

export default App;

import React, { useEffect } from 'react'
import chatApi from '../utils/Chat'
import Bullet from './bullet'
import '../styles/chatbox.css'
import Plane from '/paper-plane-regular.svg'
import Loader from './Loader'

const ChatBox = () => {
    const [input, setInput] = React.useState('')
    const [title, setTitle] = React.useState('Chatbot')
    const [messages, setMessages] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    useEffect(() => {
        setMessages([{role:"bot",content:"Hello! How can I help you today?"}])
    },[])

    useEffect(() => {
       document.title= title;
    },[title])

    useEffect(() => {
        const chat = document.querySelector('.chat-box');
        chat.scrollTop = chat.scrollHeight;
    },[messages])


    const handleMessage = async () =>{
        setLoading(true);
        setTitle(input);
        setMessages(prev =>[...prev,{role:"user", content:input }])
        setInput('');
        let response = await chatApi(input);
        setMessages(prev => [...prev,{role:"bot",content:response.result}])
        setLoading(false);
    }

  return (
    <div className='container'>
        <h1>Chatbot</h1>
        <div className='chat-box'>
            {messages.map((message,index) => (
                <Bullet key={index} role={message.role} content={message.content} />
            ))}
            {loading && <Loader />}
        </div>
        <div className='input'>
            <input
             type='text'
             placeholder='Type a message...' 
             onChange={(e) => setInput(e.target.value)}
             value={input}
             />
            <button onClick={handleMessage} disabled={loading} className='btn'>
                <p>{loading?"wait...":"send"} </p> 
               { !loading && <div className='btn-icon'>
                 <img src={Plane} height={22} />
                </div>
                }
            </button>
        </div>
    </div>
  )
}

export default ChatBox

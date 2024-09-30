import React, { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/AdminChatStyle.css';
import ProfileIcon from '../images/profile_icon.png';
import AttachmentIcon from '../images/attachment_icon.png';

function AdminChat() {
    const technicianName = "Samuel Mahlangu"; 
    const [text, setText] = useState('');
    const [chatLog, setChatLog] = useState([
        { text: "Please avail yourself tomorrow at 10am. I will come and have a look at your PC.", sender: "Technician" }
    ]);

    const fileInputRef = useRef(null); 
    const handleSendText = () => {
        if (text.trim() !== '') {
            setChatLog([...chatLog, { text: text, sender: "You" }]);
            setText('');
        }
    };

    const handleAttachImage = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            
            toast.success(`Attached: ${file.name}`);
            
            setChatLog([...chatLog, { text: `Attached: ${file.name}`, sender: "You" }]);
        }
    };

    return (
        <div>
            <div className="chat-container">
                <h4><img src={ProfileIcon} alt="Profile picture" height={45}/> {technicianName}</h4>
                <div className="chat-box">
                    <div className="texts">
                        {chatLog.map((msg, index) => (
                            <p key={index} className={msg.sender === "You" ? "user-message" : "tech-message"}>
                                {msg.text}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="input-field">
                    <input 
                        type="text" 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Type a message..."
                    />
                    <img 
                        src={AttachmentIcon} 
                        alt="Attach" 
                        onClick={handleAttachImage} 
                        height={45} 
                        className="attach-icon" 
                    />
                    <button onClick={handleSendText}>Send</button>
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileChange} 
                        style={{ display: 'none' }} 
                    />
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default AdminChat;

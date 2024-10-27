import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import iconImage from '../assets/icon.png'
import Button from "./ReUsables/Button";

const Chat = ({ socket, username, room }) => {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [socket]);

    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="w-[80%] h-[80vh]">
                <header className='flex justify-between items-center'>
                    <img src={iconImage} alt="chat_icon" className='w-[50px]' />
                    <span className='font-[700] font-serif text-[20px] text-black'>SynqChat</span>
                </header>
                <div>
                    <ScrollToBottom className="message-container">
                        {messageList.map((messageContent) => {
                            return (
                                <div
                                    className="message"
                                    id={username === messageContent.author ? "you" : "other"}
                                >
                                    <div>
                                        <div className="flex justify-end">
                                            <div className="bg-black rounded-[5px] w-[50%]">
                                                <p className="text-white py-3 px-2">{messageContent.message}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-5 justify-end">
                                            <p id="author" >{messageContent.author}</p>
                                            <p id="time">{messageContent.time}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </ScrollToBottom>
                </div>
                <div className="flex gap-3 justify-center fixed bottom-10 w-[90%]">
                    <input
                        type="text"
                        value={currentMessage}
                        className="bg-[#C4C4C4] py-4 rounded-[15px] px-[20px] text-black"
                        placeholder="chat..."
                        onChange={(event) => {
                            setCurrentMessage(event.target.value);
                        }}
                        onKeyPress={(event) => {
                            event.key === "Enter" && sendMessage();
                        }}
                    />
                    <Button style={'bg-black rounded-full w-[50px] h-[50px] text-white'} onClick={sendMessage}>&#9658;</Button>
                </div>
            </div>
        </div>
    );
}

export default Chat;
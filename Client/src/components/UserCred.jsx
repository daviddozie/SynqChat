import io from 'socket.io-client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Chat from './Chats';
import iconImage from '../assets/icon.png';
import Button from './ReUsables/Button';

const socket = io.connect("http://localhost:3000");

const UserCred = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div>
      {!showChat ? (
        <div className="md:h-[100vh] py-[50px] md:py-0 w-full flex justify-center items-center">
          <div className="w-[90%] md:w-[80%] md:h-[80vh]">
            <header className="flex justify-between items-center">
              <img src={iconImage} alt="chat_icon" className="w-[50px]" />
              <span className="font-[700] font-serif text-[20px] text-black">SynqChat</span>
            </header>
            <div className="py-6">
              <h3 className="text-center text-[25px] font-serif font-[700] py-9 md:py-0">Join SynqChat</h3>
              <img src={iconImage} alt="icon_image" className="w-[200px] mx-auto pb-9 md:pb-0" />
              <div className="flex justify-center pb-8 md:pb-4">
                <input
                  type="text"
                  placeholder="John..."
                  className="bg-[#C4C4C4] w-[80%] md:w-[50%] py-4 rounded-[15px] px-[20px] text-black"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="flex justify-center pb-8 md:pb-4">
                <input
                  type="text"
                  placeholder="Chat ID..."
                  className="bg-[#C4C4C4] w-[80%] md:w-[50%] py-4 rounded-[15px] px-[20px] text-black"
                  onChange={(event) => setRoom(event.target.value)}
                />
              </div>
              <div className="flex justify-center pt-[70px]">
                <Button onClick={joinRoom} type="button" style="bg-black text-white text-[16px] w-[80%] rounded-[10px] py-3">
                  Synq
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
};

export default UserCred;

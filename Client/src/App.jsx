import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import UserCred from "./components/UserCred";
import Chat from "./components/Chats";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/usercred"
          element={<UserCred setUsername={setUsername} setRoom={setRoom} />}
        />
        <Route
          path="/chat"
          element={
            username && room ? (
              <Chat username={username} room={room} />
            ) : (
              <Navigate to="/usercred" />
            )
          }
        />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;

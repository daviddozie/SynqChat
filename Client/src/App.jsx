import UserCred from "./components/UserCred";
import iconImage from "./assets/icon.png"
import Button from "./components/ReUsables/Button";
import { useState } from "react";
import Loader from "./utils/Loader";

const App = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [showUserCred, setShowUserCred] = useState(false);

  const handleNav = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowUserCred(true);
    }, 3000);
  }

  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      {showUserCred ? (
        <UserCred />
      ) : (
        <div className="w-[60%]">
          <h1 className="font-[700] font-serif text-[25px] text-center">Welcome to SynqChat</h1>
          <div className="flex justify-center py-7">
            <img className="w-[200px]" src={iconImage} alt="chat Icon" />
          </div>
          <p className="text-center font-[500] text-[18px]">Stay connected with your friends, family, and colleagues through real-time, seamless communication with SynqChat.</p>
          <div className="flex justify-center pt-9">
            <Button style={'bg-[#C4C4C4] text-center rounded-[5px] px-[40px] py-2 text-[16px] font-[500]'} type='button' onClick={handleNav}>Get Started</Button>
          </div>
        </div>
      )}
      {isLoading && <Loader />}
    </div>
  )
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatNavbar from './Components/Chat Navigation/ChatNavbar';
import LoginPage from './Components/Login Page/loginPage';
import NewChat from './Components/New Chat Screen/NewChat';
import PrevChat from './Components/Prev Chat Screen/PrevChat';
import SignupPage from './Components/Signup Page/Signup_Page';


function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="chat" element={ <PrevChat /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

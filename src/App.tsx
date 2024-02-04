import React from "react";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Sidebar from "./components/Sidebar";
import Chatarea from "./components/Chatarea";

const App = () => {
  return (
    <>
      {/* <div className="chat-container">
        <Sidebar />
        <Chatarea />
      </div> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/chat" element={<><Sidebar/><Chatarea/></>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  ); 
};

export default App;

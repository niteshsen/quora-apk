import React from "react";
import Header from "./header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./main";
import Notification from "./Noftfication/Notification";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
      
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/notification" element={<Notification/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

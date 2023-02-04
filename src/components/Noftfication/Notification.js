import React from "react";
import LeftNotification from "./leftNotification/LeftNotification";
import Midnoti from "./Midnoti";

import "./notification.css";
const Notification = () => {
  return ( 
    <>
     
      <div className="notify">
        <div className="secondnoti">
        
        <div className="holder">


        <LeftNotification/>
        <Midnoti/>
        
        </div>
   
        </div>
      </div>
      
     
    </>
  );
};

export default Notification;

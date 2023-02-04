import React from "react";
import { BsGlobe } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { FcDecision , FcSms} from "react-icons/fc";

import { CiBadgeDollar } from "react-icons/ci";
import "./AddQuest.css";
const LeftToggle = () => {
  return (
    <>
      <div className="forgot">
        <div className="mains">
          <div className="AddQuestionImage">
            <img src="image/AddQuestion.jpeg" alt="Loading" />
          </div>
          <AiFillCaretRight />
          <div className="groupPeople">
            <BsGlobe className="grpPl" />
            <span className="public">Public</span>
            <BsChevronDown className="bsDown" />
          </div>
        </div>

        <div className="post">
           Say Something...
        </div>
        <div className="printer">
        ...<FcDecision size={30}/> 
        </div>

        <div className="secondlastcss">
         <div className="bottomcssfirst">
            <div>Aa</div>
            <div className="mesingen"><FcSms size={32}/></div>
         </div>
          <div className="bottemsecond">
             <div className="doller"><CiBadgeDollar size={30}/></div>
             <div className="Postingprocess">Post</div>
             </div>
         </div>

      </div>
      
    </>
  );
};

export default LeftToggle;

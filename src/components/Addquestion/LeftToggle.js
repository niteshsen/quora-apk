import React from "react";
import { GrGroup } from "react-icons/gr";
import { AiFillCaretRight } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
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
            <GrGroup className="grpPl" />
            <span className="public">Public</span>
            <BsChevronDown className="bsDown" />
          </div>
        </div>

        <div className="hellojs">
          Start your question with "What","How","Why", etc.
        </div>
        <div className="shreeRam">    
        </div>
         <div className="real">
            <span>Cancel</span>
             <div className="AddButton">Add question</div>
         </div>

      </div>
      
    </>
  );
};

export default LeftToggle;

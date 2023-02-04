import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

import "./AddQuest.css";
import LeftToggle from "./LeftToggle";
import Righttoggle from "./Righttoggle";


const Addquestion = ({ setGetvalue }) => {


  const [addQuestion, setAddQuestion]= useState()
  return (
    <>


      <div className="exactmid">
        <div className="containers">
          <div className="onemoretime">



          
            <div className="exactmidone">
              <div className="Back">
                <RxCross1   onClick={()=> setGetvalue(false)} />
              </div>
              <div className= {`${addQuestion ==="addquestion" &&  "ques"} gbhg`}  onClick={()=>setAddQuestion("addquestion")}>Add Question</div>
              <div className={`${addQuestion === "createPost" && "create"} Tsop `} onClick = {()=>setAddQuestion("createPost")}>Create Post</div>
            </div>
             {addQuestion === "addquestion" ?  <LeftToggle/> : <Righttoggle/> }





          </div>   
        </div>
      </div>



    </>
  );
};

export default Addquestion;

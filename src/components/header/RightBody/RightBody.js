import React, { useState } from "react";
import rightBodyData from "./rightbodyData";
import "./rightbody.css";
const RightBody = () => {


  const [rightfeedData, setrightfeedData] = useState(rightBodyData )
  return (
    <>
      <div className="right-main-upper">
        <div className="second-main-upper">
          {/* 1st part */}

          <div className="space">Spaces to follow</div>
          {/* 1st part end */}
      {
        rightBodyData.map((element)=>{
          const {id , img, title, para} = element;
          return(
            <>
            <div className="programmers" id={id}>
            <div className="image">
              <img src={img} alt="Loading" />
            </div>
            <div className="cafe">
              <div className="share">{title}</div>
              <div className="idea">{para}</div>
            </div>
          </div>
            </>
          )
        })
      }
          



          {/* 2nd part end */}
        </div>
      </div>
    </>
  );
};

export default RightBody;

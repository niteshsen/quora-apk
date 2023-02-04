import React, { useState } from "react";
import LeftDataBody from "./LeftBodyData";
import "./Leftbody.css";
const Leftbody = () => {
  const [LeftFeedData, setLeftFeedData] = useState(LeftDataBody);
  return (
    <>
      <div className="leftmain-body">
        <div className="leftmain-second">
          {/* 1st part */}

          <div className="CreateSpace">
            <div className="plus">+</div>
            <div className="spaceX">Create Space</div>
          </div>
          {/* ist part ends here */}
          {LeftFeedData.map((eleme) => {
            const { id, img, title } = eleme;
            return (
              <>
                <div className="unboxing" id={id}>
                  <img src={img} alt="loading" className="JEE" />
                  <div className="Jee">{title}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Leftbody;

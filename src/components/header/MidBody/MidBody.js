import React, { useState } from "react";
import "./Midbody.css";
import { RiEditBoxLine, RiQuestionnaireLine } from "react-icons/ri";
import { BiPencil, BiUpvote, BiDownvote } from "react-icons/bi";
import { BiMessageRounded } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineSync } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import FeedData from "./Feeds";
import Addquestion from "../../Addquestion/Addquestion";
const Midbody = () => {
  const [dataFeed, setdataFeed] = useState(FeedData);
 



  const [getvalue , setGetvalue] = useState(false)
  const hover = ()=>{
    return(
     setGetvalue(true)
    )
  }
  return (
    <>
      <div className="quora-mid-body">

     

        <div className="mid-body-top">

        {getvalue === true && <Addquestion   setGetvalue={setGetvalue } / >}
          <div className="upper" >
            <img src="images/profile.jpeg" alt="Loading" />
            <div className="input" onClick={hover}>
              <span style={{ color: "#f1f2f3" }}> h</span> What do you want to
              ask or share
            </div>
          </div>


          <div className="top-bottom">
            <div className="question">
              <RiQuestionnaireLine className="icon" />
              <div>Ask</div>
            </div>
            <div className="break">|</div>

            <div className="answer">
              <RiEditBoxLine className="icon" />
              <div>Answer</div>
            </div>
            <div className="break">|</div>

            <div className="post">
              <BiPencil className="icon" />
              <div>Post</div>
            </div>
          </div>
        </div>

        {/* anoterh card  */}

        {dataFeed.map((elem) => {
          const {id,titleImage,img,title,heading,para,post,date} = elem;
          return (
            <>
              <div className="extrad" >
                <div className="againone" >
                  <div className="firstDiv">
                    <div className="secondDiv" id={id} >
                      <img src={titleImage} alt="Loading" />
                      <div className="five">
                        <div className="third">
                          <div className="stoi">{title}</div>
                          <a href="/" className="follow">
                            follow
                          </a>
                        </div>
                        <div className="fourth">
                          <div>{post}</div>
                          <div className="oct">{date}</div>
                        </div>
                      </div>
                    </div>
                    <div className="gap">
                      <BsThreeDots className="bstheedots" />
                      <RxCross2 className="rxCross" />
                    </div>
                  </div>
                  <div className="passage">
                    <div className="heading">
                      {heading}
                    </div>
                    <div className="para">
                   {para}
                    </div>
                  </div>
                </div>
                <div className="feedone">
                  <img src={img} alt="Loading..." />
                </div>

                {/* image part end */}

                <div className="voting-part">
                  <div className="endvoting">
                    <div className="upvote">
                      <BiUpvote className="adjusting  color" />
                      <div className="upvotecount">7.1K</div>
                    </div>
                    <BiDownvote className="adjusting hello" />
                  </div>

                  <div className="message hover">
                    <BiMessageRounded />
                    <div className="messagenumber">353</div>
                  </div>

                  <div className="reverce hover">
                    <AiOutlineSync />
                    <div className="revercenumber">130</div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Midbody;

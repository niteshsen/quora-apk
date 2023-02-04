
import React, { useState } from "react";
import { VscHome } from "react-icons/vsc";

import { RiEditBoxLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsPeople } from "react-icons/bs";
import { AiOutlineSearch , AiOutlineProfile} from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";


import "./header.css";





const Header = () => {

  const [activeNoti , setActiveNoti] = useState()
  return (
    <>
      <header>
        <div className="header-compenent">
          <div className="quoraLogo">
            <img src="images/quora.png" alt="Loading" />
          </div>
          <div className="home">
            <NavLink to="/" className={`${activeNoti === "homes" && "home again"} Link`} onClick={()=>setActiveNoti("homes")}>
              <VscHome size={30} className="vshome" />
            </NavLink>
          </div>
          <div className="profile">
            <NavLink to="/" className={`${activeNoti === "profile" && "profile onActive"} Link`} onClick ={()=>setActiveNoti("profile")}>
              <AiOutlineProfile size={30} />
            </NavLink>
          </div>

          <div className="boxline">
            <NavLink to="/" className={`${activeNoti === "boxline" && "boxline onActive"} Link`} onClick = {()=>setActiveNoti("boxline")}>
              <RiEditBoxLine size={30} />
            </NavLink> 
          </div>
          <div className="spaces">
            <NavLink to="/" className={`${activeNoti === "spaces" && "spacex onActive"} Link`} onClick = {()=>setActiveNoti("spaces")}>
              <BsPeople size={30} />
            </NavLink>
          </div>
          <div className="notification">
            <NavLink to="/notification" className={`${activeNoti === "notification" && "notification onActive"} Link`} onClick = {()=> setActiveNoti("notification")}>
              <IoIosNotificationsOutline size={30} />
            </NavLink>
          </div>

          <div className="nav">
            <div className="input">
              <AiOutlineSearch size={30} className="search" />
              <input type="text" name="" id="" placeholder="Search quora" />
            </div>
          </div>



          <AiOutlineSearch   size={30} className="willSee"/>


          
          <div className="addQuora">
            <NavLink to="/" className="Link">
              <span className="try">Try Quora+</span>
            </NavLink>
          </div>

          <div className="profile-logo">
            <NavLink to="/" className="Link ProfileImage">
              <img
                src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
                alt="loading"
              />
            </NavLink>
          </div>
          <div className="earth">
            <NavLink to="/" className={`${activeNoti === "earth" && "earth onAactive"} Link`} onClick = {()=> setActiveNoti("earth")}>
              <CiGlobe size={30} />
            </NavLink>
          </div>

          <div className="addPoint">
            <NavLink to="/" className="adding">
              <span className="add">Add question</span>
            </NavLink>
            <BsChevronDown fontWeight={900} size={15} />
          </div>
        </div>
      </header>



    
    </>
  );
};

export default Header;

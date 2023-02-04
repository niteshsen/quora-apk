import React, { useState } from "react";
import { BsThreeDots } from 'react-icons/bs';
import { FcOk } from 'react-icons/fc';
const Midnoti = () => {


  const [getoggle ,setgetToggle] = useState()

  return (
    <>
      <div className="noti">

     
        <div className="Notilyfy">
          <div className="notilyfyone">Notifaction</div>
          <div className="marked">Marked All As Read . Setting</div>
        </div>


        <div className={`${getoggle === "maha" && "eight"} seventh`} onClick ={()=> setgetToggle("maha")}>

             <div className="HinduEpic">
               <div className="maha">
                 <img src="./image/mahabharat.jpeg" alt="loading" />
               </div>
               <div className="maraparamain">
                 <div className="mahapara">
                   Mahabharat- A Hindu Epic . Posted in a Space you might like .Wed
                 </div>
                 <div className="Arjun">
                   How Did Arjun Defeat All the Great Warriors in Virat Yudhdh
                   singly-handeled but not in the Mahabharat Yudhdh?
                 </div>
               </div>
             </div>
        <BsThreeDots size={50} className="dots"/>
        </div>


        <div className={`${getoggle === "thou" && "eight"} seventh`} onClick ={()=> setgetToggle("thou")}>
          
        <div className="HinduEpic">
               <div className="maha">
                 <img src="./image/thou.jpeg" alt="loading" />
               </div>
               <div className="maraparamain">
                 <div className="mahapara">
                   Nitesh Sen's Space - january 25
                 </div>
                 <div className="Arjun">
                   Get Nitesh Sen's Space started with a Post
                 </div>
                 <div className="share">
                    Share a thought , post a photo or explain what your Space is About.
                 </div>
               </div>
             </div>
        <BsThreeDots size={35} className="dots"/>
    </div>
         

         
    <div className={`${getoggle === "hind" && "eight"} seventh`} onClick ={()=> setgetToggle("hind")}>

             <div className="HinduEpic">
               <div className="maha">
                 <img src="./image/midvocab.jpeg" alt="loading" />
               </div>
               <div className="maraparamain">
                 <div className="mahapara">
                   English Words . Posted in a Space you might like  . January 25
                 </div>
                 <div className="Arjun">
                 <FcOk/> Daily The Hindu Vocabulary |  12.01.2023
                 </div>
               </div>
             </div>
        <BsThreeDots size={35} className="dots"/>
        </div>
        

        <div className={`${getoggle === "joke" && "eight"} seventh`} onClick ={()=> setgetToggle("joke")}>

             <div className="HinduEpic">
               <div className="maha">
                 <img src="./image/jokesImage.jpeg" alt="loading" />
               </div>
               <div className="maraparamain">
                 <div className="mahapara">
                   Jokes, Homour & Funny stories 🤣 😍 🤡 😻 . Answered in a Space you might like . January 18
                 </div>
                 <div className="Arjun">
                 <FcOk/> Which is coolest line a pilot has said to the passengers ?
                 </div>
               </div>
             </div>
        <BsThreeDots size={35} className="dots"/>
        </div>


        <div className={`${getoggle === "vovav" && "eight"} seventh`} onClick ={()=> setgetToggle("vovav")}>

             <div className="HinduEpic">
               <div className="maha">
                 <img src="./image/midvocab.jpeg" alt="loading" />
               </div>
               <div className="maraparamain">
                 <div className="mahapara">
                 Daily dose of Vocabulary
                 </div>
                 <div className="Arjun">
                  Word #1401 - Anglow
                 </div>
                 <div className="share">
                    Read this and 15 more few items.
                 </div>
               </div>
             </div>
        <BsThreeDots size={35} className="dots"/>
        </div>


        
        <div className={`${getoggle === "vovav" && "eight"} seventh`} onClick ={()=> setgetToggle("vovav")}>

             <div className="HinduEpic">
               <div className="maha">
                 <img src="./image/midvocab.jpeg" alt="loading" />
               </div>
               <div className="maraparamain">
                 <div className="mahapara">
                 Daily dose of Vocabulary
                 </div>
                 <div className="Arjun">
                  Word #1401 - Anglow
                 </div>
                 <div className="share">
                    Read this and 15 more few items.
                 </div>
               </div>
             </div>
        <BsThreeDots size={35} className="dots"/>
        </div>



        
        <div className={`${getoggle === "vovav" && "eight"} seventh`} onClick ={()=> setgetToggle("vovav")}>

             <div className="HinduEpic">
               <div className="maha">
                 <img src="./image/midvocab.jpeg" alt="loading" />
               </div>
               <div className="maraparamain">
                 <div className="mahapara">
                 Daily dose of Vocabulary
                 </div>
                 <div className="Arjun">
                  Word #1401 - Anglow
                 </div>
                 <div className="share">
                    Read this and 15 more few items.
                 </div>
               </div>
             </div>
        <BsThreeDots size={35} className="dots"/>
        </div>


        
        <div className={`${getoggle === "vovav" && "eight"} seventh`} onClick ={()=> setgetToggle("vovav")}>

             <div className="HinduEpic">
               <div className="maha">
                 <img src="./image/midvocab.jpeg" alt="loading" />
               </div>
               <div className="maraparamain">
                 <div className="mahapara">
                 Daily dose of Vocabulary
                 </div>
                 <div className="Arjun">
                  Word #1401 - Anglow
                 </div>
                 <div className="share">
                    Read this and 15 more few items.
                 </div>
               </div>
             </div>
        <BsThreeDots size={35} className="dots"/>
        </div>

     
        



      </div>
    </>
  );
};

export default Midnoti;

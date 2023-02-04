import React from 'react';

import Leftbody from '../header/LeftBody/LeftBody';
import Midbody from '../header/MidBody/MidBody';
import RightBody from '../header/RightBody/RightBody';

import "./main.css"
export const Home = () => {
    return (
        <div className='main'>
            <div className='left-div'>
                <Leftbody></Leftbody>
            </div>
            <div className='middle-div'>
              <Midbody></Midbody>
            </div>
            <div className='right-div'>
                <RightBody></RightBody>
            </div>
        </div>
    )
}
import "./intro.css"
import React from 'react';
import kgHeadshot from '/Users/kellygu/workspace/personal-portfolio/kelly-web/src/images/headshot.png';

export default function Intro(){
    return(
        <div className="intro" id="intro">
            <div className="left"></div>
            <div className="right">
                <img src={kgHeadshot} className="imgContainer" alt="Kelly Img" />
                
            </div>
                
        </div>
    )
}
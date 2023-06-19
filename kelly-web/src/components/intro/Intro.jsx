import "./intro.css"
import React from 'react';
import kgHeadshot from '/Users/kellygu/workspace/personal-portfolio/kelly-web/src/assets/images/headshot.png';
import { FiFileText } from 'react-icons/fi';
import { FaComment } from 'react-icons/fa';
import resume from '/Users/kellygu/workspace/personal-portfolio/kelly-web/src/assets/documents/KGu_CSResume.pdf'


export default function Intro(){
    return(
        <div className="intro" id="intro">
            <div className="left"></div>
                <div className="aboutMe">
                    <h2>about me</h2>
                    <p> 
                        hey there! welcome to my personal portfolio. my name is 
                        kelly gu (goo), and i am currently an undergraduate student 
                        at the university of virginia. i am majoring in computer 
                        science with a double minor in data science and general
                        business. 
                    </p>
                    <p>
                        this summer (2023), i am focusing on developing my experience
                        in computer science by creating as many personal 
                        projects that incorporate many of my different interests.
                        other than that, i am preparing for my role as the new 
                        president of the chinese student association at my university.
                    </p>
                    <p>
                        in addition, in my free time, i love making adventurous 
                        memories with my family and friends, playing the guzheng,
                        dancing, watching a plethora of shows/films (i am open to
                        recommendations!), spending time in nature, taking photos,
                        baking, and of course, taking naps :D 
                    </p>
                    <p>
                        i am searching for the next opportunity to apply my skills, 
                        whether it be in research, interning, or working. i am open
                        to any experience that will allow me to learn and develop my
                        personal and/or professional skills. for a more detailed look 
                        into my experience and skills, just click on the resume button!
                    </p>
                    <p>
                        thank you so much for taking the time to stop by and check
                        out my portfolio. feel free to reach out to me anytime if 
                        you would like to discuss about absolutely anything and 
                        everything! 
                    </p>
                </div>
              
                <a href={resume} download className='resumeButton'>
                    <FiFileText className="docIcon"  />
                    <span>&nbsp;resume</span>
                </a>
                <a href="#contact" className='contButton'>
                    <FaComment className="talkIcon" />
                    <span>&nbsp;let's chat</span>
                </a>
        
            <div className="right">
                <img src={kgHeadshot} className="imgContainer" alt="Kelly Img" />
            </div>
                
        </div>
    )
}
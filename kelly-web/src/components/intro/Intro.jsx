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
                        kelly gu (goo), and i am an undergraduate student 
                        at the university of virginia, majoring in computer 
                        science with double minors in data science and general
                        business. 
                    </p>
                    <p>
                        this summer (2023), i am dedicated on enhancing my experience
                        in computer science by working on various personal 
                        projects that align with my diverse interests.
                        additionally, i am thrilled to take on the new role of president of
                        the chinese student association at my unviersity. i have been 
                        actively planning a variety of events to promote the ongoing growth
                        and development of our inclusive organization.
                    
                    </p>
                    <p>
                        during my free time, i enjoy creating unforgettable memories 
                        with my family and friends, playing the guzheng,
                        dancing, exploring a wide range of shows/films (i am open to
                        recommendations!), immersing myself in nature, taking photos,
                        baking, and of course, indulging in an occasional nap :D 
                    </p>
                    <p>
                        i am currently seeking for the next opportunity to apply my skills, 
                        whether it be in research, interning, or working. i am open
                        to any experience that will enable me to learn and develop both
                        my personal and professional skills. for a more detailed look 
                        into my experience and skills, simply click on the resume button!
                    </p>
                    <p>
                        thank you so much for taking the time to check
                        out my portfolio. please feel free to reach out to me anytime if 
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
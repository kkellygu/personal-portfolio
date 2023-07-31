import "./portfolio.css"
import { useState } from "react";
import portIcon from '/Users/kellygu/workspace/personal-portfolio/kelly-web/src/assets/images/portfolioImg.png';
import arrowIcon from '/Users/kellygu/workspace/personal-portfolio/kelly-web/src/assets/images/arrow.jpeg'
import appIcon from '/Users/kellygu/workspace/personal-portfolio/kelly-web/src/assets/images/checklist.png'

export default function Portfolio(){
    const [currentSlide, setCurrentSlide] = useState(0)
    const data =[
        {
            id:"1",
            icon: portIcon,
            title:"Personal Portfolio",
            desc:"An independently developed personal portfolio web application. Built with React, CSS, and JavaScript, this dynamic and visually captivating interface features content from various aspects of my life. With a primary focus on my computer science journey, explore the different dimensions of my life's experiences.",
            img:portIcon,

        },
        /*{
            id:"2",
            icon:appIcon,
            title:"BeProductive",
            desc:"An app that will make you want to be productive... COMING SOON",
            img: appIcon,
        },*/
        {
            id:"2",
            icon:appIcon,
            title:"Coming Soon...",
            desc:"",
            img: appIcon,
        },
        {
            id:"3",
            icon:appIcon,
            title:"Coming Soon...",
            desc:"",
            img: appIcon,
        }

    ];

    const handleClick = (way) => {
        if (way === "left") {
          setCurrentSlide((currentSlide - 1 + data.length) % data.length);
        } else {
          setCurrentSlide((currentSlide + 1) % data.length);
        }
      };
    return(
        <div className="portfolio" id="portfolio">
            <div 
             className="slider" 
             style={{ transform: `translateX(-${currentSlide * (100 / data.length)}%)` }}
             >
                {data.map((d) => (
                <div className="portContainer">
                    <div className="items">
                        <div className="leftTwo">
                            <div className="leftContainer">
                                <div className="imgContainer2">
                                    <img src={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>        
                        </div>
                        <div className="right">
                            <img
                                src={d.img}
                                alt=""
                            />
                        </div>
                    </div>
                    
                </div>))}
            </div>
            <img src={arrowIcon} className="arrow left" alt="" onClick={() => handleClick("left")}/>
            <img src={arrowIcon} className="arrow right" alt="" onClick={() => handleClick()}/>
        </div>   
    )
}
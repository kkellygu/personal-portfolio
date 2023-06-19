import "./home.css"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
//import { Typewriter } from 'typewriter-effect'

export default function Home(){
    
    const textRef = useRef();
    useEffect(() =>{
        init(textRef.current,{
            showCursor: true,
            backDelay: 3000,
            typeSpeed: 75,
            strings: ["student | computer scientist | leader | artist"],
        })
    },[])

    return(
        <div className="home" id="home">
            <div className ="wrapper">
                <div className="nameWrapper">
                    <div className="firstName">
                        <h1>
                            <span className="firstName">kelly</span>
                            <span className="lastName">&nbsp;gu</span>
                        </h1>
                    </div>
                </div>
                <div className ="roles">
                    <h2>
                        <span ref={textRef}></span>
                    </h2>
                </div> 
            </div>
        </div>
    )
}
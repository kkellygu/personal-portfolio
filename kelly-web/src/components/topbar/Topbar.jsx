import "./topbar.css"
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLogoLinkedin } from 'react-icons/io';



export default function Topbar({menuOpen, setMenuOpen}) {

    const linkedinUrl = 'https://www.linkedin.com/in/kellygu3610/';

    return(
        <div className = {"topbar " +(menuOpen &&"active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="logo">kellz.rgdance</a>
                    <div className="itemContainer">
                        <FaPhone className="icon" />
                        <span>703 984 9533</span>
                    </div>
                    <div className="itemContainer">
                        <MdEmail className="icon" />
                        <span>kkellygu1006@gmail.com</span>
                    </div>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <div className="itemContainer">
                            <IoLogoLinkedin className="icon" />
                            <span>linkedin/kellygu3610</span>
                        </div>
                    </a>
                </div>
                <div className="right"></div>
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
            </div>
        </div>
    )
}
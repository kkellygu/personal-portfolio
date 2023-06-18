import "./topbar.css"
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


export default function Topbar() {
    return(
        <div className = "topbar">
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
                </div>
                <div className="right"></div>
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
            </div>
        </div>
    )
}
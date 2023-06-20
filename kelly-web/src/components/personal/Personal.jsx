import "./personal.css"
import standin from '/Users/kellygu/workspace/personal-portfolio/kelly-web/src/assets/images/IMG_9660.JPG';
import {  useState } from "react";

export default function Personal(){
    const [selected, setSelected] =useState("CSA")
    const list = [
        {
            id: "CSA",
            title: "csa",
        },
        {
            id: "AKDPHI",
            title: "aKDPhi",
        },
        {
            id: "GUZHENG",
            title: "guzheng",
        },
        {
            id: "DANCE",
            title: "dance",
        },
        {
            id: "PHOTOGRAPHY",
            title: "photography",
        },
    ];

    return(
        <div className="personal" id="personal">
            <h1>extracurriculars</h1>
            <ul>
                {list.map(item =>(
                   <li key={item.id} className={selected === item.id ? "active" : ""} onClick={() => setSelected(item.id)}>
                   {item.title}
                 </li>
                ))}
            </ul>
            
            <div className="container">
                <div className="item">
                    <img src={standin} alt="whoop" />
                    <h3>presidency</h3>
                </div>
                <div className="item">
                    <img src={standin} alt="whoop" />
                    <h3>presidency</h3>
                </div>
                <div className="item">
                    <img src={standin} alt="whoop" />
                    <h3>presidency</h3>
                </div>
                <div className="item">
                    <img src={standin} alt="whoop" />
                    <h3>presidency</h3>
                </div>
                <div className="item">
                    <img src={standin} alt="whoop" />
                    <h3>presidency</h3>
                </div>
                <div className="item">
                    <img src={standin} alt="whoop" />
                    <h3>presidency</h3>
                </div>
            </div>
        </div>
    )
}
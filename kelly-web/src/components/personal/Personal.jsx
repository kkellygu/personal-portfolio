import "./personal.css"
import {  useState, useEffect } from "react";
import { csaPage, akdphiPage, guzhengPage, dancePage, photographyPage} from "../../data.js"

export default function Personal(){
    const [selected, setSelected] =useState("CSA")
    const [data, setData] = useState([])
    const list = [
        { id: "CSA", title: "csa", },

        { id: "AKDPHI", title: "aKDPhi", },

        { id: "GUZHENG", title: "guzheng", },

        { id: "DANCE", title: "dance", },

        { id: "PHOTOGRAPHY", title: "photography", },
    ];

    useEffect(()=>{
        switch(selected){
            case "CSA":
                setData(csaPage);
                break;
                case "AKDPHI":
                setData(akdphiPage);
                break;
                case "GUZHENG":
                setData(guzhengPage);
                break;
                case "DANCE":
                setData(dancePage);
                break;
                case "PHOTOGRAPHY":
                setData(photographyPage);
                break;
                default:
                setData(csaPage);
        }
    },[selected])

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
                {data.map((d) => (
                <div className="item">
                    <img src={d.img} alt="whoop" />
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>
        </div>
    )
}
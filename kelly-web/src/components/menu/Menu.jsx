import "./menu.css"

export default function Menu({menuOpen, setMenuOpen}){
    return(
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}> 
                    <a href="#home">home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}> 
                    <a href="#intro">intro</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}> 
                    <a href="#portfolio">portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}> 
                    <a href="#skills">skills</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}> 
                    <a href="#personal">personal</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}> 
                    <a href="#contact">contact</a>
                </li>
            </ul>
        </div>
    )
}
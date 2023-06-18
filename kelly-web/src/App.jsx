import Topbar from "./components/topbar/Topbar"; 
import Home from "./components/home/Home";
import Intro from "./components/intro/Intro"; 
import Personal from "./components/personal/Personal"; 
import Portfolio from "./components/portfolio/Portfolio"; 
import Skills from "./components/skills/Skills"; 
import Contact from "./components/contact/Contact"; 
import "./app.css"
import { useState } from "react";

function App() {
  const[menuOpen,setMenuOpen]=useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
      <div className="sections">
        <Home/>
        <Intro/>
        <Portfolio/>
        <Skills/>
        <Personal/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
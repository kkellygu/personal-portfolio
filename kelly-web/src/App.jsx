import Topbar from "./components/topbar/Topbar"; 
import Intro from "./components/intro/Intro"; 
import Personal from "./components/personal/Personal"; 
import Portfolio from "./components/portfolio/Portfolio"; 
import Skills from "./components/skills/Skills"; 
import Contact from "./components/contact/Contact"; 
import "./app.css"

function App() {
  return (
    <div className="app">
      <Topbar/> 
      <div className="sections">
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

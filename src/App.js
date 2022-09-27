import './App.css'
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import Navigation from "./components/navigation/navigation";
import Hero from "./components/hero/hero";
import Education from "./components/education/education";
import Skills from "./components/education/skills";
import Projects from "./components/projects/projects";

function App() {

  return (
    <div className="App">
    <header>
      <Navigation />
    </header>
        <main>
            <div className="hero container">
                <Hero />                
            </div>
            <div className="about container" id="about">                
                <About />
            </div>           
           <div className="education container" id="education">
                <div className="inner">
                    <Education />
                </div>
               
                <div className="inner">
                    <Skills />
                </div>
                        
           </div>
           
           <h2>MY PROJECTS</h2>
           <div className="projects-container" id="projects">
               <Projects />
           </div>
           
           
           <div className="contact container" id="contact">
                <Contact/>
            </div>
                   
                    
        </main>
        
      
    </div>
  );
}

export default App;

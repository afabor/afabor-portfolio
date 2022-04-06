import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="sections">
        <Intro />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;

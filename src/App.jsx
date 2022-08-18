import { useState } from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import Toggle from "./components/Toggle";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className="App">
      <Toggle setDark={setDark} />
      <NavBar />
      <div className="sections">
        <Intro dark={dark} />
        <Projects dark={dark} />
        <Contact dark={dark} />
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useRef } from "react";
import "./intro.css";
import { init } from "ityped";

export default function Intro({ url }) {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 300,
      backSpeed: 100,
      strings: [
        " Full-Stack Developer",
        " React Designer",
        " PERN Stack Developer",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="container">
        <h2>Hi, my name is</h2>
        <h1>Michael Ovie-Afabor</h1>
        <h3>
          I'm a<span ref={textRef}> </span>
        </h3>
        <div>
          <p>
            I have recently graduated from a 16 week bootcamp with School of
            Code.
          </p>
          <p>Working regularly in agile teams.</p>
          <button>
            <a href="#projects">View Work</a>
          </button>
        </div>
      </div>
      <div className="skills">
        <h1>Key Skills</h1>
        <div className="skill-image">
          <figure>
            <img src="CSS-Images/css.jpg" alt="css " />
          </figure>
        </div>
      </div>
    </div>
  );
}

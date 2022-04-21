import React, { useEffect, useRef } from "react";
import "./index.css";
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
          <button url="#projects">View Work</button>
        </div>
      </div>
    </div>
  );
}

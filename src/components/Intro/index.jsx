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
      <div className="intro-container">
        <h2>Hi, my name is</h2>
        <h1>Michael Ovie-Afabor</h1>
        <h3>
          I'm a<span ref={textRef}> </span>
        </h3>
        <div>
          <p>
            I have graduated from a 16 week bootcamp with School of Code and a
            12 Week Bootcamp with Skills City.
          </p>
          <p>
            With a passion for professional front-end designs, I am looking to
            boost my career prospects in tech.
          </p>
          <button className="intro-button">
            <a href="#projects">View Work</a>
          </button>
        </div>
        {/* <div class="custom-shape-divider-bottom-1659691707">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div> */}
      </div>
    </div>
  );
}

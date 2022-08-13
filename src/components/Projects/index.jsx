import React from "react";
import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      {/* <h1>Projects</h1>
      <ul>
        <li>Boot Camper Portal</li>
        <li>My Tribe Mobile App</li>
      </ul> */}
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left"></div>
            <div className="right"></div>
            {/* <img
              src="https://designshack.net/wp-content/uploads/placeholder-image-368x246.png"
              alt="Week 9 Project"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

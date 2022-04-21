import React from "react";
import "./index.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <ul>
        <li>Boot Camper Portal</li>
        <li>My Tribe Mobile App</li>
        <div className="container">
          <div className="item">
            <img
              src="https://designshack.net/wp-content/uploads/placeholder-image.png"
              alt="Week 9 Project"
            />
            <h3>Boot Camper Portal</h3>
          </div>
        </div>
      </ul>
    </div>
  );
}

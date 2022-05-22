import React from "react";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <ul>
        <li>Boot Camper Portal</li>
        <li>My Tribe Mobile App</li>
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://designshack.net/wp-content/uploads/placeholder-image-368x246.png"
            alt="Week 9 Project"
          />
          <h3>Boot Camper Portal</h3>
        </div>
      </div>
    </div>
  );
}

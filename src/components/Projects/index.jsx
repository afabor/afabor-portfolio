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
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/web.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>Description</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="assets/project1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" />
      <img src="assets/arrow.png" className="arrow right" alt="" />
    </div>
  );
}

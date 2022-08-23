import React from "react";
import "./skills.scss";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="container">
        <div>
          <h1 className="title">Skills</h1>
          <p>These are technologies I have worked with</p>
        </div>
        <div className="skillsContainer">
          <img className="icon" src="assets/html-5.png" />
        </div>
      </div>
    </div>
  );
}

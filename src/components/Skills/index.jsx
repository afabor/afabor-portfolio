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
          <img className="icon" src="assets/html-5.png" alt="html-5" />
          <img className="icon" src="assets/css.png" alt="css" />
          <img className="icon" src="assets/sass.png" />
          <img className="icon" src="assets/js.png" alt="javascript" />
          <img className="icon" src="assets/react.png" alt="react" />
          <img className="icon" src="assets/node-js.png" alt="node js" />
          <img className="icon" src="assets/firebase.png" alt="firebase" />
          <img className="icon" src="assets/postgre.png" alt="postgreSQL" />
        </div>
      </div>
    </div>
  );
}

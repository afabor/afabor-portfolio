import React from "react";
import "./navbar.css";
import { MailOutlined, UserOutlined } from "@ant-design/icons";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            afabor.
          </a>
        </div>
        <div className="right">
          <div className="itemContainer">
            <a href="#intro">About</a>
          </div>
          <div className="itemContainer">
            <a href="#projects">Projects</a>
          </div>
          <div className="itemContainer">
            <a href="#contact">Contact</a>
          </div>
          <div className="itemContainer">
            <a id="cv-button" href="#">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

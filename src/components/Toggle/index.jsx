import React from "react";
import "./toggle.scss";

export default function Toggle() {
  return (
    <div className="toggle">
      <img src="assets/sun.png" alt="sun" className="icon" />
      <img src="assets/moon.png" alt="moon" className="icon" />
      <div className="toggleButton"></div>
    </div>
  );
}

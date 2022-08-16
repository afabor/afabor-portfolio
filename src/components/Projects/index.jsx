import React, { useState } from "react";
import "./projects.scss";
import { data } from "../../sliderData";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleClick(direction) {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  }
  return (
    <div className="projects" id="projects">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((data) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={data.icon} alt="" />
                  </div>
                  <h2>{data.title}</h2>
                  <p>{data.desc}</p>
                  <h3>Technologies Used:</h3>
                  <span>{data.tech}</span>
                </div>
              </div>
              <div className="right">
                <img src={data.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}

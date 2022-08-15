import React from "react";
import "./projects.scss";
import { data } from "../../data";

export default function Projects() {
  const data = [
    {
      id: "1",
      icon: "assets/web.png",
      image: "assets/project1.png",
      title: "Bootcamper Portal App",
      desc: "This app was created as a group to improve the experience of fellow bootcampers. We created an app where bootcampers can provide better feedback to each session as well as get additional links for topics that have been covered",
      tech: "React Posgres",
    },

    {
      id: "2",
      icon: "assets/mobile.png",
      image: "assets/project2.png",
      title: "MyTribe Family App,",
      desc: "The MyTribe app was created to organise family chores and responsibilities. This was my first experience using React Native",
      tech: "React Native Firebase",
    },
    {
      id: "3",
      icon: "assets/mobile.png",
      image: "assets/project3.png",
      title: "Weather App",
      desc: "This app was created to collect data from a Weather API. I mainly focused on experimenting with different styling and using APIs to fetch data ",
      tech: "React",
    },
    {
      id: "4",
      icon: "assets/web.png",
      image: "assets/project4.png",
      title: "News App",
      desc: "This app was created to collect data from a News API. This was also another opportunity to focus on styling and fetching data",
    },
  ];

  return (
    <div className="projects" id="projects">
      <div className="slider">
        {/* {data.map((d) => { */}
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt="" />
                </div>
                <h2>TITLE</h2>
                <p>DESCRIPTOON</p>
                <h3>Technologies Used:</h3>
                <span>TECH</span>
              </div>
            </div>
            <div className="right">
              <img src="assets/project4.png" alt="" />
            </div>
          </div>
        </div>
        {/* })} */}
      </div>

      <img src="assets/arrow.png" className="arrow left" alt="" />
      <img src="assets/arrow.png" className="arrow right" alt="" />
    </div>
  );
}

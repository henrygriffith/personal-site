import React from "react";

const Project = props => {
  const { page } = props;
  const names = ["SVG Board", "AcademyLine", "Shapescape", "Grace Shopper"];
  const descriptions = [
    "A collaborative whiteboard web application that uses scalable vector graphics for drawing and designing. Supports real-time collaboration via websockets. Extends to the user numerous nifty tools to demonstrate his/her creativity",
    "An Oscars polling website designed to collect user-submitted input during Oscars season. Has a dedicated leaderboard that displays results as we receive information about category winners",
    "A webVR playground made over the DOM using A-Frame, 3-D models and an underlying physics engine. Users can spawn shapes and play with the physics of the environment. Utilizes WASD keys and click-and-drag motion control",
    "A standard but quirky e-commerce website equipped with checkout, search-by-product, and admin exclusive capabilities. Thousands of randomly generated items 'for sale'. It was made in a single week"
  ];
  const techStack = [
    [
      "JavaScript",
      "HTML",
      "SVGs",
      "CSS",
      "React",
      "Websockets",
      "MongoDB",
      "Semantic UI"
    ],
    ["JavaScript", "CSS", "React", "PostgreSQL", "Express", "Sequelize"],
    ["JavaScript", "HTML", "A-Frame", "Three.js", "Cannon.js"],
    [
      "JavaScript",
      "CSS",
      "React",
      "Redux",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "Semantic UI",
      "Stripe",
      "OAuth"
    ]
  ];
  const links = [
    [
      "https://github.com/Borderline1/WhiteBoardApp",
      "https://svg-board.herokuapp.com/"
    ],
    [
      "https://github.com/byte-lines/academyline",
      "http://oscarspoll.herokuapp.com/"
    ],
    [
      "https://github.com/henrygriffith/aframe-stackathon",
      "https://shapescape.glitch.me/"
    ],
    [
      "https://github.com/Team-Papaya/grace-shopper",
      "http://papas-attic.herokuapp.com/"
    ]
  ];
  return (
    <div className="project">
      <div className="project-half project-top">
        <img className="proj-img"></img>
        <div id="proj-logistics-box">
          <div className="proj-link-menu">
            <a
              className="proj-link"
              href={links[page][1]}
              target="_blank"
              rel="noopener noreferrer"
            >
              Try it!
            </a>
            <a
              className="proj-link"
              href={links[page][0]}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <div className="proj-techstack">
            <h2 style={{ fontWeight: 200 }}>Tech Stack:</h2>
            {techStack[page].map(name => (
              <span className="tech-name">{name}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="project-half project-bottom">
        <h1 className="proj-name">{names[page]}</h1>
        <br />
        <ul className="desc-list">
          {descriptions[page].split(". ").map(sentence => (
            <li className="proj-description">{sentence}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;

import React from "react";

const About = () => {
  const proficientStack = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Node.js",
    "React",
    "Redux",
    "Express",
    "Sequelize",
    "PostgreSQL",
    "Websockets",
    "Git",
    "A-Frame"
  ];
  const familiarStack = [
    "Semantic UI",
    "Material UI",
    "SQL",
    "Webpack",
    "Three.js",
    "Java",
    "Python",
    "MongoDB",
    "Mocha + Chai",
    "OAuth/Passport"
  ];
  const aboutText = "<About />";
  return (
    <div id="about-container">
      <div id="about-text-container">
        <h1 id="about-header">About</h1>
        <br />
        <p className="about-text">
          Welcome! I recently graduated from UCLA with a B.A. in Economics. My
          post-college journey has led me to the world of software development
          wherein I have transformed a hobby into a serious career path. I am
          new to the scene, but am focused, driven, and relentless in my
          approach. Day by day my fascination grows and I am eager to share what
          I can offer with you!
        </p>
        <br />
        <p className="about-text">
          Apart from coding, I thoroughly enjoy all sports, learning languages,
          playing music, reading, and finding ways to do them all better.
        </p>
        <div className="tech-stack">
          <h4 className="tech-stack-heading">Proficient:</h4>
          <div className="tech-list">
            {proficientStack.map(name => (
              <span className="tech-name">{name}</span>
            ))}
          </div>
          <br />
          <h4 className="tech-stack-heading">Familiar:</h4>
          <div className="tech-list">
            {familiarStack.map(name => (
              <span className="tech-name">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";

const Project = props => {
  const { page } = props;
  const names = ["SVG Board", "AcademyLine", "Shapescape", "Grace Shopper"];
  const descriptions = [
    "A collaborative whiteboard web application that uses scalable vector graphics for drawing and designing. Supports real-time collaboration via websockets and extends to the user numerous nifty tools to demonstrate his/her creativity.",
    "An Oscars polling website designed to collect user-submitted guesses for winners during Oscars season.",
    "A webVR playground made over the DOM using A-Frame, 3-D models and an underlying physics engine. Users can spawn shapes and play with the physics of the environment.",
    "A standard but quirky e-commerce website equipped with checkout, search-by-product, and admin exclusive capabilities. It was made in a single week."
  ];
  const imgs = [null, null, null, null];
  return (
    <div className="project">
      <h1 className="proj-name">{names[page]}</h1>
      <h4 className="proj-description">{descriptions[page]}</h4>
    </div>
  );
};

export default Project;

import React, { useState } from "react";
import Project from "./Project";

const ProjectMenu = () => {
  const [page, setPage] = useState(0);
  const numPages = 4;
  const [steps, setSteps] = useState([true, false, false, false]);

  const handleClick = e => {
    const inputName = e.target.id;
    const idNumber = inputName[inputName.length - 1] - 1;
    setSteps(
      [false, false, false, false].map((el, idx) => {
        return idx === idNumber && (el = !el);
      })
    );
    setPage(idNumber);
  };
  return (
    <div id="project-menu">
      <Project page={page} />
      <nav class="carousel">
        <input
          id="carousel-item-1"
          type="radio"
          name="carousel-dots"
          checked={steps[0]}
          onClick={e => handleClick(e)}
        />
        <label for="carousel-item-1">Project 1</label>

        <input
          id="carousel-item-2"
          type="radio"
          name="carousel-dots"
          checked={steps[1]}
          onClick={e => handleClick(e)}
        />
        <label for="carousel-item-2">Project 2</label>

        <input
          id="carousel-item-3"
          type="radio"
          name="carousel-dots"
          checked={steps[2]}
          onClick={e => handleClick(e)}
        />
        <label for="carousel-item-3">Project 3</label>

        <input
          id="carousel-item-4"
          type="radio"
          name="carousel-dots"
          checked={steps[3]}
          onClick={e => handleClick(e)}
        />
        <label for="carousel-item-4">Project 4</label>
      </nav>
    </div>
  );
};

export default ProjectMenu;

import React, { useState } from "react";
import Project from "./Project";

const ProjectMenu = () => {
  const [page, setPage] = useState(0);
  const numPages = 4;
  const showPrevButton = () => {
    if (page > 0) {
      return (
        <button
          id="prev-button"
          className="form-button"
          onClick={() => setPage(page - 1)}
        >
          <span>Prev </span>
        </button>
      );
    }
  };
  const showNextButton = () => {
    if (page < 3) {
      return (
        <button
          id="next-button"
          className="form-button"
          onClick={() => setPage(page + 1)}
        >
          <span>Next </span>
        </button>
      );
    }
  };
  return (
    <div id="project-menu">
      <Project page={page} />
      <div id="btn-display">
        <div className="prev-button-container">{showPrevButton()}</div>
        <div className="next-button-container">{showNextButton()}</div>
      </div>
    </div>
  );
};

export default ProjectMenu;

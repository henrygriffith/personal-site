import React, { useState } from "react";
import Project from "./Project";

const ProjectMenu = () => {
  const [page, setPage] = useState(0);
  const numPages = 4;
  return (
    <div id="project-menu">
      <Project page={page} />
      <button
        id="proj-btn next-btn"
        onClick={() => setPage((page + 1) % numPages)}
      >
        next
      </button>
    </div>
  );
};

export default ProjectMenu;

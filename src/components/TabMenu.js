import React from "react";

const TabMenu = props => {
  return (
    <div id="tab-menu">
      <h3 className="tab" onClick={() => props.handleClick("about")}>
        <span className="tab-arrow">&rsaquo;</span>{" "}
        <span className="tab-text">About</span>
      </h3>
      <h3 className="tab" onClick={() => props.handleClick("projects")}>
        <span className="tab-arrow">&rsaquo;</span>{" "}
        <span className="tab-text">Projects</span>
      </h3>
      <h3 className="tab" onClick={() => props.handleClick("resume")}>
        <span className="tab-arrow">&rsaquo;</span>{" "}
        <span className="tab-text">Resume</span>
      </h3>
    </div>
  );
};

export default TabMenu;

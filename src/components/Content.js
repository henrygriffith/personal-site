import React from "react";
import ProjectMenu from "./ProjectMenu";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";

const Content = props => {
  const { contentType } = props;
  return contentType === "about" ? (
    <div className="content-box">
      <About />
    </div>
  ) : contentType === "projects" ? (
    <div className="content-box">
      <ProjectMenu />
    </div>
  ) : contentType === "resume" ? (
    <div className="content-box">
      <Resume />
    </div>
  ) : contentType === "contact" ? (
    <div className="content-box">
      <Contact />
    </div>
  ) : null;
};

export default Content;

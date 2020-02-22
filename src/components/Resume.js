import React from "react";

const Resume = () => {
  return (
    <div id="resume-container">
      <div id="resume-header">
        <h1 id="resume-title">Resume</h1>
        <a
          className="content-link resume-link"
          href="/Henry_Griffith_Res.pdf"
          download="HG_Resume"
        >
          <button className="content-button resume-download">
            <i class="fa fa-download"></i> Download
          </button>
        </a>
      </div>

      <embed
        id="resume-pdf"
        type="application/pdf"
        src="/Henry_Griffith_Res.pdf"
      ></embed>
    </div>
  );
};

export default Resume;

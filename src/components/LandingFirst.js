import React from "react";
import IconMenu from "./IconMenu";

const LandingFirst = () => {
  return (
    <div id="landing-first" className="landing">
      <div id="header-name">
        {/* <div className="spin-div-1">&there4;</div>
        <div className="spin-div-2">&there4;</div> */}
        <span>Henry Griffith</span>
      </div>
      <div className="animated-line"></div>
      <h2 id="header-subtitle">software engineer</h2>
      <IconMenu />
    </div>
  );
};

export default LandingFirst;

import React, { useState } from "react";
import TabMenu from "./TabMenu";
import Content from "./Content";

const LandingSecond = () => {
  const [contentType, setContentType] = useState("");
  const handleClick = contentType => setContentType(contentType);
  return (
    <div id="landing-second" className="landing">
      <TabMenu handleClick={handleClick} />
      <Content contentType={contentType} />
    </div>
  );
};

export default LandingSecond;

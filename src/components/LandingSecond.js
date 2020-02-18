import React from "react";
import TabMenu from "./TabMenu";
import Content from "./Content";

class LandingSecond extends React.Component {
  constructor() {
    super();
    this.state = {
      contentType: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(contentType) {
    this.setState({ contentType });
  }
  render() {
    const { contentType } = this.state;
    return (
      <div id="landing-second" className="landing">
        <TabMenu handleClick={this.handleClick} />
        <Content contentType={contentType} />
      </div>
    );
  }
}

export default LandingSecond;

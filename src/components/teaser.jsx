import React, { Component } from "react";
import background from "../assets/image/Terminator.avif";

class Teaser extends Component {
  render() {
    return (
      <div
        className="teaser"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      ></div>
    );
  }
}

export default Teaser;

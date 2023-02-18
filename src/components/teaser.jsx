import React, { Component } from "react";
import background from "../assets/image/Terminator.avif";

class Teaser extends Component {
  state = {
    poster: background,
  };

  render() {
    return (
      <div
        className="teaser"
        style={{ backgroundImage: `url(${this.state.poster})` }}
      ></div>
    );
  }
}

export default Teaser;

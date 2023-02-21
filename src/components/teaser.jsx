import React, { Component } from "react";
import background from "../assets/image/Terminator.avif"; //Poster of teaser
import Navbar from "./navbar";

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
      >
        <Navbar />
      </div>
    );
  }
}

export default Teaser;

import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="AboutContainer" id="AboutSection">
        <div className="subHeading">
          Who Am I?
          <span className="question">
            I am a postgraduate biomedical researcher interested in the
            application of computational methods to solve biological problems.
            More specifically solving biomedical, pharmaceutical and healthcare
            related problems through developing a comprehensive knowledge of
            computer science, data science, and artificial intelligence.
            <br></br>
            <br></br>
            Looking for my place in the crossroads of computers and biology.
          </span>
        </div>
      </div>
    );
  }
}

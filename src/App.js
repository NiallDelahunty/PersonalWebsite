import React, { Component } from "react";
import "./App.css";

// Control + space to autocomplete on import
import Header from "./components/header";
import About from "./components/about";
import Timeline from "./components/timeline";
import Experience from "./components/work";
import Projects from "./components/projects";
import Slider from "./components/slider2";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* pass in variables - accessed with 'this.props - as it is a class' */}
        <Header
          name="Niall Delahunty"
          profession="Biomedical Scientist | Aspiring Computer Scientist"
        />
        <div id="AboutSection"></div>
        <About />

        <div className="subHeading">
          What are my qualifications?
          <span className="question">
            One undergraduate degree | Two postgraduate degrees
          </span>
        </div>
        <div className="wrapper">
          <Timeline />
        </div>
        <div className="subHeading">
          Work Experience?
          <span className="question">
            Diagnostic Lab | Research Lab | Teaching Assistant
          </span>
        </div>
        <Slider />

        {/* <Experience /> */}
        <Projects />
      </div>
    );
  }
}

export default App;

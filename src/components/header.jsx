// need to import react when using jsx

import React, { Component } from "react";
import Sidebar from "./sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faVial } from "@fortawesome/free-solid-svg-icons";
import { faDna } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import Pdf from "../documents/resume.pdf";

library.add(faDesktop, faVial, faDna, faCircle, faEllipsisH);

// need to export to be able to use in another file
export default class Header extends Component {
  state = {
    visible: true,
  };
  onResumeClick() {
    window.open(Pdf);
  }
  render() {
    return (
      <header className="header_container">
        {this.state.visible ? <Sidebar /> : null}
        <div className="App-header">
          <div className="Icons">
            <FontAwesomeIcon icon="desktop" />
            <div className="dot">
              <FontAwesomeIcon icon="circle" />
            </div>
            <FontAwesomeIcon icon="vial" />
            <div className="dot">
              <FontAwesomeIcon icon="circle" />
            </div>
            <FontAwesomeIcon icon="dna" />
          </div>

          <h1> {this.props.name} </h1>
          <p>{this.props.profession}</p>

          <div className="links col-3">
            <button
              onClick={() => {
                this.setState({ visible: !this.state.visible });
              }}
              target="_blank"
            >
              Contact
            </button>
            <a href="#AboutSection" data-nav-section="AboutSection">
              About Me
            </a>
            <a href="#ProjectSection" data-nav-section="ProjectSection">
              Projects
            </a>
            <button onClick={this.onResumeClick} target="_blank">
              Resume
            </button>
          </div>
        </div>
      </header>
    );
  }
}

// can only export one thing, therefore can call it whatever we want when we import

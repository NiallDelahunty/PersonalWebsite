import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class Sidebar extends Component {
  renderSidebar = () => {
    return (
      <div className="contactButtons">
        <Button id="email">Email</Button>
        <Button id="ln">LinkedIn</Button>
        <Button id="git">Github</Button>
      </div>
    );
  };
  render() {
    return <div className="contact-container">{this.renderSidebar()}</div>;
  }
}

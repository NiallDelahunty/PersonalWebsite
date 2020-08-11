import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicroscope } from "@fortawesome/free-solid-svg-icons";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

library.add(faMicroscope, faClipboardCheck, faUsers);

// const GREY = "#9E9E9E";
const styles = {
  card: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    // paddingTop: "60px",
    paddingBottom: "20px",
    border: "2px solid #006767",
  },
  icon: {
    paddingBottom: "30px",
    paddingTop: "30px",
    fontSize: "60px",
    color: "#006767",
  },
};
export default class Experience extends Component {
  render() {
    return (
      <div className="WorkContainer row" id="WorkSection">
        <div className="we col-4">
          <div className="we card" style={styles.card}>
            <div className="we-heading">
              <div className="we-icon" style={styles.icon}>
                <FontAwesomeIcon icon="clipboard-check" />
              </div>
              Diagnostic Laboratory
            </div>
            <div className="we-content">
              <h3>Location</h3>
              <p>National Virus Reference Lab (NVRL)</p>
              <h3>Role</h3>
              <p>
                I worked as part of the Specimen reception team. As a team
                processed, organised and prepared over 1000 daily patient
                samples for diagnostic testing and analysis according to
                standard operating protocols (SOPs).
              </p>
              <h3>Challenges</h3>
              <ul>
                <li>High precision required</li>
                <li>Large volume of samples to be processed</li>
                <li>
                  Working efficiently while maintaining high safety standards
                  and following protocols
                </li>
              </ul>
              <h3>Transferable Skills</h3>
              <ul>
                <li>Working in a team</li>
                <li>Working in a high pressure environment</li>
                <li>Working with precision to meet deadlines</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="we col-4">
          <div className="we card" style={styles.card}>
            <div className="we-heading">
              <div className="we-icon" style={styles.icon}>
                <FontAwesomeIcon icon="microscope" />
              </div>
              Post Graduate Researcher
            </div>
            <div className="we-content">
              <h3>Location</h3>
              <p>Conway Institute of Biomolecular and Biomedical Research</p>
              <h3>Role</h3>
              <p>
                I worked on an independent research project looking at
                differential ubiquitination of the NF-kB pathway as a potential
                underlying mechanism linking hypercapnia and immune suppression.
                Disease contexts include COPD and Cystic Fibrosis.
              </p>
              <h3>Challenges</h3>
              <ul>
                <li>Independent research</li>
                <li>Capturing post translational modifications</li>
                <li>Analysing and interpreting novel findings</li>
              </ul>
              <h3>Transferable Skills</h3>
              <ul>
                <li>Problem solving</li>
                <li>Critical thinking/writing</li>
                <li>Analyzing and interpreting complex data</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="we col-4">
          <div className="we card" style={styles.card}>
            <div className="we-heading">
              <div className="we-icon" style={styles.icon}>
                <FontAwesomeIcon icon="users" />
              </div>
              Teaching Asssistant
            </div>
            <div className="we-content">
              <h3>Location</h3>
              <p>UCD School of Medicine</p>
              <h3>Role</h3>
              <p>
                I worked as a teaching assistant running or assisting tutorials
                and practicals for undergraduate and graduate physiology and
                medicine students.
              </p>
              <h3>Challenges</h3>
              <ul>
                <li>Wide variety of subject matter</li>
                <li>
                  Communicating biological concepts and systems effectively
                </li>
                <li>Creating a stimulating and lasting learning experience</li>
              </ul>
              <h3>Transferable Skills</h3>
              <ul>
                <li>Effective communication</li>
                <li>Public speaking/demonstrating</li>
                <li>Teaching/Mentoring</li>
                <li>Quickly learning new subject matter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

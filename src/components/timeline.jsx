import React, { Component } from "react";

const styles = {
  card: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    // paddingTop: "60px",
    paddingBottom: "20px",
    border: "2px solid #006767",
  },
};

export default class Timeline extends Component {
  render() {
    return (
      <div className="timeline col-8">
        <div className="timeline-main">
          <div className="timeline-section">
            <p className="timeline-date">
              2013 <p> -2017</p>
            </p>
            <div className="timeline-content" style={styles.card}>
              <h2 className="timeline-title">
                BSc Biomedical Health and Life Sciences (1.1)
              </h2>
              <p>
                Focus of the course was to train the next generation of
                translational scientists, transforming scientific discoveries
                into applicable solutions. Module topics covered:
              </p>
              <ul>
                <li>Genetics</li>
                <li>Pharmacology</li>
                <li>Biochemistry</li>
                <li>Molecular/Cell Biology</li>
                <li>Bioinformatics</li>
                <li>Physiology</li>
                <li>Drug Discovery</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="timeline-main">
          <div className="timeline-section">
            <p className="timeline-date">
              2017 <p> -2018</p>
            </p>
            <div className="timeline-content" style={styles.card}>
              <h2 className="timeline-title">
                MSc Molecular Biology (Research)
              </h2>
              <p>
                Investigating the link between high CO2 (hypercapnia) and immune
                suppression. Independent project looking at differential
                ubiquitination of the NF-kB pathway as a potential underlying
                mechanism.
              </p>
              <ul>
                <li>Mammalian cell line culture</li>
                <li>Western Blot</li>
                <li>Mass Spectrometry</li>
                <li>Immunopreciptiation</li>
                <li>Propogation and isolation of overexpression plasmids</li>
                <li>Hypoxia chambers</li>
                <li>Scientific writing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="timeline-main">
          <div className="timeline-section">
            <p className="timeline-date">
              2019 <p> -2021</p>
            </p>
            <div className="timeline-content" style={styles.card}>
              <h2 className="timeline-title">MSc Computer Science</h2>
              <p>
                Intensive course designed by top academics at the UCD school of
                Computer Science to rapidly upskill graduate students to the
                equivalent of a BSc (2 semesters) in computer Science through
                targeted modules, followed by a group software engineering
                project and advanced modules both at the MSc level.
              </p>
              <ul>
                <li>Python</li>
                <li>Java</li>
                <li>Data Analytics</li>
                <li>Compuer networks, systems and architecture</li>
                <li>Data structures and algorithms</li>
                <li>Web application design</li>
                <li>Relational Databases</li>
                <li>Operating Systems</li>
                <li>Software Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

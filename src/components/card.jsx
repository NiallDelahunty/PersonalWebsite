import React from "react";
import PropTypes from "prop-types";

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

// Essentially just renders all the associated info within a styled component
const Card = ({ property }) => {
  const { index, name, location, role, challenges, skills } = property;
  return (
    <div id={`card-${index}`} className="we-card" style={styles.card}>
      <div className="we-heading">{name}</div>
      <div className="we-content">
        <h3>Location</h3>
        <p>{location}</p>
        <h3>Role</h3>
        <p>{role}</p>
        <h3>Challenges</h3>
        <ul>
          <li>{challenges[0]}</li>
          <li>{challenges[1]}</li>
          <li>{challenges[2]}</li>
        </ul>
        <h3>Transferable Skills</h3>
        <ul>
          <li>{skills[0]}</li>
          <li>{skills[1]}</li>
          <li>{skills[2]}</li>
        </ul>
      </div>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired,
};

export default Card;

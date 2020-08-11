import React, { Component } from "react";
import Card from "./card";
import data from "../data";

// Initial code for slider adapted from https://github.com/Ihatetomatoes/react-image-slideshow

// class component
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // state contains all and then specific index of cards
      properties: data.properties,
      property: data.properties[0],
    };
  }

  // Methods called when we click next and prev button
  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex],
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex],
    });
  };

  render() {
    const { properties, property } = this.state;
    return (
      <div className="App">
        <button
          onClick={() => this.nextProperty()}
          disabled={property.index === data.properties.length - 1}
        >
          t
        </button>
        <button
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
        >
          t
        </button>
        <div className="page row">
          <div
            className="col-8"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className={`cards-slider active-slide-${property.index} col-8`}
            >
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${
                    property.index * (100 / properties.length)
                  }%)`,
                }}
              >
                {properties.map((property) => (
                  <Card key={property._id} property={property} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;

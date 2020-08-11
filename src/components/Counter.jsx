import React from "react";

export default class Counter extends React.Component {
  //   State - if just setting this, don't need constructor - need constructor if using prop
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount,
    };
  }

  // function
  //   handleButtonClick() {
  //     console.log("button clicked");
  //   }

  // To be able to use value need to do functino like this
  Increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  Decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  //   After function is called it re-renders the component
  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>
      </div>
    );
  }
}

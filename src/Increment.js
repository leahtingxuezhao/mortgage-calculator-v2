import React from "react";

class Increment extends React.Component {
  render() {
    return (
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
        onClick={this.props.incrementCount}
      >
        {"increment count"}
      </div>
    );
  }
}

export default Increment;

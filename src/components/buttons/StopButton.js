import React from "react";

class StopButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.onClick}>Stop</button>
      </React.Fragment>
    );
  }
}

export default StopButton;

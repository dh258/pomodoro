import React from "react";

class StartButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.onClick}>Start</button>
      </React.Fragment>
    );
  }
}

export default StartButton;

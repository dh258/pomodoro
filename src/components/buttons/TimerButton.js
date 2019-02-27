import React from "react";

class TimerButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.onClick}>{this.props.text}</button>
      </React.Fragment>
    );
  }
}

export default TimerButton;

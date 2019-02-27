import React from "react";
import "./TimerButton.css";

class TimerButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.props.onClick}>
          {this.props.text}
        </button>
      </React.Fragment>
    );
  }
}

export default TimerButton;

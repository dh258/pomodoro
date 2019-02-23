import React from "react";

class TimerDisplay extends React.Component {
  render() {
    const { minutes, seconds } = this.props;

    return (
      <div>
        <h2>
          {minutes}:{seconds}
        </h2>
      </div>
    );
  }
}

export default TimerDisplay;

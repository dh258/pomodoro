import React from "react";
import TimerDisplay from "./timer/TimerDisplay";
import TimerInput from "./timer/TimerInput";
import TimerButton from "./buttons/TimerButton";

class Timer extends React.Component {
  // Init default pomodoro, which is 25 minutes
  state = {
    minutes: "25",
    seconds: "00",
    isRunning: false,
    timerInput: ""
  };

  handleChange = event => {
    this.setState({ timerInput: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ minutes: this.state.timerInput });
  };

  onStart = () => {
    this.interval = setInterval(this.tick, 1000);
  };

  onStop = () => {
    clearInterval(this.interval);
    this.setState({ isRunning: false });
  };

  onReset = () => {
    this.setValuesToState(this.state.timerInput, "0", false);
  };

  tick = () => {
    let min = Number(this.state.minutes);
    let sec = Number(this.state.seconds);

    // Decrement seconds
    sec--;

    // Decrement minutes if second below 0
    if (sec < 0) {
      min--;
      sec = 59;
    }

    // Set state with updated values
    this.setValuesToState(min, sec, true);
  };

  setValuesToState(min, sec, start) {
    if (sec < 10) {
      this.setState({ seconds: "0" + sec, minutes: min });
    } else {
      this.setState({ seconds: sec, minutes: min });
    }
    this.setState({ isRunning: start });
  }

  render() {
    const { minutes, seconds, timerInput } = this.state;
    return (
      <div>
        <TimerInput
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={timerInput}
        />
        <TimerDisplay seconds={seconds} minutes={minutes} />
        <TimerButton onClick={this.onStart} text="Start" />
        <TimerButton onClick={this.onStop} text="Pause" />
        <TimerButton onClick={this.onReset} text="Reset" />
      </div>
    );
  }
}

export default Timer;

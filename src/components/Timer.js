import React from "react";
import TimerDisplay from "./timer/TimerDisplay";
import TimerInput from "./timer/TimerInput";
import StartButton from "./buttons/StartButton";
import StopButton from "./buttons/StopButton";
import ResetButton from "./buttons/ResetButton";

class Timer extends React.Component {
  // Init default pomodoro, which is 25 minutes
  state = {
    minutes: 25,
    seconds: 0,
    isRunning: false
  };

  handleChange = event => {
    this.setState({ minutes: event.target.value });
    console.log(event.target.value);
  };

  onStart = () => {
    this.tick();
  };

  onStop = () => {};

  onReset = () => {};

  tick = () => {
    const { minutes, seconds } = this.state;

    // Ticking mechanism
    if (seconds === 0) {
      this.setState({ minutes: minutes - 1, seconds: 59 });
    } else {
      // Decrement seconds
      this.setState({ seconds: seconds - 1 });
    }
  };

  render() {
    const { minutes, seconds } = this.state;
    console.log(minutes);
    return (
      <div>
        <TimerInput onChange={this.handleChange} minutes={minutes} />
        <TimerDisplay seconds={seconds} minutes={minutes} />
        <StartButton onClick={this.onStart} />
        <StopButton onClick={this.onStop} />
        <ResetButton onClick={this.onReset} />
      </div>
    );
  }
}

export default Timer;

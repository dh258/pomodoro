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
    if (event.target.value !== "") {
      this.setState({ timerInput: event.target.value });
    } else {
      this.setState({ timerInput: "25" });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ minutes: this.state.timerInput });
  };

  onStart = () => {
    if (!this.state.isRunning) {
      this.interval = setInterval(this.tick, 1000);
      this.setState({ isRunning: true });
    }
  };

  onStop = () => {
    clearInterval(this.interval);
    this.setState({ isRunning: false });
  };

  onReset = () => {
    clearInterval(this.interval);
    this.setState({ isRunning: false });
    if (this.state.timerInput !== "") {
      this.setValuesToState(this.state.timerInput, "0");
    } else {
      this.setValuesToState("25", "0");
    }
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
    this.setValuesToState(min, sec);
  };

  setValuesToState(min, sec) {
    if (sec < 10) {
      this.setState({ seconds: "0" + sec, minutes: min });
    } else {
      this.setState({ seconds: sec, minutes: min });
    }
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
        <div className="d-flex justify-content-center">
          <TimerButton
            onClick={this.onStart}
            color="btn-success"
            text="Start"
          />
          <TimerButton onClick={this.onStop} color="btn-danger" text="Pause" />
          <TimerButton
            onClick={this.onReset}
            color="btn-primary"
            text="Reset"
          />
        </div>
      </div>
    );
  }
}

export default Timer;

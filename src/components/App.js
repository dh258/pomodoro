import React from "react";

class App extends React.Component {
  state = {
    minutes: 0,
    seconds: 0,
    isRunning: false
  };

  componentDidMount() {
    this.setState({
      minutes: 25,
      seconds: 1,
      isRunning: false
    });
  }

  setTime = () => {
    const { minutes, seconds } = this.state;
    if (seconds === 0) {
      this.setState({
        minutes: minutes - 1,
        seconds: 59
      });
    } else {
      this.setState({
        seconds: seconds - 1
      });
    }
  };

  onStart = () => {
    this.setState({
      isRunning: true
    });
    this.setTime();
  };

  onStop = () => {
    this.setState({
      isRunning: false
    });
  };

  onReset = () => {
    this.setState({
      minutes: 25,
      seconds: 0,
      isRunning: false
    });
  };

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div>
        <h3>Pomodoro Timer</h3>
        <p>Current Minutes: {minutes}</p>
        <p>Current Seconds: {seconds}</p>
        <div>
          <StartButton onClick={this.onStart} />
          <button onClick={this.onStop}>Stop</button>
          <button onClick={this.onReset}>Reset</button>
        </div>
      </div>
    );
  }
}

class StartButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>Start</button>
      </div>
    );
  }
}

export default App;

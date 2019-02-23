import React from "react";
import Timer from "./Timer";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Pomodoro Timer</h3>
        <div>
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import Timer from "./Timer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron text-center">
          <h3>Pomodoro Timer</h3>
        </div>
        <div className="container">
          <div>
            <Timer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

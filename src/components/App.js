import React from "react";
import Timer from "./Timer";
import Navbar from "./Navbar";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Timer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

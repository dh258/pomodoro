import React from "react";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Navbar from "./Navbar";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Navbar />
            <Route path="/" exact component={Home} />
            <Route path="/settings" exact component={Settings} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

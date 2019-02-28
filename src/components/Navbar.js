import React from "react";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Pomodoro Timer</a>
        {/* <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Settings</a>
            </li>
          </ul>
        </div> */}
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

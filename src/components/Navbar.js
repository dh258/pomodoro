import React from "react";
import NavbarItem from "./navbar/NavbarItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Pomodoro Timer
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <NavbarItem text="Settings" link="/settings" />
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

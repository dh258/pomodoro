import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = props => {
  return (
    <React.Fragment>
      <li className="nav-item">
        <Link to={props.link} className="nav-link">
          {props.text}
        </Link>
      </li>
    </React.Fragment>
  );
};

export default NavbarItem;

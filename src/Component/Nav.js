import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <ul className="menu">
        <li>
          <Link to="/Home" className="menu_link">Home</Link>
        </li>
        <li>
          <Link to="/About" className="menu_link">About</Link>
        </li>
        <li>
          <Link to="/Services" className="menu_link">Services</Link>
        </li>
        <li>
          <Link to="/Contact" className="menu_link">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
export default Nav;

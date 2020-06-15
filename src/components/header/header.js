import React from "react";
import "./style.scss";
import logo from "./img/leaf.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="name">
        <img src={logo} />
        <h1>
          <Link to="/">Blue Bird Has Told Me</Link>
        </h1>
      </div>
      <div className="name"></div>
    </div>
  );
}

export default Header;

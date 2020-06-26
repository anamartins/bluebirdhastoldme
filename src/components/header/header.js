import React from "react";
import "./style.scss";
import logo from "./img/leaf.png";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="name">
          <img src={logo} />
          <h1>
            <Link to="/">Blue Bird Has Told Me</Link>
          </h1>
        </div>
        <div className="button">
          <Link to="/about">
            <button type="button">?</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;

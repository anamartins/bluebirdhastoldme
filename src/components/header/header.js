import React from "react";
import "./style.scss";
import logo from "./img/leaf.png";

function Header() {
  return (
    <div className="header">
      <div className="name">
        <img src={logo} />
        <h1>
          <a href="/">Blue Bird Has Told Me</a>
        </h1>
      </div>
      <div className="name">
        <a href="/">about</a>

        <a href="https://github.com/anamartins" target="_blank">
          @anamartins
        </a>
      </div>
    </div>
  );
}

export default Header;

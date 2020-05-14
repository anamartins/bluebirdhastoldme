import React from "react";
import "./style.scss";

function Header() {
  return (
    <div className="header">
      <div className="name">
        <img src="../img/site/leaf.png" />
        <h1>
          <a href="/">Rumor Has It</a>
        </h1>
      </div>
    </div>
  );
}

export default Header;

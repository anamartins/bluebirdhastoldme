import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="about">
        Blue Bird Has Told Me is a fan site and is not affiliated with Nintendo.
        Animal Crossing and related media are trademarks of Nintendo.{" "}
        <Link to="/about">Read more about this website.</Link>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function MiniVillager({ name, icon }) {
  let url = "/villager/" + name;
  return (
    <div className="mini-villager">
      <Link to={url}>
        <img src={`/img/icons/villagers/${icon}`} />
        <p>{name}</p>
      </Link>
    </div>
  );
}

export default MiniVillager;

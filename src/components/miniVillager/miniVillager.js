import React from "react";
import { Link } from "react-router-dom";
import { IMG_BASE_URL } from "../../config/config";
import "./style.scss";

function MiniVillager({ name, icon }) {
  let url = "/villager/" + name;
  return (
    <div className="mini-villager">
      <Link to={url}>
        <img src={`${IMG_BASE_URL}/img/icons/villagers/${icon}`} />
        <p>{name}</p>
      </Link>
    </div>
  );
}

export default MiniVillager;

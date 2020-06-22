import React from "react";
import { Link } from "react-router-dom";
import { IMG_BASE_URL } from "../../../config/config";
import "./style.scss";

function MiniVillager({ slug, name, icon }) {
  let url = "/villager/" + slug;
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

import React from "react";
import "./style.scss";

function MiniVillager({ name, icon }) {
  let url = "/villager/" + name;
  return (
    <div className="mini-villager">
      <a href={url}>
        <img src={`/img/icons/villagers/${icon}`} />
        <p>{name}</p>
      </a>
    </div>
  );
}

export default MiniVillager;

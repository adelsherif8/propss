import React from "react";
import Player from "./Player";
import players from "./players";

const PlayerList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayerList;

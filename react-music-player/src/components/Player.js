import React from "react";

const Player = () => {
  return (
    <div className="player-container">
      <div className="time-control">
        <p>Start time</p>
        <input type="range" />
        <p>End time</p>
      </div>
      <div className="play-control"></div>
    </div>
  );
};

export default Player;

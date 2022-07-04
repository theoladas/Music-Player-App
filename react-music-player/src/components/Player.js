import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({ currentSong }) => {
  // Create Ref
  const audioRef = useRef(null);
  // Event Handlers
  const playSongHandler = () => {
    // play audio
    audioRef.current.play();
    // console.log(audioRef.current); // we get the song's mp3 link
  };
  return (
    <div className="player-container">
      <div className="time-control">
        <p>Start time</p>
        <input type="range" />
        <p>End time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" className="skip-back" />
        <FontAwesomeIcon
          icon={faPlay}
          size="2x"
          className="play-icon"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          size="2x"
          className="skip-forward"
        />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;

import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faItalic,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  // Create Ref
  const audioRef = useRef(null);
  // Event Handlers
  const playSongHandler = () => {
    // if the current song is playing
    if (isPlaying) {
      // then pause it
      audioRef.current.pause();
      // switch the state to the opposite of what it was
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      // switch the state to the opposite of what it was
      setIsPlaying(!isPlaying);
    }
    // play audio
    // audioRef.current.play();
    // console.log(audioRef.current); // we get the song's mp3 link
  };

  // create state for current song time
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });
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

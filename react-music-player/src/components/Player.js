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

  //create function to format the time's song to minutes and seconds eg: 00:00
  const getTime = (time) => {
    // taken from stack overflow: 'How to format time'
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  //create song time handler function
  const timeUpdateHandler = (e) => {
    // get current time of the song
    const current = e.target.currentTime;
    // get the duration of the song
    const duration = e.target.duration;
    // console.log(duration)
    // update state setSongInfo with the time
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };
  // create a handler so we can navigate through the time of the song
  const dragHandler = (e) => {
    //update the audio current time to be equal with e.target.value
    audioRef.current.currentTime = e.target.value;
    // update the state with event's value
    setSongInfo({ ...songInfo, currentTime: e.target.value });
    // console.log(e.target.value);
  };
  // create state for current song time
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  return (
    <div className="player-container">
      <div className="time-control">
        {/* update current song's time */}
        <p>{getTime(songInfo.currentTime)}</p>
        {/* add functionality to move on time's song */}
        <input
          type="range"
          // we always start form 0
          min={0}
          // the song total time duration will be max
          max={songInfo.duration}
          // the position of the slide will be the currentTime
          value={songInfo.currentTime}
          // to be able to position song's time
          onChange={dragHandler}
        />
        {/* update current's song end time (duration) */}
        <p>{getTime(songInfo.duration)}</p>
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
      <audio
        // we useRef to grab audio html element
        ref={audioRef}
        // it runs every second the song time changes
        onTimeUpdate={timeUpdateHandler}
        // when the file audio loads up, we got the time on the screen
        onLoadedMetadata={timeUpdateHandler}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;

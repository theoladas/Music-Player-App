import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
  faItalic,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  setCurrentSong,
}) => {
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

  // create a handler so we can navigate through the time of the song
  const dragHandler = (e) => {
    //update the audio current time to be equal with e.target.value
    audioRef.current.currentTime = e.target.value;
    // update the state with event's value
    setSongInfo({ ...songInfo, currentTime: e.target.value });
    // console.log(e.target.value);
  };
  // create function to skip the song back and forward:
  const skipTrackHandler = (direction) => {
    // check if the currentSong's id matches the song's id of the state. If it matches, give me the index of that.
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    // then we need to check the direction, if we skip forward :
    if (direction === "skip-forward") {
      // we will go to the song array (state) and we will dynamically get the current index and we add +1 (to move forward). We set all of this to the setCurrentSong. eg. If I am in the song with index 1 , we grab this index(1) and we +1 on it to move into the index 2.
      setCurrentSong(songs[currentIndex + 1]);
    }
  };
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
          // the song total time duration will be max or 0
          max={songInfo.duration || 0}
          // the position of the slide will be the currentTime
          value={songInfo.currentTime}
          // to be able to position song's time
          onChange={dragHandler}
        />
        {/* update current's song end time (duration) */}
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          // Add event with the skipTrackHandler , parameter (skip-back)
          onClick={() => skipTrackHandler("skip-back")}
          icon={faAngleLeft}
          size="2x"
          className="skip-back"
        />
        <FontAwesomeIcon
          // if statement to toggle between play / pause icons based by if the song is playing or not. If my song is playing show the Pause icon , else show the Play icon.
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          className="play-icon"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          // Add event with the skipTrackHandler
          onClick={() => skipTrackHandler("skip-forward")}
          icon={faAngleRight}
          size="2x"
          className="skip-forward"
        />
      </div>
    </div>
  );
};

export default Player;

import React, { useState, useRef } from "react";
// import styles
import "./styles/app.scss";
// import components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
// import data songs
import data from "./data";
import { faCartFlatbedSuitcase } from "@fortawesome/free-solid-svg-icons";

function App() {
  // Create Ref
  const audioRef = useRef(null);
  // create state
  const [songs, setSongs] = useState(data());
  // we want to grab a song of the songs array, as the current song
  const [currentSong, setCurrentSong] = useState(songs[2]);
  // check if the current song is playing. We set the state to false because the current song will not be playing by default.
  const [isPlaying, setIsPlaying] = useState(false);
  // create state for current song time
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
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
  return (
    <div className="App">
      {/* pass the currentSong to the Song component */}
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
      />
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
}

export default App;

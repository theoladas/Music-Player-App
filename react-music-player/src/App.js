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
  return (
    <div className="App">
      {/* pass the currentSong to the Song component */}
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} />
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

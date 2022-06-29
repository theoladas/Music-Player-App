import React, { useState } from "react";
// import styles
import "./styles/app.scss";
// import components
import Song from "./components/Song";
import Player from "./components/Player";
// import data songs
import data from "./data";

function App() {
  // create state
  const [songs, setSongs] = useState(data());
  // we need to grab the 1st song of the songs array, as the current song
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      {/* pass the currentSong to the Song component */}
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;

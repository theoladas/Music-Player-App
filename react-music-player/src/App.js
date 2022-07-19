import React, { useState, useRef } from "react";
// import styles
import "./styles/app.scss";
// import components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";
// import data songs
import data from "./data";

function App() {
  // Ref
  const audioRef = useRef(null);

  // States
  const [songs, setSongs] = useState(data());
  // we want to grab a song of the songs array, as the current song
  const [currentSong, setCurrentSong] = useState(songs[0]);
  // check if the current song is playing. We set the state to false because the current song will not be playing by default.
  const [isPlaying, setIsPlaying] = useState(false);
  // create state for current song time
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  // create state for library (when it's open or not)(we dont want it open we set it to false by default)
  const [libraryStatus, setLibraryStatus] = useState(false);

  // Handlers
  //create song time handler function
  const timeUpdateHandler = (e) => {
    // get current time of the song
    const current = e.target.currentTime;
    // get the duration of the song
    const duration = e.target.duration;
    // calculate percentage:
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    // get the percentage
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    // update state setSongInfo with the time
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationPercentage: animation,
    });
  };
  // Create songEnded handler function:
  const songEndHandler = async () => {
    // when the song ends skips forward:
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);

    if (isPlaying) {
      setTimeout(() => {
        audioRef.current.play();
      }, 100);
    }
  };
  return (
    // if the libraryStatus is open then add the css class else add nothing
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      {/* pass the currentSong to the Song component */}
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        // we useRef to grab audio html element
        ref={audioRef}
        // it runs every second the song time changes
        onTimeUpdate={timeUpdateHandler}
        // when the file audio loads up, we got the time on the screen
        onLoadedMetadata={timeUpdateHandler}
        src={currentSong.audio}
        // when the song ends run this:
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;

import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  // create select song handler function
  const songSelectHandler = async () => {
    // I want to grab all the Library songs from the state and filter them out.
    const selectedSong = songs.filter((state) => state.id === id);
    // we set the setCurrentSong to the song we clicked:
    await setCurrentSong(selectedSong[0]);
    // Add active state:
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          // if it matches, return the whole song and set active to true
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    // update the state:
    setSongs(newSongs);
    // // check if the song is playing:
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      {/* display all song information */}
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;

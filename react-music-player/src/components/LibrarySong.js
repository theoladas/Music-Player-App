import React from "react";

const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef }) => {
  // create select song handler function
  const songSelectHandler = () => {
    const selectedSong = song;
    // we set the setCurrentSong to the song we clicked:
    setCurrentSong(selectedSong);
  };

  return (
    <div onClick={songSelectHandler} className="library-song">
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

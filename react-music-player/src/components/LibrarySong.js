import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
}) => {
  // create select song handler function
  const songSelectHandler = () => {
    const selectedSong = song;
    // we set the setCurrentSong to the song we clicked:
    setCurrentSong(selectedSong);
    // check if the song is playing:
    if (isPlaying) {
      // create a play promise:
      const playPromise = audioRef.current.play();
      // if the audio is undefined (hasnt loaded yet):
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
    // make the song play when we click it from the Library
    // audioRef.current.play();
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

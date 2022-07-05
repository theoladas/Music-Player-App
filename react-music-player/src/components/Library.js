import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {/* From all songs (from data.js) we grab each song, we map over them and create a component for each one. */}
        {songs.map((song) => (
          // pass all the information for the song to the component
          <LibrarySong
            // pass each individual song and their information
            song={song}
            // pass the function to change the current song to something else
            setCurrentSong={setCurrentSong}
            // pass all the songs from our state
            songs={songs}
            // pass the id of the song
            id={song.id}
            key={song.id}
            // pass audioRef
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;

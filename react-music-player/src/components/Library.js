import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {/* From all songs (from data.js) we grab each song, we map over them and create a component for each one. */}
        {songs.map((song) => (
          // pass all the information for the song to the component
          <LibrarySong song={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;

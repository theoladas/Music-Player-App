import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">{/* <LibrarySong songs={songs} /> */}</div>
    </div>
  );
};

export default Library;

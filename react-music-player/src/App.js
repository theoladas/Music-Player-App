import React from "react";
// import styles
import "./styles/app.scss";
// import components
import Song from "./components/Song";
import Player from "./components/Player";
// import data songs
import data from "./data";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;

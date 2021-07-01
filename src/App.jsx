import React from "react";
// Import Styles
import "./styles/app.scss";
// Import Components
import Player from "./components/Player";
import Song from "./components/Song";

const App = () => {
   return (
      <div className="App">
         <Song />
         <Player />
      </div>
   );
};

export default App;
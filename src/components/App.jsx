import React from "react";
import Anna from "./Anna"
import anime from "../data/anime.json";

export const App = () =>{
  return (
    <div className="App">
  <Anna anime={anime}
        />
</div>
  )
};

export default App;
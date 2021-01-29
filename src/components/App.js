import React from "react";
import Game from "./game";
import image1 from "./assets/images/pigeon.png";
import image2 from "./assets/images/cat3.png";
function App(props) {
  const pigeons = {
    name: "Chatty Pigeons",
    logoSrc: image1,
  };

  const cats = {
    name: "Nashville Cats",
    logoSrc: image2,
  };
  const Pigeons = {
    name: "Chatty Pigeons",
    logoSrc: image1,
  };

  const Cats = {
    name: "Nashville Cats",
    logoSrc: image2,
  };

  return (
    <div className="App">
      <Game venue="Nashville Arena" homeTeam={cats} visitingTeam={pigeons} />
      <Game venue="Nashville Arena" homeTeam={cats} visitingTeam={pigeons} />
    </div>
  );
}

export default App;

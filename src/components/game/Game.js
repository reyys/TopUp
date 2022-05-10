import React from "react";
import "../../index.css"
import RenderGame from "./renderGame";

function Game() {
  return (
    <div id="game" className="game-content h-[120vh] w-full flex flex-col items-center ">
      <RenderGame />
    </div>
  );
}

export default Game;

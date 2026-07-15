import { GameBoard } from "./gameboard.js";

export function Player(playerType = "real") {
  return {
    gameBoard: GameBoard(),
  };
}

import { GameBoard } from "./gameboard.js";

export function Player(playerType) {
  return {
    gameBoard: GameBoard(),
    playerType,
  };
}

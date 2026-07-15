import "./styles.css";
import { Player } from "./player.js";
import { gameBoardDOM } from "./gameboard-dom.js";

function game() {
  const player1 = Player("real");
  const player2 = Player("computer");

  const leftGameBoard = document.querySelector(".leftGameBoard");
  const rightGameBoard = document.querySelector(".rightGameBoard");
  const player1GameBoard = gameBoardDOM(
    leftGameBoard,
    player1.gameBoard.getShips(),
    player1.gameBoard.getMissedShots(),
    player1.gameBoard.getGameBoardSize(),
  );
}
game();

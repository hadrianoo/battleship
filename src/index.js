import "./styles.css";
import { Player } from "./player.js";
import {
  createGameBoardDOM,
  populateGameBoardDOMWithShips,
} from "./gameboard-dom.js";

function game() {
  const player1 = Player("real");
  const player2 = Player("computer");

  player1.gameBoard.addShip([
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
  ]);
  player1.gameBoard.addShip([
    [4, 2],
    [4, 3],
    [4, 4],
    [4, 5],
  ]);

  const leftGameBoard = document.querySelector(".leftGameBoard");
  const rightGameBoard = document.querySelector(".rightGameBoard");
  createGameBoardDOM(leftGameBoard, player1.gameBoard.getGameBoardSize());
  createGameBoardDOM(rightGameBoard, player2.gameBoard.getGameBoardSize());

  populateGameBoardDOMWithShips(leftGameBoard, player1);
}
game();

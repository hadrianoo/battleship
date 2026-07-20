import "./styles.css";
import { Player } from "./player.js";
import {
  createGameBoardDOM,
  populateGameBoardDOMWithShips,
  populateGameBoardDOMWithShots,
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
  player1.gameBoard.addShip([
    [1, 8],
    [2, 8],
    [3, 8],
    [4, 8],
  ]);
  player1.gameBoard.addShip([
    [6, 6],
    [7, 6],
    [8, 6],
  ]);
  player1.gameBoard.addShip([
    [6, 9],
    [7, 9],
    [8, 9],
  ]);
  player1.gameBoard.addShip([
    [9, 2],
    [9, 3],
    [9, 4],
  ]);
  player2.gameBoard.addShip([
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 5],
  ]);
  player2.gameBoard.addShip([
    [5, 2],
    [5, 3],
    [5, 4],
    [5, 5],
  ]);
  player2.gameBoard.addShip([
    [1, 7],
    [2, 7],
    [3, 7],
    [4, 7],
  ]);
  player2.gameBoard.addShip([
    [6, 7],
    [7, 7],
    [8, 7],
  ]);
  player2.gameBoard.addShip([
    [2, 9],
    [3, 9],
    [4, 9],
  ]);
  player2.gameBoard.addShip([
    [8, 2],
    [8, 3],
    [8, 4],
  ]);

  const playerOneGameBoard = document.querySelector(".playerOneGameBoard");
  const playerOneAttackBoard = document.querySelector(".playerOneAttackBoard");
  const playerTwoGameBoard = document.querySelector(".playerTwoGameBoard");
  const playerTwoAttackBoard = document.querySelector(".playerTwoAttackBoard");

  createGameBoardDOM(playerOneGameBoard, player1.gameBoard.getGameBoardSize());
  createGameBoardDOM(
    playerOneAttackBoard,
    player2.gameBoard.getGameBoardSize(),
  );

  createGameBoardDOM(playerTwoGameBoard, player2.gameBoard.getGameBoardSize());
  createGameBoardDOM(
    playerTwoAttackBoard,
    player1.gameBoard.getGameBoardSize(),
  );

  populateGameBoardDOMWithShips(playerOneGameBoard, player1);
  populateGameBoardDOMWithShips(playerTwoGameBoard, player2);

  playerOneAttackBoard.addEventListener("click", (event) => {
    if (event.target.getAttribute("class") === "playerOneAttackBoard") return;
    const shipStatus = event.target.dataset.ship;
    const hitStatus = event.target.dataset.hit;
    const posX = event.target.dataset.x;
    const posY = event.target.dataset.y;

    player2.gameBoard.receiveAttack([posX, posY]);
    populateGameBoardDOMWithShots(playerOneAttackBoard, player2);
  });

  playerTwoAttackBoard.addEventListener("click", (event) => {
    if (event.target.getAttribute("class") === "playerTwoAttackBoard") return;
    const shipStatus = event.target.dataset.ship;
    const hitStatus = event.target.dataset.hit;
    const posX = event.target.dataset.x;
    const posY = event.target.dataset.y;

    player1.gameBoard.receiveAttack([posX, posY]);
    populateGameBoardDOMWithShots(playerTwoAttackBoard, player1);
  });
}
game();

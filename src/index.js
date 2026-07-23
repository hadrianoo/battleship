import "./styles.css";
import { Player } from "./player.js";
import {
  createGameBoardDOM,
  populateGameBoardDOMWithShips,
  populateGameBoardDOMWithShots,
  computerPlayer,
} from "./gameboard-dom.js";

function game() {
  const player1 = Player("left");
  const player2 = Player("right");
  let currentPlayer = player1.playerType;

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

  function attackEvent(event, className, player, attackBoard) {
    const posX = event.target.dataset.x;
    const posY = event.target.dataset.y;

    const hit = player.gameBoard.receiveAttack([posX, posY]);
    populateGameBoardDOMWithShots(attackBoard, player);
    if (hit) {
      return true;
    } else {
      return false;
    }
  }

  function computer() {
    const computerPosition = computerPlayer(
      player2.gameBoard.getAccurateShots(),
      player2.gameBoard.getMissedShots(),
      player2.gameBoard.getGameBoardSize(),
    );
    const accurateHit = player1.gameBoard.receiveAttack([
      computerPosition.randomX,
      computerPosition.randomY,
    ]);
    populateGameBoardDOMWithShots(playerTwoAttackBoard, player1);
    if (accurateHit) computer();
  }

  playerOneAttackBoard.addEventListener("click", (event) => {
    if (event.target.getAttribute("class") === "playerOneAttackBoard") return;
    const posX = event.target.dataset.x;
    const posY = event.target.dataset.y;
    const hit = player2.gameBoard.receiveAttack([posX, posY]);
    populateGameBoardDOMWithShots(playerOneAttackBoard, player2);

    if (hit) {
      currentPlayer = player1.playerType;
    } else {
      currentPlayer = player2.playerType;
      computer();
    }
  });
}
game();

import { Ship } from "./ship.js";
export function GameBoard() {
  const BOARD_SIZE_X = 10;
  const BOARD_SIZE_Y = 10;

  let shipOnBoard = [];
  let missedShots = [];
  let accurateShots = [];
  const shipName = [
    { size: 5, name: "Carrier" },
    { size: 4, name: "Battleship" },
    { size: 3, name: "Carrier" },
    { size: 2, name: "Destroyer" },
  ];
  return {
    addShip(position) {
      shipOnBoard.push({
        position: position,
        ship: Ship(position.length),
      });
    },
    getGameBoardSize() {
      return {
        x: BOARD_SIZE_X,
        y: BOARD_SIZE_Y,
      };
    },
    getShips() {
      return shipOnBoard;
    },
    getMissedShots() {
      return missedShots;
    },
    getAccurateShots() {
      return accurateShots;
    },
    receiveAttack(position) {
      let shipHit = false;
      const [attackX, attackY] = position;
      for (const ship of shipOnBoard) {
        for (const shipPos of ship.position) {
          const [onPositionX, onPositionY] = shipPos;
          if (+attackX === onPositionX && +attackY === onPositionY) {
            ship.ship.hit();
            accurateShots.push(position);
            shipHit = true;
          }
        }
      }
      if (shipHit === false) missedShots.push(position);
    },
  };
}

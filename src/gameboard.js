import { Ship } from "./ship.js";
export function GameBoard() {
  const BOARD_SIZE_X = 10;
  const BOARD_SIZE_Y = 10;

  let shipOnBoard = [];
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
    getShips() {
      return shipOnBoard;
    },
  };
}

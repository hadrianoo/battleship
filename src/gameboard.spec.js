import { GameBoard } from "./gameboard.js";

describe("test gameboard factory", () => {
  test("place ship at specific coordinates", () => {
    const gameboard = GameBoard();
    gameboard.addShip([
      [2, 3],
      [2, 4],
    ]);
    console.log(gameboard.getShips());
    expect(gameboard.getShips()[0].position.length).toEqual(2);
  });
  test("ship receive attack", () => {
    const gameboard = GameBoard();
    gameboard.addShip([
      [3, 6],
      [4, 6],
    ]);
    gameboard.addShip([
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
    ]);
    gameboard.addShip([
      [4, 4],
      [4, 5],
      [4, 6],
    ]);
    gameboard.receiveAttack([3, 6]);
    gameboard.receiveAttack([4, 6]);
    expect(gameboard.getShips()[0].ship.isSunk()).toEqual(true);
  });
  test("ship record missed attack", () => {
    const gameboard = GameBoard();
    gameboard.addShip([
      [3, 6],
      [4, 6],
    ]);

    gameboard.receiveAttack([3, 6]);
    gameboard.receiveAttack([6, 6]);
    expect(gameboard.getShips()[0].ship.isSunk()).toEqual(false);
    expect(gameboard.getMissedShots()).not.toContain([3, 6]);
    expect(gameboard.getMissedShots()).toEqual([[6, 6]]);
  });
  test("second ship in arrray receive attack", () => {
    const gameboard = GameBoard();
    gameboard.addShip([
      [3, 6],
      [4, 6],
    ]);
    gameboard.addShip([
      [1, 1],
      [1, 2],
      [1, 3],
    ]);

    gameboard.receiveAttack([1, 1]);
    gameboard.receiveAttack([1, 2]);
    gameboard.receiveAttack([1, 3]);
    expect(gameboard.getShips()[1].ship.isSunk()).toEqual(true);
  });
});

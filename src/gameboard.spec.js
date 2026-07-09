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
});

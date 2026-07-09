import { Ship } from "./ship.js";

describe("test ship factory", () => {
  test("isSunk return false", () => {
    const newShip = Ship(2);
    expect(newShip.isSunk()).toEqual(false);
  });
  test("isSunk return true", () => {
    const newShip = Ship(2);
    newShip.hit();
    newShip.hit();
    expect(newShip.isSunk()).toEqual(true);
  });
  test("isSunk return true", () => {
    const newShip = Ship(2);
    expect(newShip.length()).toEqual(2);
  });
});

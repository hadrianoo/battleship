function Ship(length) {
  const shipLength = length;
  let hitCounter = 0;

  return {
    hit() {
      hitCounter++;
    },
    isSunk() {
      return shipLength - hitCounter === 0 ? true : false;
    },
    length() {
      return shipLength;
    },
  };
}
export { Ship };

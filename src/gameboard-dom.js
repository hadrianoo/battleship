function createGameBoardDOM(parent, boardSize) {
  let counterForX = 1;
  let counterForY = 1;
  for (let i = 1; i <= boardSize.x * boardSize.y; i++) {
    const div = document.createElement("div");
    div.dataset.x = counterForX;
    div.dataset.y = counterForY;
    parent.appendChild(div);
    counterForX += 1;
    if (i % 10 === 0) {
      counterForY += 1;
      counterForX = 1;
    }
  }
}
function populateGameBoardDOMWithShips(parent, player) {
  for (const shipObj of player.gameBoard.getShips()) {
    for (const position of shipObj.position) {
      const [posX, posY] = position;
      const element = parent.querySelector(
        `[data-x="${posX}"][data-y="${posY}"]`,
      );
      element.dataset.ship = true;
    }
  }
}
export { createGameBoardDOM, populateGameBoardDOMWithShips };

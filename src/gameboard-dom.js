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
      element.dataset.hit = "";
      element.dataset.miss = "";
    }
  }
}

function populateGameBoardDOMWithShots(parent, player) {
  for (const shot of player.gameBoard.getAccurateShots()) {
    const [posX, posY] = shot;
    const element = parent.querySelector(
      `[data-x="${posX}"][data-y="${posY}"]`,
    );
    element.dataset.hit = "true";
  }
  for (const shot of player.gameBoard.getMissedShots()) {
    const [posX, posY] = shot;
    const element = parent.querySelector(
      `[data-x="${posX}"][data-y="${posY}"]`,
    );
    element.dataset.miss = "true";
  }
}

function computerPlayer(accurateShots, missedShots, boardSize) {
  const array = [...accurateShots, ...missedShots];
  const randomX = 1 + Math.floor(Math.random() * boardSize.x);
  const randomY = 1 + Math.floor(Math.random() * boardSize.y);
  for (const pos of array) {
    const [x, y] = pos;
    if (x === randomX && y === randomY) {
      return computerPlayer(accurateShots, missedShots, boardSize);
    }
  }
  return { randomX, randomY };
}

export {
  createGameBoardDOM,
  populateGameBoardDOMWithShips,
  populateGameBoardDOMWithShots,
  computerPlayer,
};

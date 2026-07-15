export function gameBoardDOM(parent, shipBoard, missedBoard, boardSize) {
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";
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
  return parent;
}

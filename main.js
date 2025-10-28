const tiles = document.querySelectorAll(".cell");
let playerTurn = 1;
let board = Array(9).fill(null);
let gameOver = false;

const WINS = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

function winner(b) {
  for (const [a, c, d] of WINS) {
    if (b[a] && b[a] === b[c] && b[a] === b[d]) return b[a];
  }
  return null;
}

tiles.forEach((el, i) => {
  el.addEventListener("click", () => {
    if (gameOver || board[i]) return;

    const mark = playerTurn === 1 ? "X" : "O";
    board[i] = mark;
    el.textContent = mark;

    const w = winner(board);
    if (w) { console.log(`${w} wins`); gameOver = true; return; }

    if (board.every(Boolean)) { console.log("Draw"); gameOver = true; return; }

    playerTurn = 3 - playerTurn;
  });
});

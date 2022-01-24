const p1score = document.getElementById("p1score");
const p2score = document.getElementById("p2score");
const p1arrow = document.getElementById("p1arrow");
const p2arrow = document.getElementById("p2arrow");

let squares = {};

let win = false;

class Player {
  constructor(symbol) {
    this.score = 0;
    this.symbol = symbol;
  }
}

const player1 = new Player("x");
const player2 = new Player("o");
let currentPlayer = player1;
p2arrow.classList.add("arrow-hidden");

function reset() {
  squares = {
    sq1: "",
    sq2: "",
    sq3: "",
    sq4: "",
    sq5: "",
    sq6: "",
    sq7: "",
    sq8: "",
    sq9: "",
  };

  p1score.innerHTML = player1.score;
  p2score.innerHTML = player2.score;

  squareList.forEach((square) => {
    square.textContent = "";
  });
}

const squareList = document.querySelectorAll(".square");

squareList.forEach((square) => {
  square.addEventListener("click", () => {
    if (square.textContent === "x" || square.textContent === "o") return;
    square.textContent = currentPlayer.symbol;
    squares[square.id] = currentPlayer.symbol;
    if (checkWin()) {
      currentPlayer.score += 1;
      reset();
    }
    changePlayer();
  });
});

function changePlayer() {
  currentPlayer = currentPlayer === player1 ? player2 : player1;
  p1arrow.classList.toggle("arrow-hidden");
  p2arrow.classList.toggle("arrow-hidden");
}

function checkWin() {
  if (
    (squares.sq1 !== "" &&
      squares.sq1 === squares.sq2 &&
      squares.sq1 === squares.sq3) || //top row
    (squares.sq4 !== "" &&
      squares.sq4 === squares.sq5 &&
      squares.sq4 === squares.sq6) || // second row
    (squares.sq7 !== "" &&
      squares.sq7 === squares.sq8 &&
      squares.sq7 === squares.sq9) || //third row
    (squares.sq1 !== "" &&
      squares.sq1 === squares.sq4 &&
      squares.sq1 === squares.sq7) || //first column
    (squares.sq2 !== "" &&
      squares.sq2 === squares.sq5 &&
      squares.sq2 === squares.sq8) || //second column
    (squares.sq3 !== "" &&
      squares.sq3 === squares.sq6 &&
      squares.sq3 === squares.sq9) || //third column
    (squares.sq1 !== "" &&
      squares.sq1 === squares.sq5 &&
      squares.sq1 === squares.sq9) || //first diagonal
    (squares.sq3 !== "" &&
      squares.sq3 === squares.sq5 &&
      squares.sq3 === squares.sq7) //second diagonal
  ) {
    return true;
  } else if (Object.values(squares).every((el) => el !== "")) {
    reset();
  }
  return false;
}

function checkWinner() {
  let winner =
    player1.score === player2.score
      ? "draw"
      : player1.score > player2.score
      ? "player 1"
      : "player 2";
  prompt(
    (winner === "draw" ? `The game is a draw.` : `${winner} is the winner!`) +
      ` ${player1.score}/${player2.score}`
  );
}

window.addEventListener("load", reset());

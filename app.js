const p1score = document.getElementById("p1score");
const p2score = document.getElementById("p2score");
const p1arrow = document.getElementById("p1arrow");
const p2arrow = document.getElementById("p2arrow");

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

p1score.innerHTML = player1.score;
p2score.innerHTML = player2.score;


const squareList = document.querySelectorAll(".square");

squareList.forEach(square => {
    square.addEventListener("click", () => {
        square.textContent = currentPlayer.symbol;
        square.clicked = true;
        console.log(square, "clicked");
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        console.log(square);
    })
})
console.log(squareArray);
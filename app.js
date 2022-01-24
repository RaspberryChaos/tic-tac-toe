const p1score = document.getElementById("p1score");
const p2score = document.getElementById("p2score");
const p1arrow = document.getElementById("p1arrow");
const p2arrow = document.getElementById("p2arrow");

class Player {
    constructor() {
        this.score = 0;
    }
}

const player1 = new Player();
const player2 = new Player();

let currentPlayer = player1;
p2arrow.classList.add("arrow-hidden");

p1score.innerHTML = player1.score;
p2score.innerHTML = player2.score;

const timer = document.getElementById("timer");

let timeUp = false;
let mins = 3;
let seconds = 0;
let initialTime = `0${mins}:0${seconds}`;
timer.textContent = initialTime;

const interval = setInterval(updateTime, 1000);

function clear() {
  clearInterval(interval);
}

function updateTime() {
  if (mins === 0 && seconds === 0) {
    clear();
    checkWinner();
    timeUp = true;
  } else if (seconds === 0 && mins > 0) {
    seconds = 59;
    mins -= 1;
  } else {
    seconds -= 1;
  }
  let stringMins = "0" + mins;
  let stringSecs = seconds < 10 ? "0" + seconds : seconds;
  initialTime = `${stringMins}: ${stringSecs}`;
  timer.textContent = `${stringMins}: ${stringSecs}`;
}

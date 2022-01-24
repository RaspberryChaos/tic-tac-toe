const timer = document.getElementById("timer");

let mins = 3;
let seconds = 0;
let initialTime = `03:00`;
timer.textContent = initialTime;

const interval = setInterval(updateTime, 1000);

function clear() {
  clearInterval(interval);
}

function updateTime() {
  if (mins === 0 && seconds === 0) {
    clear();
  } else if (seconds === 0 && mins > 0) {
    seconds = 59;
    mins -= 1;
  } else {
    seconds -= 1;
  }
  console.log(mins, seconds);
  let stringMins = "0" + mins;
  let stringSecs = seconds < 10 ? "0" + seconds : seconds;
  initialTime = `${stringMins}: ${stringSecs}`;
  timer.textContent = `${stringMins}: ${stringSecs}`;
};

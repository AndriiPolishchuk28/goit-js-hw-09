const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let intervalId = null;

btnStart.addEventListener('click', colorSwitcher);
btnStop.addEventListener('click', colorSwitcherStop);


function colorSwitcher () {
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    btnStart.disabled = true;
}

function colorSwitcherStop () {
    clearInterval(intervalId);
    btnStart.disabled = false;
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

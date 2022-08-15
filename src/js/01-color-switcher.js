
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;

startBtn.addEventListener('click', onButtonClick);
// console.log(timerId)
stopBtn.addEventListener('click', onStopClick);

function onButtonClick() {
    startBtn.setAttribute('disabled', 'true');
    timerId = setInterval(setBodyColor, 1000);
}
function setBodyColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}
function onStopClick() {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled')
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
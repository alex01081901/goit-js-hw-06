const buttonEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');
const body = document.body;
buttonEl.addEventListener('click', onBtnColorChange);

function onBtnColorChange() {
  const color = getRandomHexColor()
  body.style.backgroundColor = color;
  colorEl.textContent = color; 
}

function  getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

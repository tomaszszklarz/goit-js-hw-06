const btn = document.querySelector('button.change-color');
const nameColor = document.querySelector('span.color');
const colorBody = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btn.addEventListener('click', () => {
  colorBody.style.background = getRandomHexColor();
  nameColor.textContent = getRandomHexColor();
})


let counterValue = 0;
const btnDown = document.querySelector('button[data-action="decrement"]');
const btnUp = document.querySelector('button[data-action="increment"]');
const zero = document.querySelector('span#value');
zero.textContent = `${counterValue}`;

const clickDown = () => {
    zero.textContent = `${counterValue -= 1}`
};
const clickUp = () => {
    zero.textContent = `${counterValue += 1}`
};
btnDown.addEventListener("click", clickDown);
btnUp.addEventListener("click", clickUp);

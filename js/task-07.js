const slider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

slider.addEventListener('input', () => {
    let sliderValue = slider.value + 'px';
    text.style.fontSize = sliderValue;
})
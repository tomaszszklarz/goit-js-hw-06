const textInput = document.querySelector('input#name-input');
const textOutput = document.querySelector('span#name-output');
textOutput.textContent = 'Anonymous';
const change = (e) => {
    if (!e.currentTarget.value)
        textOutput.textContent = 'Anonymous';
    else textOutput.textContent = `${e.currentTarget.value}`;
}
textInput.addEventListener('input', change);




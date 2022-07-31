const textInput = document.querySelector('input#validation-input');
const long = textInput.getAttribute('data-length');

textInput.addEventListener('blur', () => {
    if (long <= textInput.value.length) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    }
    else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }
}
)

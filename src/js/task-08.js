const form = document.querySelector('.login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const {
        elements: { email, password } } = e.currentTarget;
    if (email.value.length === 0 || password.value.length === 0) {
        return alert("Proszę wypełnić wymagane pola!")
    }
    console.log(`Login: ${email.value}, Password: ${password.value}`);
    e.currentTarget.reset();
});

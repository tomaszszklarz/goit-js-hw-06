const form = document.querySelector('.login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const {
        elements: { email, password } } = e.currentTarget;

})
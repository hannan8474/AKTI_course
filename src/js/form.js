// form.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission behavior

        const nameInput = form.querySelector('#name');
        const emailInput = form.querySelector('#email');
        const messageInput = form.querySelector('#message');

        // Retrieve input values
        const name = nameInput.value
        const email = emailInput.value
        const message = messageInput.value

        // Log values to the console
        console.log(name);
        console.log(email);
        console.log(message);
    });
});

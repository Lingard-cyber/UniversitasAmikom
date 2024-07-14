document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
        } else {
            alert('Login successful!');
            form.reset();
        }
    }, false);
});

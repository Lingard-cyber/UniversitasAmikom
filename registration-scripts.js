document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
        } else {
            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                document.getElementById('confirmPassword').setCustomValidity('Passwords do not match');
                form.classList.add('was-validated');
            } else {
                document.getElementById('confirmPassword').setCustomValidity('');
                form.classList.remove('was-validated');
                alert('Registration successful!');
                form.reset();
            }
        }
    }, false);
});

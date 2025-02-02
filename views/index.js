var adminCredentials = {
    username: 'admin',
    id: '12345',
    password: 'adminpass'
};
document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission
            var usernameInput = document.getElementById('username');
            var idInput = document.getElementById('id');
            var passwordInput = document.getElementById('password');
            var username = usernameInput.value;
            var id = idInput.value;
            var password = passwordInput.value;
            if (username === adminCredentials.username && id === adminCredentials.id && password === adminCredentials.password) {
                window.location.href = 'admin.html';
            }
            else {
                alert('Invalid credentials. Please try again.');
                passwordInput.value = '';
            }
        });
    }
    else {
        console.error('Login form not found');
    }
});

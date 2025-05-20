const form = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'user' && password === 'pass') {
    messageDiv.textContent = 'Login successful!';
    messageDiv.className = 'success';
  } else {
    messageDiv.textContent = 'Invalid credentials';
    messageDiv.className = 'error';
  }
});

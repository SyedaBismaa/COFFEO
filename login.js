document.addEventListener('DOMContentLoaded', function () {
  let UsernameInput = document.getElementById('Username');
  let passwordInput = document.getElementById('password');
  let loginBtn = document.getElementById('login');
  let signupBtn = document.getElementById('signup');

  // LOGIN
  loginBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const nameval = UsernameInput.value.trim();
    const passValue = passwordInput.value.trim();

    const storedUser = localStorage.getItem('username');
    const storedPass = localStorage.getItem('password');

    if (nameval === '' || passValue === '') {
      alert('Please enter both fields');
      return;
    }

    if (nameval === storedUser && passValue === storedPass) {
      alert('Login Successful!');
      window.location.href = 'main.html'; 
    } else {
      alert('Invalid Credentials. Please try again or signup.');
    }
  });

  // SIGNUP
  signupBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const nameval = UsernameInput.value.trim();
    const passValue = passwordInput.value.trim();

    if (nameval === '' || passValue === '') {
      alert('Please enter both fields to register');
      return;
    }

    localStorage.setItem('username', nameval);
    localStorage.setItem('password', passValue);

    alert('Signup Successful! Now you can login.');
  
    UsernameInput.value = '';
    passwordInput.value = '';
  });
});

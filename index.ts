
const adminCredentials = {
    username: 'admin',
    id: '12345',
    password: 'adminpass'
  };
  
 
  document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form') as HTMLFormElement;
  
    if (loginForm) {
      loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
  
      
        const usernameInput = document.getElementById('username') as HTMLInputElement;
        const idInput = document.getElementById('id') as HTMLInputElement;
        const passwordInput = document.getElementById('password') as HTMLInputElement;
  
        const username = usernameInput.value;
        const id = idInput.value;
        const password = passwordInput.value;
  

        if (username === adminCredentials.username && id === adminCredentials.id && password === adminCredentials.password) {

          window.location.href = 'admin.html'; 
        } else {

          alert('Invalid credentials. Please try again.');
  
         
          passwordInput.value = '';
        }
      });
    } else {
      console.error('Login form not found');
    }
  });
  
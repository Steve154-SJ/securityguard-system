
const ADMIN_CREDENTIALS = {
    username: "ashok",
    password: "admin123",
  };

  const loginForm = document.getElementById("loginForm") as HTMLFormElement;
  const errorMessage = document.getElementById("errorMessage") as HTMLElement;
  

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const username = (document.getElementById("username") as HTMLInputElement).value.trim();
    const password = (document.getElementById("password") as HTMLInputElement).value.trim();
  

    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {

      window.location.href = "admin.html";
    } else {

      errorMessage.style.display = "block";
    }
  });
  
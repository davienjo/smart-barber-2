const login = document.getElementById("admin-login");

login.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  try {
    const res = await fetch(
      "https://smart-barber-web-app.onrender.com/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      },
    );

    const data = await res.json();

    if (res.ok) {
      message.style.color = "white";
      message.textContent = "Login successful!";

      //store token
      localStorage.setItem("token", data.token);

      setTimeout(() => {
        window.location.href = "../pages/admin.html";
      }, 1000);
    } else {
      message.style.color = "red";
      message.textContent = data.message;
    }
  } catch (err) {
    message.textContent = "Server error";
  }
});

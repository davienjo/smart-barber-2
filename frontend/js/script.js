// nav

const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

// click outside
document.addEventListener("click", (e) => {
  const isClickInsideMenu = navLinks.contains(e.target);
  const isMenuIcon = menuIcon.contains(e.target);

  if (!isClickInsideMenu && !isMenuIcon) {
    navLinks.classList.remove("active");
  }
});

// appointment form

const form = document.getElementById("book-appointment-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    time: document.getElementById("time").value,
    date: document.getElementById("date").value,
    service: document.getElementById("services").value,
    barber: document.getElementById("barber").value,
  };

  try {
    const response = await fetch(
      "https://smart-barber-web-app.onrender.com/bookings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      message.textContent = "Booking successful!";
      message.style.color = "green";
      form.reset();

      setTimeout(() => {
        message.textContent = "";
      }, 3000);
    } else {
      message.textContent = "Booking failed!";
      message.style.color = "red";
    }
  } catch (error) {
    console.log(error);
    message.textContent = "Server error!";
    message.style.color = "red";
  }
});

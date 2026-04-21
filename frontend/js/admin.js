const container = document.getElementById("bookings-container");

let currentBookingId = null;

// LOAD BOOKINGS (READ from backend)
function loadBookings() {
  fetch("https://smart-barber-web-app.onrender.com/bookings")
    .then((res) => res.json())
    .then((data) => {
      container.innerHTML = "";

      if (data.length === 0) {
        container.innerHTML = `
    <p style="text-align:center; color:gray;">
      No bookings yet 🚫
    </p>
  `;
        return;
      }
      data.forEach(renderBooking);
    })
    .catch((err) => console.log("Error loading bookings:", err));
}

loadBookings();

// RENDER SINGLE BOOKING (UI only)
function renderBooking(booking) {
  const bookingDiv = document.createElement("div");
  bookingDiv.classList.add("booking-card");

  bookingDiv.innerHTML = `
    <p>Name: ${booking.name}</p>
    <p>Email: ${booking.email}</p>
    <p>Date: ${booking.date}</p>
    <p>Time: ${booking.time}</p>
    <p>Service: ${booking.service}</p>
    <p>Barber: ${booking.barber}</p>

    <div class="actions">
      <button onclick="editBooking('${booking._id}')">Edit</button>
      <button onclick="deleteBooking('${booking._id}')">Delete</button>
    </div>
  `;

  container.appendChild(bookingDiv);
}

//  DELETE BOOKING
function deleteBooking(id) {
  const confirmDelete = confirm("Are you sure you want to delete this booking");

  if (!confirmDelete) {
    return;
  }

  fetch(`https://smart-barber-web-app.onrender.com/bookings/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => {
      alert("Booking deleted");
      loadBookings();
    })
    .catch((err) => console.log("Delete error:", err));
}

//  EDIT BOOKING (OPEN FORM + LOAD DATA)
function editBooking(id) {
  currentBookingId = id;

  fetch(`https://smart-barber-web-app.onrender.com/bookings/${id}`)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("edit-name").value = data.name;
      document.getElementById("edit-email").value = data.email;
      document.getElementById("edit-date").value = data.date;
      document.getElementById("edit-time").value = data.time;
      document.getElementById("edit-service").value = data.service;
      document.getElementById("edit-barber").value = data.barber;

      document.getElementById("editModal").style.display = "flex";
    })
    .catch((err) => console.log("Edit load error:", err));
}
function closeModal() {
  document.getElementById("editModal").style.display = "none";
}

// UPDATE BOOKING (SAVE TO DATABASE)
function updateBooking() {
  const updatedData = {
    name: document.getElementById("edit-name").value,
    email: document.getElementById("edit-email").value,
    date: document.getElementById("edit-date").value,
    time: document.getElementById("edit-time").value,
    service: document.getElementById("edit-service").value,
    barber: document.getElementById("edit-barber").value,
  };

  fetch(
    `https://smart-barber-web-app.onrender.com/bookings/${currentBookingId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    },
  )
    .then((res) => res.json())
    .then(() => {
      alert("Booking updated!");

      document.getElementById("editModal").style.display = "none";

      loadBookings();
    })
    .catch((err) => console.log("Update error:", err));
}

// load chats

function loadChart() {
  fetch("https://smart-barber-web-app.onrender.com/bookings/per-day")
    .then((res) => res.json())
    .then((data) => {
      const labels = Object.keys(data); // dates
      const values = Object.values(data); // counts

      const ctx = document.getElementById("bookingChart").getContext("2d");

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Bookings per Day",
              data: values,
            },
          ],
        },
      });
    })
    .catch((err) => console.log(err));
}

loadChart();

// Statistics
function loadStats() {
  fetch("https://smart-barber-web-app.onrender.com/bookings/stats")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("totalBookings").textContent =
        `Total Bookings: ${data.totalBookings}`;

      document.getElementById("todayBookings").textContent =
        `Today’s Bookings: ${data.todayBookings}`;
    })
    .catch((err) => console.log("Stats error:", err));
}
loadBookings();
loadStats();

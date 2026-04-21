const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Booking = require("./models/Booking");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");
const jwt = require("jsonwebtoken");

// Load env
dotenv.config();

// Create app FIRST
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connected 🚀"))
  .catch((err) => console.log(err));

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("server is working");
});

// BOOKINGS ROUTE/Express receives data
app.post("/bookings", async (req, res) => {
  try {
    const newBooking = new Booking({
      ...req.body,
      date: new Date(req.body.date).toISOString().split("T")[0],
    });

    await newBooking.save();

    res.json({
      message: "booking saved successfully",
      data: newBooking,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// GET all readings/bookings

app.get("/bookings", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

// // stats

app.get("/bookings/stats", async (req, res) => {
  try {
    const bookings = await Booking.find();

    const totalBookings = bookings.length;

    const today = new Date().toISOString().split("T")[0];

    const todayBookings = bookings.filter((b) => b.date === today).length;

    res.json({
      totalBookings,
      todayBookings,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching stats" });
  }
});

// get one booking

app.get("/bookings/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: "booking not found" });
    }
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: "invalid ID" });
  }
});

// delete a booking

app.delete("/bookings/:id", async (req, res) => {
  try {
    const deleteBooking = await Booking.findByIdAndDelete(req.params.id);

    if (!deleteBooking) {
      return res.status(404).json({ message: "booking not found" });
    }
    res.json({ message: "booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "error deleting booking" });
  }
});

// update booking

app.put("/bookings/:id", async (req, res) => {
  try {
    const updateBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after" },
    );

    if (!updateBooking) {
      return res.status(404).json({ message: "booking not found" });
    }
    res.json(updateBooking);
  } catch (error) {
    res.status(500).json({ message: "error updating booking" });
  }
});

// ==========CREATE ADMIN/LOGIN ROUTE===========
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({ message: "email not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }

    const token = jwt.sign({ id: admin._id }, "secretkey", { expiresIn: "1d" });

    res.json({ token });
  } catch (err) {
    console.log("LOGIN ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// chart-bookings per day

app.get("/bookings/per-day", async (req, res) => {
  try {
    const bookings = await Booking.find();

    const counts = {};

    bookings.forEach((b) => {
      const date = b.date;

      if (!counts[date]) {
        counts[date] = 0;
      }

      counts[date]++;
    });

    res.json(counts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error generating chart data" });
  }
});

// START SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
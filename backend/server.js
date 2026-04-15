const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Booking = require("./models/Booking");

mongoose
  .connect("mongodb://127.0.0.1:27017/barbershop")
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

const app = express();

app.use(cors());
app.use(express.json());

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("server is working");
});

// BOOKINGS ROUTE/Express receives data
app.post("/bookings", async (req, res) => {
  try {
    // turn data into a structured object
    const newBooking = new Booking(req.body);
    // save to mongodb
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

// START SERVER
app.listen(5000, () => {
  console.log("server running on port 5000");
});

// GET all readings/bookings

app.get("/bookings", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
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
      { new: true },
    );

    if (!updateBooking) {
      return res.status(404).json({ message: "booking not found" });
    }
    res.json(updateBooking);
  } catch (error) {
    res.status(500).json({ message: "error deleting booking" });
  }
});

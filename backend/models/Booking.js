
// booking blueprint
const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  time:String,
  date:String,
  service:String,
  barber:String,
});
module.exports = mongoose.model("Booking", bookingSchema);
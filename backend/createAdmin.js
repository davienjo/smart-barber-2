const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

mongoose
  .connect(
    "mongodb://admin:footwear@ac-y6snq5w-shard-00-00.senypos.mongodb.net:27017,ac-y6snq5w-shard-00-01.senypos.mongodb.net:27017,ac-y6snq5w-shard-00-02.senypos.mongodb.net:27017/barbershop?ssl=true&replicaSet=atlas-a3e65v-shard-0&authSource=admin&retryWrites=true&w=majority",
  )
  .then(() => {
    console.log("MongoDB connected");

    createAdmin();
  })
  .catch((err) => {
    console.log("DB connection error:", err);
  });

async function createAdmin() {
  try {
    const hashedPassword = await bcrypt.hash("1234", 10);

    await Admin.create({
      email: "admin@gmail.com",
      password: hashedPassword,
    });

    console.log("Admin created successfully");

    mongoose.connection.close(); 
  } catch (err) {
    console.log("Error creating admin:", err);
  }
}

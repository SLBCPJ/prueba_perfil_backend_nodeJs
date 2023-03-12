const mongoose = require("mongoose");
const User = require("../models/User");
const options = { useNewUrlParser: true, useUnifiedTopology: true };
//conexion a la DB de mongodb por medio de atlas
const connectDB = async () => {
  try {
    // mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.DB_URI, options);
    console.log(`MongoDB connected: ${conn.connection.name}`);
    /*     await User.updateMany(
      {},
      { $set: { confirmationType: "email", confirmationCode: "some_code" } }
    );
    console.log("Users updated successfully"); */
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

/* const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async () => {
  console.log("Connected to database");

  try {
    await User.updateMany({}, { $set: { confirmationType: "email" } });
    console.log("Users updated successfully");
  } catch (err) {
    console.error("Error updating users:", err);
  }

  mongoose.connection.close();
});
 */
module.exports = connectDB;

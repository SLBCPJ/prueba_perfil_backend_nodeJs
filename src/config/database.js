const mongoose = require("mongoose");
const options = { useNewUrlParser: true, useUnifiedTopology: true };
//conexion a la DB de mongodb por medio de atlas
const connectDB = async () => {
  try {
    // mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.DB_URI, options);
    console.log(`MongoDB connected: ${conn.connection.name}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

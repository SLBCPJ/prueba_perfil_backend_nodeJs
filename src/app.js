require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/database");
const app = express();
const authRoutes = require("./routes/auth.routes");
const doctorRoutes = require("./routes/doctor.routes");
const patientRoutes = require("./routes/patient.routes");
const hospitalRoutes = require("./routes/hospital.routes");
const PORT = process.env.PORT || 3000;

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use("/api", authRoutes);
app.use("/api", doctorRoutes);
app.use("/api", patientRoutes);
app.use("/api", hospitalRoutes);

connectDB();
app.listen(PORT, () =>
  console.log(`Server Ready On Port http://localhost:${PORT}`)
);

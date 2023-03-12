const express = require("express");
const router = express.Router();

const { registerPatient } = require("../controllers/patient.controller");
const authMiddleware = require("../middlewares/session");

// Rutas para creación de pacientes
router.post("/patients", authMiddleware, registerPatient);

module.exports = router;

const express = require("express");
const router = express.Router();

const { registerPatient } = require("../controllers/patient.controller");
const authMiddleware = require("../middlewares/session");
const { validateRegisterPatient } = require("../validators/patient");

// Rutas para creación de pacientes
router.post(
  "/patients",
  authMiddleware,
  validateRegisterPatient,
  registerPatient
);

module.exports = router;

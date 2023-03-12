const express = require("express");
const router = express.Router();

const { registerHospital } = require("../controllers/hospital.controller");
const authMiddleware = require("../middlewares/session");
const { validateRegisterHospital } = require("../validators/hospital");

// Rutas para creación de hospitales
router.post(
  "/hospitals",
  authMiddleware,
  validateRegisterHospital,
  registerHospital
);

module.exports = router;

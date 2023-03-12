const express = require("express");
const router = express.Router();
const { registerDoctor } = require("../controllers/doctor.controller");
const authMiddleware = require("../middlewares/session");
const { validateRegisterDoctor } = require("../validators/doctor");

// Ruta para el registro de médicos por parte de hospitales
router.post("/medicos", authMiddleware, validateRegisterDoctor, registerDoctor);

module.exports = router;

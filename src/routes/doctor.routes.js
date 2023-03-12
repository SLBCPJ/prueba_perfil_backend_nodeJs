const express = require("express");
const router = express.Router();
const { registerDoctor } = require("../controllers/doctorController");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/session");

// Ruta para el registro de médicos por parte de hospitales
router.post(
  "/medicos",
  [
    body("name", "El nombre es obligatorio").notEmpty(),
    body("speciality", "La especialidad es obligatoria").notEmpty(),
    authMiddleware,
  ],
  registerDoctor
);

module.exports = router;

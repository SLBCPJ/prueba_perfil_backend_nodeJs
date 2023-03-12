const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const { registerHospital } = require("../controllers/hospital.controller");
const authMiddleware = require("../middlewares/session");

// Rutas para creación de hospitales
router.post(
  "/hospitals",
  [
    check("name", "El nombre del hospital es requerido").not().isEmpty(),
    check("address", "La dirección del hospital es requerida").not().isEmpty(),
    check("services", "Se requiere al menos un servicio médico").isArray({
      min: 1,
    }),
    authMiddleware,
  ],
  registerHospital
);

module.exports = router;

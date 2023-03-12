const express = require("express");
const router = express.Router();
const {
  registerUser,
  confirmUser,
  login,
} = require("../controllers/auth.controller");
const {
  validateRegister,
  validateLogin,
  validateFieldConfirm,
} = require("../validators/auth");

// Rutas para registro, autenticación y login de usuarios
router.post("/register", validateRegister, registerUser);
router.post("/confirm", validateFieldConfirm, confirmUser);
router.post("/login", validateLogin, login);

// Endpoint para solicitar un correo electrónico de recuperación de contraseña, faltó complementarla
router.post("/forgot-password", (req, res) => {});

module.exports = router;

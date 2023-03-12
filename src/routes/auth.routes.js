const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {
  registerUser,
  confirmUser,
  login,
} = require("../controllers/auth.controller");

// Rutas para registro, autenticación y login de usuarios
router.post(
  "/register",
  [
    body("identification").isString().notEmpty(),
    body("email").isEmail(),
    body("phone").isString().notEmpty(),
    body("password").isString().notEmpty(),
    body("type").isString().notEmpty(),
  ],
  registerUser
);
router.post("/confirm", confirmUser);
router.post(
  "/login",
  body("email").isEmail(),
  body("password").notEmpty(),
  login
);

module.exports = router;

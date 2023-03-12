const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");
const validateLogin = [
  check("identification")
    .exists()
    .notEmpty()
    .withMessage("Campo requerido")
    .isString(),
  check("password")
    .exists()
    .notEmpty()
    .isString()
    .withMessage("La contraseña es requerida"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateRegister = [
  check("identification")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 6, max: 12 })
    .withMessage("La identificación debe tener entre 6 y 12 caracteres"),
  check("email")
    .exists()
    .notEmpty()
    .isEmail()
    .withMessage("Debe ingresar un correo electrónico válido"),
  check("password")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 6, max: 100 })
    .withMessage("La contraseña debe tener al menos 8 caracteres"),
  check("phone")
    .exists()
    .notEmpty()
    .isLength({ min: 7, max: 15 })
    .withMessage("El número de teléfono debe tener entre 7 y 15 caracteres"),
  check("type")
    .exists()
    .notEmpty()
    .withMessage("El campo es requerido")
    .isLength({ min: 8, max: 10 })
    .withMessage("El campo debe tener entre 8 y 10 caracteres"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
const validateFieldConfirm = [
  check("confirmationCode")
    .exists()
    .notEmpty()
    .withMessage("Campo requerido")
    .isString(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateLogin, validateRegister, validateFieldConfirm };

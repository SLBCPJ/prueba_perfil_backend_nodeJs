const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");

const validateRegisterDoctor = [
  check("name")
    .exists()
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isString()
    .isLength({ min: 3, max: 12 })
    .withMessage("El nombre debe tener entre 3 y 30 caracteres"),
  check("speciality")
    .exists()
    .notEmpty()
    .withMessage("La especialidad es obligatoria"),
  /*   check("userId")
    .exists()
    .notEmpty()
    .isMongoId()
    .withMessage(
      "Se espera que el campo 'userId' exista, no esté vacío y sea un identificador válido de MongoDB."
    ), */
  check("hospitalId")
    .exists()
    .notEmpty()
    .isMongoId()
    .withMessage(
      "Se espera que el campo 'userId' exista, no esté vacío y sea un identificador válido de MongoDB."
    ),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateRegisterDoctor };

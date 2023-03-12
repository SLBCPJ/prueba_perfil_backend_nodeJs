const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");

const validateRegisterPatient = [
  check("name").exists().notEmpty().withMessage("El nombre es obligatorio."),
  check("address")
    .exists()
    .notEmpty()
    .withMessage("La dirección es obligatoria."),
  check("birthDate")
    .exists()
    .notEmpty()
    .isDate()
    .withMessage("Solo se acepta un formato de fecha valido (YYYY-MM-DD)."),
  check("userId")
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

module.exports = { validateRegisterPatient };

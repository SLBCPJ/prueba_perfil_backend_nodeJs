const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");

const validateRegisterHospital = [
  check("name", "El nombre del hospital es requerido").exists().notEmpty(),
  check("address", "La dirección del hospital es requerida")
    .exists()
    .notEmpty(),
  check("services", "Se requiere al menos un servicio médico").isArray({
    min: 1,
  }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateRegisterHospital };

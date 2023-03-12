const { validationResult } = require("express-validator");
const Patient = require("../models/Patient");

exports.registerPatient = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, address, birthDate, userId } = req.body;

    // Verificar si el usuario ya tiene un perfil de paciente registrado
    const existingPatient = await Patient.findOne({ userId });
    if (existingPatient) {
      return res
        .status(400)
        .json({ message: "El paciente ya existe con ese UserId" });
    }

    // Crear el perfil de paciente
    const newPatient = await Patient.create({
      name,
      address,
      birthDate,
      userId,
    });

    res.status(200).json({ message: "Perfil de paciente creado", newPatient });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Ha ocurrido un error" });
  }
};

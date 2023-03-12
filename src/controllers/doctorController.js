const { validationResult } = require("express-validator");
const Doctor = require("../models/Doctor");
const User = require("../models/User");
const Hospital = require("../models/Hospital");

exports.registerDoctor = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, speciality } = req.body;
    const userId = req.user.id;

    // Verificar si el usuario ya tiene un perfil de médico registrado
    const existingDoctor = await Doctor.findOne({ userId });
    if (existingDoctor) {
      return res.status(400).json({ message: "El médico ya existe" });
    }

    // Buscar el hospital al que está asociado el médico
    const user = await User.findById(userId);
    const hospital = await Hospital.findOne({ _id: user.hospitalId });
    if (!hospital) {
      return res.status(400).json({ message: "No se encontró el hospital" });
    }

    const newDoctor = new Doctor({
      name,
      speciality,
      userId,
      hospitalId: hospital._id,
    });

    await newDoctor.save();

    res
      .status(201)
      .json({ message: "Médico creado exitosamente", doctor: newDoctor });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Ha ocurrido un error" });
  }
};

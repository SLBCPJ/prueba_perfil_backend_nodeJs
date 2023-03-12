const Doctor = require("../models/Doctor");
const Hospital = require("../models/Hospital");

exports.registerDoctor = async (req, res) => {
  try {
    const { name, speciality, hospitalId } = req.body;
    const userId = req.user ? req.user.id : undefined;
    // Verificar si el usuario ya tiene un perfil de médico registrado
    const existingDoctor = await Doctor.findOne({ userId });
    if (existingDoctor) {
      return res.status(400).json({ message: "El médico ya existe" });
    }

    // Buscar el hospital al que está asociado el médico
    const hospital = await Hospital.findOne({ _id: hospitalId });
    if (!hospital) {
      return res.status(400).json({ message: "No se encontró el hospital" });
    }

    const newDoctor = new Doctor({
      name,
      speciality,
      userId,
      hospitalId,
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

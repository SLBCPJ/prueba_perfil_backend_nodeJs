const Hospital = require("../models/Hospital");

exports.registerHospital = async (req, res) => {
  try {
    const { name, address, services, userId } = req.body;
    // Verificar si ya existe un hospital con el userId proporcionado
    const hospitalExists = await Hospital.findOne({ userId });
    if (hospitalExists) {
      return res
        .status(409)
        .json({ message: "Ya existe un hospital con ese userId" });
    }

    const newHospital = new Hospital({
      name,
      address,
      services,
      userId,
    });

    await newHospital.save();

    res
      .status(201)
      .json({ message: "Hospital creado exitosamente", hospital: newHospital });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Ha ocurrido un error" });
  }
};

const mongoose = require("mongoose");

const observacionSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    default: Date.now,
    required: true,
  },
  especialidad: {
    type: String,
    required: true,
  },
  detalle: {
    type: String,
    required: true,
  },
  paciente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Paciente",
    required: true,
  },
  medico: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Medico",
    required: true,
  },
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
    required: true,
  },
});

const Observacion = mongoose.model("Observacion", observacionSchema);

module.exports = Observacion;

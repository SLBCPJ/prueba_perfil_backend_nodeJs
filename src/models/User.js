const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    identification: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Hospital", "Paciente"],
      required: true,
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

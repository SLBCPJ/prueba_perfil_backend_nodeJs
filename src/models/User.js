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
      set: (value) =>
        value.toLowerCase().charAt(0).toUpperCase() +
        value.toLowerCase().slice(1),
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);
UserSchema.pre("save", function (next) {
  if (this.type) {
    this.type = this.type.toLowerCase();
    this.type = this.type.charAt(0).toUpperCase() + this.type.slice(1);
  }
  next();
});

module.exports = mongoose.model("User", UserSchema);

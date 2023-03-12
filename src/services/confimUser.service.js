const User = require("../models/User");
const { verifyToken } = require("../utils/handleToken");

const confirmUser = async (confirmationCode) => {
  try {
    const tokenData = await verifyToken(confirmationCode);

    const user = await User.findById(tokenData.userId);
    if (!user) {
      throw new Error("El código de confirmación es inválido");
    }

    if (user.confirmed) {
      throw new Error("El usuario ya fue confirmado");
    }

    user.confirmed = true;
    await user.save();

    return "El usuario ha sido confirmado correctamente";
  } catch (error) {
    console.error(error.message);
    throw new Error("Ha ocurrido un error al confirmar el usuario");
  }
};

module.exports = confirmUser;

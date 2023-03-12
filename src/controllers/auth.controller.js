const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const authService = require("../services/auth.service");
const sendConfirmationEmail = require("../utils/sendConfirmationEmail");
const confirmUser = require("../services/confimUser.service");
const User = require("../models/User");
const { encrypt } = require("../utils/handleEncriptPass");
const { tokenSign } = require("../utils/handleToken");
exports.registerUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { identification, email, phone, password, type } = req.body;

    // Verificar si el usuario ya existe
    const user = await authService.findUserByIdentificationOrEmail(
      identification,
      email
    );
    if (user) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // Encriptar la contraseña
    const hashedPassword = await encrypt(password);

    // Crear el usuario
    const newUser = await authService.createUser(
      identification,
      email,
      phone,
      hashedPassword,
      type
    );

    // Enviar correo electrónico de confirmación
    await sendConfirmationEmail(newUser);

    res.status(200).json({
      message: `Se ha enviado un correo electrónico a ${newUser.email}. Por favor, revise su bandeja de entrada donde encontrara el token que debera ingresar para activar su cuenta.`,
      newUser,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Ha ocurrido un error" });
  }
};

exports.confirmUser = async (req, res) => {
  try {
    const { confirmationCode } = req.body;
    const message = await confirmUser(confirmationCode);

    res.status(200).json({ message });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Ha ocurrido un error" });
  }
};

exports.login = async (req, res) => {
  const { identification, password } = req.body;

  try {
    // Buscar al usuario por su identificación
    const user = await User.findOne({ identification });

    // Comprobar que el usuario existe y su contraseña es correcta

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }
    if (!user.confirmed) {
      // verifica si el usuario ha confirmado su registro
      return res.status(401).json({
        message: "Debes confirmar tu registro para poder acceder al sistema",
      });
    }

    // Crear un token de sesión para el usuario
    const token = await tokenSign(user);

    return res.json({
      message: "Inicio de sesión exitoso",
      token,
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Hubo un error al intentar iniciar sesión",
    });
  }
};

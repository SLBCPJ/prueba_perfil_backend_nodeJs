const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const sendConfirmationEmail = async (user) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const confirmationCode = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET
    );
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: user.email,
      subject: "Confirmación de registro",
      text: `Por favor, ingrese el token en la ruta para confirmar su cuenta: ${confirmationCode}`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error.message);
    throw new Error("No se pudo enviar el correo de confirmación");
  }
};

module.exports = sendConfirmationEmail;

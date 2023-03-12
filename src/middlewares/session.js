/* const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  try {
    // Obtener el token del encabezado de autorización
    const token = req.header("Authorization").replace("Bearer ", "");

    // Verificar el token y obtener los datos del usuario
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
    });
    console.log(user._id);
    // log
    // Comprobar si el usuario existe y está autenticado
    if (!user) {
      throw new Error();
    }

    // Añadir los datos del usuario a la solicitud para que los controladores puedan acceder a ellos
    req.token = token;
    req.user = user;

    // Continuar con la solicitud
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "No autorizado" });
  }
};

module.exports = authMiddleware;
 */
// const jwt = require("jsonwebtoken");
/* const { verifyToken } = require("../utils/handleToken");

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: "NEED_SESSION" });
    }
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token);
    if (!dataToken._id) {
      return res.status(401).json({ message: "ERROR_ID_TOKEN" });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
module.exports = authMiddleware; */

/* const User = require("../models/User");

// Middleware para verificar que el usuario esté autenticado

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");

  try {
    // Verifica que el token sea válido
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload.id);
    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "No autorizado" });
  }
};
module.exports = authMiddleware; */

const jwt = require("jsonwebtoken");
// const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  /*  const token = req.header("Authorization").replace("Bearer ", "");
  console.log(token);
  try {
    if (!token) {
      throw new Error();
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload._id);
    console.log(payload);
    console.log(user);

    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "No autorizado" });
  } */
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ mensaje: "Token inválido" });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ mensaje: "Token no proveído" });
  }
};

module.exports = authMiddleware;

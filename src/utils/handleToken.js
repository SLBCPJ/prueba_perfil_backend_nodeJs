const jwt = require("jsonwebtoken");

const tokenSign = async (user) => {
  return jwt.sign(
    {
      _id: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
};

const verifyToken = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.exp < Date.now() / 1000) {
      throw new Error("El token ha expirado");
    }
    return decoded;
  } catch (e) {
    return null;
  }
};

const decodeSign = (token) => {
  return jwt.decode(token, null);
};

module.exports = { tokenSign, decodeSign, verifyToken };

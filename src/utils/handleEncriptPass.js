const bcrypt = require("bcrypt");

const encrypt = async (textPlain) => {
  const hash = await bcrypt.hash(textPlain, 10);
  return hash;
};

module.exports = { encrypt };

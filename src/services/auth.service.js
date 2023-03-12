const User = require("../models/User");

exports.findUserByIdentificationOrEmail = async (identification, email) => {
  const user = await User.findOne({
    $or: [{ identification }, { email }],
  });
  return user;
};

exports.createUser = async (identification, email, phone, password, type) => {
  const user = new User({
    identification,
    email,
    phone,
    password,
    type,
    confirmed: false,
  });
  await user.save();
  return user;
};

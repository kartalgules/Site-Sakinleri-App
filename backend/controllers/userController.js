const userModel = require("../models/userModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const tokenCreate = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "1h" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.login(email, password);

    const token = tokenCreate(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const singUpUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.singup(email, password);
    const token = tokenCreate(user._id);
    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

module.exports = {
  loginUser,
  singUpUser,
};

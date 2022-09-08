const User = require("../models/user");
const jwt = require("jsonwebtoken");

//*register
const register = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    const token = user.createJWT();
    res.status(200).json({ user: { name: user.name }, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
};

//* login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Email and password is required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "there is no user with this email" });
    }
    const isPassword = await user.comparPassword(password);
    if (!isPassword) {
      res.status(400).json({ message: "password or email dose not match" });
    }
    const token = user.createJWT();

    res
      .status(200)
      .json({ user: { userId: user._id, name: user.name }, token });
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

module.exports = {
  register,
  login,
};

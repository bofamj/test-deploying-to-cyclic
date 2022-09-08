const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "please provide a name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    require: [true, "please provide a email"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "please provide a valid email",
    ],
  },
  password: {
    type: String,
    require: [true, "please provide a password"],
    minlength: 6,
  },
});

//*hashing password
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//*creat jwt
userSchema.methods.createJWT = function () {
  return jwt.sign({ id: this._id, name: this.name }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

//*comparing a password
userSchema.methods.comparPassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};
module.exports = mongoose.model("User", userSchema);

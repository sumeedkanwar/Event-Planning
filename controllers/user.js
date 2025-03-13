const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { name, pass } = req.body;
    const user = await User.findOne({
      name,
    });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const newUser = new User({
      name,
      pass,
    });
    await newUser.save();
    res.status(201).json({
      message: "User created",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { name, pass } = req.body;
    const user = await User.findOne({
      name,
    });
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    const isMatch = await bcrypt.compare(pass, user.pass);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(payload, secret, { expiresIn: "1h" }, (err, token) => {
      if (err) throw err;
      res.status(200).json({
        token,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = { register, login };

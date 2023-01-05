const Customer = require("./../models/customerModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const signtoken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const signup = async (req, res) => {
  try {
    // const newUser = await Customer.create(req.body); multiple users [{name : email: phone: , address:  }, {name : email: phone: , address:  }]

    const { password } = req.body;

    const existing = await Customer.findOne({ email: req.body.email });
    if (existing) {
      return res.status(400).json({
        error: true,
        message: "User with this email already exists",
      });
    }

    const encryptPassword = await bcrypt.hash(password, 10);
    const newUser = new Customer(req.body); //{name : email: phone: , address:  };
    newUser.password = encryptPassword;
    await newUser.save();
    const token = signtoken(newUser._id);
    return res.status(200).json({
      success: true,
      token,
      data: newUser,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await Customer.findOne({ email: email });
  const { password: userPassword } = user;
  const token = signtoken(user._id);
  if (await bcrypt.compare(password, userPassword)) {
    return res.status(200).json({
      success: true,
      token,
      user,
    });
  } else {
    return res.status(400).json({
      error: true,
      message: "Please enter valid credentials",
    });
  }
};

module.exports = { signup, login };

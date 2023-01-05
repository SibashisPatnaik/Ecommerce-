const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const customerSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
  },
  gender: {
    type: String,
    required: [true, "Please tell us your name!"],
    enum: ["Male", "Female"],
    default : null,
  },
  email: {
    type: String,
    required: [true, "Please tell us your email!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "please provide password"],
    minlength: 8,
  },
  phoneno: {
    type: Number,
    required: [true, "Provide the personal no"],
    unique: true,
    trim: true,
    min: [999999999, "phone no must be 10 digits"],
    max: [9999999999, "phone no must be 10 digits"],
  },
});

module.exports = mongoose.model("customer", customerSchema);

const express = require("express");
const router = express.Router();
const customerController = require("./../Controllers/customerController");
const AuthController = require("./../Controllers/AuthController");

router
  .route("/signup")
  .post(AuthController.signup)
router
  .route("/login")
  .post(AuthController.login)
  
router.route("/").get(customerController.getcustomer);

module.exports = router; 
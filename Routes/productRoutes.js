const express = require("express");
const router = express.Router();
const productController=require("./../Controllers/productController")

router.route('/').post(productController.createproducts).get(productController.getproduct);

module.exports = router;

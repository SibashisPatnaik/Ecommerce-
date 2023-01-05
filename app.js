const express = require("express");
const ExpressApp = express();
var bodyParser = require("body-parser");
const productRoutes=require('./Routes/productRoutes')
const customerRoutes = require("./Routes/customerRoutes");

ExpressApp.use(bodyParser.urlencoded({ extended: false }));
ExpressApp.use(bodyParser.json());

ExpressApp.use("/api/v1/projects", productRoutes);
ExpressApp.use("/api/v1/customer", customerRoutes);


module.exports = ExpressApp;

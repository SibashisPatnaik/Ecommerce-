const Customer = require("./../models/customerModel");

exports.createcustomer = async (req, res, next) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        customer,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      data: {
        error,
      },
    });
  }
};






exports.getcustomer = async (req, res, next) => {
  try {
    const customer = await Customer.find();
    res.status(200).json({
      status: "success",
      data: {
        customer
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      data: {
        error,
      },
    });
  }
};

const Product = require("./../models/productModel");

exports.createproducts = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        product,
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


exports.getproduct = async (req, res, next) => {
  try {
    const product = await Product.find();
    res.status(200).json({
      status: "success",
      data: {
        product,
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

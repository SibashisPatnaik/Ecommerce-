const mongoose=require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us  name of the poduct!"],
     unique:true
  },
  price: {
    type: Number,
    required: [true, "Please tell us the price!"]
  },
}); 

const Product = mongoose.model("Products", productSchema);
module.exports=Product;
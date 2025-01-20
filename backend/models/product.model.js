import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true, //It is create a createdAt and updatedAt in api
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;

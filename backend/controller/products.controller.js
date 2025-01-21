import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  try {
    const product = req.body; //user will send this data
    if (!product.name || !product.price || !product.image) {
      return res
        .status(400)
        .send({ success: false, message: "All fields required" });
    }
    const newProduct = new Product(product);
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (err) {
    console.log("Error in create product", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    console.log("Error in get products", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    console.log("Error in get the product", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const products = req.body;
    if (!products.name || !products.price || !products.image) {
      return res
        .status(404)
        .json({ success: false, message: "All fields are required" });
    }
    const product = await Product.findByIdAndUpdate(id, products);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Product Update Successfully" });
  } catch (err) {
    console.log("Error in update the product", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Product Deleted Successfully" });
  } catch (err) {
    console.log("Error in delete the product", err.message);
    res.status(500).json({ success: false, message: "server Error" });
  }
};

import express from "express";
import Product from "../models/product.model.js";
import {
  getProduct,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controller/products.controller.js";

const router = express.Router();

// Create a product
router.post("/", createProduct);

// Get all products
router.get("/", getProduct);

// Get the product by id
router.get("/:id", getProductById);

// Update the product by id
router.put("/:id", updateProduct);

// Delete the products by id
router.delete("/:id", deleteProduct);

export default router;

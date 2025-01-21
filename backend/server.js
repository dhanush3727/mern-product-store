import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors";
import productRouter from "./routes/product.routes.js";

dotenv.config(); //to access the env file

const app = express();

app.use(express.json()); //allow us to accept JSON data in the req.body
app.use(cors());
app.use("/api/products", productRouter);

app.listen(5000, () => {
  connectDB();
  console.log("Server is running");
});

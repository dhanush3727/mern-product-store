import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors";
import productRouter from "./routes/product.routes.js";

dotenv.config(); //to access the env file

const app = express();
const PORT = process.env.PORT || 500;

app.use(express.json()); //allow us to accept JSON data in the req.body
app.use(cors());
app.use("/api/products", productRouter);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running at ", PORT);
});

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./config/db.js";
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config();

connectDatabase();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan  from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from 'cors';
import CategoryRoute from "./routes/CategoryRoute.js";
import productRoutes from "./routes/productRoutes.js";
//configure env
dotenv.config();

//db configc`
connectDB();
///rest object

const app=express();
// middle ware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/category",CategoryRoute);
app.use("/api/v1/product",productRoutes);
//routes
//1 test route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>");
  });
  
  //PORT
  const PORT = process.env.PORT;
  
  //run listen
  app.listen(PORT, () => {
    console.log(
      `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
        .white
    );
  });
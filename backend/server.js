import "dotenv/config";
import express from "express";
import cors from "cors";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import connectDB from "./config/mongodb.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middleware
app.use(express.json());
app.use(cors());

//api endpoints
app.get("/", (req, res) => {
  res.send("API Working");
});

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);


app.listen(port, () => {
  console.log("Server started on PORT : " + port);
});

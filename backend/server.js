require('dotenv').config();
console.log("MONGO_URI:", process.env.DATABASE_CLOUD);
console.log("JWT_SECRET:", process.env.JWT_SECRET);

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");

const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const biddingRoute = require("./routes/biddingRoute");
const categoryRoute = require("./routes/categoryRoute");
const errorHandler = require("./middleWare/errorMiddleWare");
const User = require("./model/userModel");

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS configuration - only need to set this once
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

// Routes Middleware
app.use("/api/users", userRoute);
app.use("/api/product", productRoute);
app.use("/api/bidding", biddingRoute);
app.use("/api/category", categoryRoute);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.get("/", (req, res) => {
  res.send("Home Pages");
});

// Error Middleware
app.use(errorHandler);

// MongoDB Connection and Server Start
mongoose
  .connect(process.env.DATABASE_CLOUD)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server Running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
  });

console.log("Cloudinary URL:", process.env.CLOUDINARY_URL);
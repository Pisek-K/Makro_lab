const express = require("express");

const cors = require("cors");

const app = express();

const authRoutes = require("./routes/auth-route");

const userRoutes = require("./routes/user-route");

const productRoutes = require("./routes/product-route");

const cartRoutes = require("./routes/cart-route");

const reviewRoutes = require("./routes/review-route");

const handleNotFound = require("./middlewares/notfound");

const CheckError = require("./middlewares/check");

app.use(cors());

app.use(express.json());

app.use("/auth", authRoutes);

app.use("/user", userRoutes);

app.use("/product", productRoutes);

app.use("/cart", cartRoutes);

app.use("/review", reviewRoutes);

app.use("*", handleNotFound);

app.use(CheckError);

app.listen(8000, () => console.log("Server is running on 8000"));


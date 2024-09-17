const express = require("express")

const app = express()

const authRoutes = require("./routes/auth-route")

const userRoutes = require("./routes/user-route")

const productRoutes = require("./routes/product-route")

const cartRoutes = require("./routes/cart-route")

app.use(express.json())







app.use("/auth",authRoutes)

app.use("/user",userRoutes)

app.use("/product",productRoutes)

app.use("/cart",cartRoutes)




app.listen(8000, () => console.log("Server is running on 8000"));
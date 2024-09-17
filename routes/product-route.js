const express = require("express")

const router = express.Router()

const productController = require("../controller/product-controller")

router.get("/",productController.product)

router.get("/category/:categoryId",productController.category)

router.get("/item/:itemId",productController.item)



module.exports = router
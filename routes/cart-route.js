const express = require("express")


const router = express.Router()

const cartController = require("../controller/cart-controller")


router.get("/",cartController.cart)

router.get("/addCartItem/:addCartItemId",cartController.addCartItem)

router.get("/deletecartitem/:deletecartitemid",cartController.deleteCartItem)


module.exports = router
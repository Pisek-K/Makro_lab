const express = require("express");

const router = express.Router();

const cartController = require("../controller/cart-controller");

router.get("/", cartController.cart);

router.patch("/addCartItem/:addCartItemId", cartController.addCartItem);

router.patch("/deletecartitem/:deletecartitemid", cartController.deleteCartItem);

module.exports = router;

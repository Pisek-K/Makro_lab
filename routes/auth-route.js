const express = require("express")

const router = express.Router()

const authController = require("../controller/auth-controller")

router.get("/login",authController.login)

router.get("/register",authController.register)

router.get("/forget-password",authController.forgetPassword)

router.get("/reset-password",authController.resetPassword)


module.exports = router
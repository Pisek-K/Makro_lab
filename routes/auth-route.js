const express = require("express");

const router = express.Router();

const authController = require("../controller/auth-controller");

router.post("/login", authController.login);

router.post("/register", authController.register);

router.post("/forget-password", authController.forgetPassword);

router.patch("/reset-password", authController.resetPassword);

router.patch("/profile", authController.updateProfile)

module.exports = router;

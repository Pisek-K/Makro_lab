const express = require("express");

const userController = require("../controller/user-controller");

const router = express.Router();

router.get("/", userController.user);

router.get("/favorite", userController.favorite);

module.exports = router;

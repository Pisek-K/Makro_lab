const express = require("express")

const reviewController = require("../controller/review-controller")


const router = express.Router()


router.post("/",reviewController.createReview)








module.exports = router
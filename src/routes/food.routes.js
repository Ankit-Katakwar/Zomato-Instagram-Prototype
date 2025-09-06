const express = require("express")
const foodPartnerMiddleware = require("../middlewares/auth.middleware")
const createFoodController = require("../contorller/food.controller")
const multer = require("multer")

const upload = multer({
    storage:multer.memoryStorage()
})

const router = express.Router()

router.post("/",foodPartnerMiddleware.foodPartnerMiddleware,upload.single("video"),createFoodController.createFood)



module.exports = router
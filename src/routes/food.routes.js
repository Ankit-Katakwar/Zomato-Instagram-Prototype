const express = require("express")
const foodPartnerMiddleware = require("../middlewares/auth.middleware")
const createFoodController = require("../contorller/food.controller")

const router = express.Router()




router.post("/",foodPartnerMiddleware.foodPartnerMiddleware,createFoodController.createFood)



module.exports = router
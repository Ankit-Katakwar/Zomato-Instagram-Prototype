const express = require('express');
const userController = require("../contorller/auth.controller")

const router = express.Router();

router.post("/user/register", userController.registerUser);
router.post("/user/logIn", userController.userLogin);
router.get("/user/logOut", userController.userLogout);



router.post("/foodPartner/register",userController.foodPartnerRegister)
router.post("/foodPartner/login",userController.foodPartnerLogin)
router.get("/foodPartner/logout",userController.foodPartnerLogout)





module.exports = router;
const foodPartnerModel = require("../model/foodpartner.model");
const jwt = require("jsonwebtoken");

async function foodPartnerMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(400).json({
      message: "Unauthorised Login",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_Secret);
     console.log("Decoded Token:", decoded);   
    const foodPartner = await foodPartnerModel.findById(decoded.id);
      console.log("Food Partner from DB:", foodPartner); 

    req.foodPartner = foodPartner;

    next();

  } catch (error) {
    res.status(401).json({
      message: "Invalid Token.",
    });
  }
}


module.exports = {foodPartnerMiddleware}
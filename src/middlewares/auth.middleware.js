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
    const foodPartner = foodPartnerModel.findById(decoded.id);
    req.foodPartner = foodPartner;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid Token.",
    });
  }
}


module.exports = {foodPartnerMiddleware}
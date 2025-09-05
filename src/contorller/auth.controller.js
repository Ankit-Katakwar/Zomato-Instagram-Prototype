const userModel = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const foodPartnerModel = require("../model/foodpartner.model");

async function registerUser(req, res) {
  const { fullName, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    email,
  });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "This User already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    fullName,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    "7985c60742aab30474bde936eee0535d"
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "The User has been registered successfully.",
    user: { _id: user._id, email: user.email, fullName: user.fullName },
  });
}

async function userLogin(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email,
  });

  if (!user) {
    return res.status(400).json({
      message: "Email or password is invalid",
    });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Email or password is invalid",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    "7985c60742aab30474bde936eee0535d"
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "Successfully Logged In",
    user: { _id: user._id, email: user.email, fullName: user.fullName },
  });
}

function userLogout(req, res) {
  res.clearCookie("token");
  res.status(201).json({
    message: "User  Logged Out Succesfully.",
  });
}

async function foodPartnerRegister(req, res) {
  const { name, email, password } = req.body;

  const isFoodPartnerExists = await foodPartnerModel.findOne({
    email,
  });

  if (isFoodPartnerExists) {
    return res.status(400).json({
      message: "This email already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const foodPartner = foodPartnerModel.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign(
    { id: foodPartner.id },
    "7985c60742aab30474bde936eee0535d"
  );
  res.cookie("token", token);

  res.status(200).json({
    message: "The Food Partner has been registered successfully. ",
  });
}

async function foodPartnerLogin(req, res) {
  const { email, password } = req.body;

  const foodPartner = await foodPartnerModel.findOne({
    email,
  });

  if (!foodPartner) {
    return res.status(400).json({
      message: "Email or password is invalid",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, foodPartner.password);

  if (!isPasswordValid) {
   return res.status(400).json({
      message: "Email or password is invalid",
    });
  }

  const token = jwt.sign(
    { id: foodPartner._id },
    "7985c60742aab30474bde936eee0535d"
  );

  res.cookie("token",token)

  res.status(201).json({
    message: "Food Partner Logged In successfully.",
    foodPartner: { name: foodPartner.name, email: foodPartner.email },
  });
}
function foodPartnerLogout(req,res){
  res.clearCookie("token")
  res.status(201).json({
    message:"Food Partner Logged Out successfully. "
  })
}


module.exports = { registerUser, userLogin, userLogout, foodPartnerRegister,foodPartnerLogin,foodPartnerLogout};

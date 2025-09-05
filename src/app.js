const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const authRouters = require("../src/routes/user.routes");
const foodRouter = require("../src/routes/food.routes")
app.use(cookieParser());
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use("/api/auth", authRouters)
app.use("/api/food", foodRouter)

module.exports = app;

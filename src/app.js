const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const authRouters = require("../src/routes/user.routes");
app.use(cookieParser());
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use("/api/auth", authRouters)

module.exports = app;

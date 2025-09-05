const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/food-view")
    .then(() => {
      console.log("The database is connected Successfully");
    })
    .catch((err) => {
      console.log("There is a Issue connecting the database " + err);
    });
};

module.exports = connectToDb;

const foodModel = require("../model/food.model");
const storageService = require("../services/cloundStorageServices");
const { v4: uuid } = require("uuid");
async function createFood(req, res) {
  console.log(req.foodPartner);
  console.log(req.body);
  console.log(req.file);

  const fileUploadResult = await storageService.uploadFile(
    req.file.buffer,
    uuid()
  );

  console.log(fileUploadResult);

  res.send("Food created successfully");
}

module.exports = {
  createFood,
};

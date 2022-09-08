const Property = require("../models/property");
const ForRent = require("../models/forFrent");

const getForSaleProperty = async (req, res) => {
  try {
    const forSale = await Property.find();
    res.status(200).json(forSale);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getForRentProperty = async (req, res) => {
  try {
    const forRent = await ForRent.find();
    res.status(200).json(forRent);
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = {
  getForSaleProperty,
  getForRentProperty,
};

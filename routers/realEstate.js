const express = require("express");
const router = express.Router();
const {
  getForSaleProperty,
  getForRentProperty,
} = require("../controllers/realEstate");

router.route("/rent").get(getForRentProperty);
router.route("/sale").get(getForSaleProperty);

module.exports = router;

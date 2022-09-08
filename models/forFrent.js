const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const forRentSchema = new Schema({
  price: { type: Number, require: [true, "please provide a price"] },
  rentFrequency: {
    type: String,
    require: [true, "please provide a rentFrequency"],
  },
  title: {
    type: String,
    require: [true, "please provide a title"],
  },
  externalID: {
    type: Number,
  },
  rooms: {
    type: Number,
  },
  baths: {
    type: Number,
  },
  area: {
    type: Number,
  },
  isVerified: {
    type: Boolean,
  },
  agency: {
    type: Object,
  },
  coverPhoto: {
    type: Object,
  },
});

module.exports = mongoose.model("ForRent", forRentSchema);

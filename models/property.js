/* coverPhoto,
price,
rentFrequency,
rooms,
title,
baths,
area,
agency,
isVerified,
externalID, */
//*"price":11700

//*"rentFrequency":"monthly"

//*"title":"Bills Included | 2bd Apartment near Metro"

///"externalID":"4649062"

//*"rooms":2
//*"baths":2
//*"area":100.70689536

//!"coverPhoto":{...}7 items

//*"isVerified":true

//!"agency":{1 item
const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
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

module.exports = mongoose.model("Property", propertySchema);

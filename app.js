require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./routers/auth");
const realEstateRouter = require("./routers/realEstate");
const connectDb = require("./db/connect");
const axios = require("axios");
app.use(cors());
app.use(express.json());

//*the auth router
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/realEstate", realEstateRouter);

//fetchRalEstate();

const port = process.env.PORT || 4200;

//*start the server
const start = async () => {
  try {
    //*connect to the database
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => console.log(`app is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();

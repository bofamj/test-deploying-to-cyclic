/* require("dotenv").config();
const axios = require("axios");

const connectDB = require("./db/connect");

const ForRent = require("./models/forFrent");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await ForRent.deleteMany();
    axios
      .get(
        "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=25",
        {
          headers: {
            "X-RapidAPI-Host": "bayut.p.rapidapi.com",
            "X-RapidAPI-Key":
              "b32d0aeec2msh5375c79ffa37829p134aa0jsn6448278abafb",
          },
        }
      )
      .then(
        ({ data }) => {
          ForRent.create(
            data.hits.map((items) => {
              return {
                price: items.price,
                rooms: items.rooms,
                coverPhoto: items.coverPhoto,
                rentFrequency: items.rentFrequency,
                title: items.title,
                baths: items.baths,
                agency: items.agency,
                isVerified: items.isVerified,
                externalID: items.externalID,
                area: items.area,
              };
            })
          );
        },
        (error) => {
          console.log(error);
        }
      );

    console.log("success ");
  } catch (error) {
    console.log(error);
  }
};
start(); */

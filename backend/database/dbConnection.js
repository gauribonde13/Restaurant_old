const mongoose =require("mongoose");

 const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "RESERVATIONs",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};

module.exports= dbConnection
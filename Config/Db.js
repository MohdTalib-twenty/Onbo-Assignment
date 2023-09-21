const mongoose = require("mongoose");

const connectDb = async () => {
  const URL = process.env.URL;
  await mongoose
    .connect(URL)
    .then(()=>console.log("Db Connected"))
    .catch((error) => {
      console.log(error);
    });
};


module.exports=connectDb
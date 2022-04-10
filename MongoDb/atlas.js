require("dotenv").config();
const mongoose = require("mongoose");
const url =
  "mongodb+srv://wrsMKqHXcLIdob5I:wrsMKqHXcLIdob5I@cluster0.vxqcy.mongodb.net/Inventory?retryWrites=true&w=majority";
mongoose
  .connect(url)
  .then(() => {
    console.log("connected to mongoose successfully");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = mongoose;

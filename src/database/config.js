require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.URI;

module.exports = mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Db conn"))
  .catch((err) => console.log(err));

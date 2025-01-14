const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  userNameee: String,
});

const Mydata = mongoose.model("Mydata", articleSchema);

module.exports = Mydata;

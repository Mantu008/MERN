const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  enr: Number,
});

const students = new mongoose.model("students", productSchema);

module.exports = students;

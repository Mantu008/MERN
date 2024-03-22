const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/sample")
  .then(() => {
    console.log("database connected sucessfully....");
  })
  .catch((err) => {
    console.log(err);
  });

const mongoose = require("mongoose");
const express = require("express");

mongoose
  .connect("mongodb://localhost:27017/sample")
  .then(() => {
    console.log("Connected to MongoDB Sucessfully");
  })
  .catch((err) => {
    console.log(err);
  });

const student = new mongoose.Schema({
  name: String,
  workout: Boolean,
  height: Number,
});

const Student = new mongoose.model("Student", student);

// for inserting element into database

// const adder = async () => {
//   const ss = await Student.create({
//     name: "sahil",
//     workout: false,
//     height: 5,
//   });
//   console.log(ss);
// };

// adder();

// for fetch elements from database

const adder = async () => {
  const ss = await Student.find();
  console.log(
    ss.forEach((element) => {
      console.log(
        element.id +
          " " +
          element.name +
          " " +
          element.height +
          " " +
          element.workout
      );
    })
  );
};

adder();

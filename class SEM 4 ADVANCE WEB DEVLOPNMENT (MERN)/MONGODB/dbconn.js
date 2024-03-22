const { MongoClient } = require("mongodb");
const path = "mongodb://localhost:27017";

const conn = new MongoClient(path);

const display = async () => {
  let x = await conn.connect();
  let y = x.db("sample");
  return y.collection("students");
};

module.exports = display;

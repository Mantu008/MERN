const { MongoClient } = require("mongodb");
const path = "mongodb://localhost:27017";

const conn = new MongoClient(path);

const getConnection = async () => {
  const result = await conn.connect();
  const dbs = result.db("sample");
  return dbs.collection("students");
};

module.exports = getConnection;

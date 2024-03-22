const express = require("express");
require("./config");
const students = require("./dbconn");

const app = express();

app.use(express.json());

app.get("/", async (req, resp) => {
  resp.send(await students.find());
});

app.post("/", async (req, resp) => {
  if (Array.isArray(req.body) || Object.keys(req.body).length >= 1) {
    // Insert multiple documents
    let ans = await students.create(req.body);
  }
  resp.send(await students.find());
});

app.put("/:nm", async (req, resp) => {
  const ans = await students.updateOne(
    { name: req.params.nm },
    { $set: req.body }
  );
  resp.send(ans);
});

app.delete("/", async (req, resp) => {
  const ans = await students.deleteOne({ name: req.body.name });
  resp.send(ans);
});

app.listen(
  3000,
  console.log("Server is runnin on Port [ http://localhost:3000 ]")
);

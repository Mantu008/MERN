const express = require("express");
const dbconn = require("./dbconn");

const app = express();

app.use(express.json());

app.get("/", async (req, resp) => {
  const data = await dbconn();
  resp.send(await data.find().toArray());
});

app.post("/", async (req, resp) => {
  const data = await dbconn();
  if (Array.isArray(req.body)) {
    // Insert multiple documents
    let ans = await data.insertMany(req.body);
  } else if (Object.keys(req.body).length >= 1) {
    // Insert single document
    let ans = await data.insertOne(req.body);
  }
  resp.send(await data.find().toArray());
});

app.put("/:nm", async (req, resp) => {
  const data = await dbconn();
  const ans = await data.updateOne({ name: req.params.nm }, { $set: req.body });
  resp.send(ans);
});

app.delete("/", async (req, resp) => {
  const data = await dbconn();
  const ans = await data.deleteOne({ enr: req.body.enr });
  resp.send(ans);
});

app.listen(
  3000,
  console.log("Server is runnin on Port [ http://localhost:3000 ]")
);

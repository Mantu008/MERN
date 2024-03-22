const express = require("express");
require("./config");
const students = require("./dbconn");

const app = express();

app.use(express.json());

app.get("/search/:key", async (req, resp) => {
  console.log(req.params.key);
  const data = await students.find({
    $or: [
      { name: { $regex: req.params.key } },
      { class: { $regex: req.params.key } },
      { city: { $regex: req.params.key } },
    ],
  });
  resp.send(data);
});

app.listen(3000);

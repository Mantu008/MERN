const dbconn = require("./dbconn");

// featching data from the database .....

const fetch = async () => {
  const data = await dbconn();
  console.log(await data.find({}).toArray());
};

fetch();

// inserting data into the database ...

const insert = async () => {
  const data = await dbconn();
  let ans = await data.insertOne({ name: "sahil", class: "ec1", enr: 101 });
  if (ans.acknowledged) {
    console.log("document is inserted sucessfully in the database..");
  }
};

// insert();

// updating data into the database ....

const update = async () => {
  const data = await dbconn();
  let ans = await data.updateOne(
    { name: "sahil" },
    { $set: { name: "sahil bhai" } }
  );
  if (ans.modifiedCount >= 1) {
    console.log("document is updated sucessfully in the database..");
  }
};

// update();

// deliting data into the database .....

const delet = async () => {
  const data = await dbconn();
  let ans = await data.deleteOne({ name: "sahil bhai" });
  if (ans.deletedCount >= 1) {
    console.log("document is delete sucessfully in the database..");
  }
};

// delet();

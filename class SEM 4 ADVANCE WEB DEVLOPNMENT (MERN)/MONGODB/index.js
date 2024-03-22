const dbconn = require("./dbconn");

// fetching the data from database

const fetch = async () => {
  let data = await dbconn();
  console.log(await data.find({ name: "mantu" }).toArray());
};

// fetch();

// inserting the data from database

const insert = async () => {
  let data = await dbconn();
  let ans = await data.insertOne({ name: "ashish", class: "ec1", enr: 122 });
  if (ans.acknowledged) {
    console.log("data is inserted sucessfully into the databae");
  }
};

// insert();

// updating the data from database

const update = async () => {
  let data = await dbconn();
  let ans = await data.updateOne(
    { name: "mantu" },
    { $set: { name: "Mantu Kumar Morya" } }
  );
  if (ans.modifiedCount >= 1) {
    console.log("data is updated sucessfully into the databae");
  }
};

// update();

// delete the data from database

const delet = async () => {
  let data = await dbconn();
  let ans = await data.deleteOne({ name: "sahil" });
  if (ans.deletedCount >= 1) {
    console.log("data is deleted sucessfully into the databae");
  }
};

// delet();

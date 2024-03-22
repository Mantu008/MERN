const { error } = require("console");
const fs=require("fs/promises");

console.log("first")

fs.readFile("./hello.txt","utf-8")
.then(data=>console.log(data))
.catch(error=>console.log(error))

console.log("second")
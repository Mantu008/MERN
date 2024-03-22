const { error } = require("console");
const fs=require("fs/promises");

console.log("first")

async function readFile(){
     try{
       const data=await fs.readFile("./hello.txt","utf-8");
       console.log(data)
     }catch(err){
        console.log(err)
     }
}

console.log("second")

readFile();
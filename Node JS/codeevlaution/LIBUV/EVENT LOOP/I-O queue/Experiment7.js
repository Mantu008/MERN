const fs=require("fs");

setTimeout(() => {
  console.log("This is setTimeout 1")
},0);
fs.readFile(__filename,()=>{
   console.log("This is ReadFile 1")
})

setTimeout(() => {
  console.log("This is setTimeout 2");
},0);

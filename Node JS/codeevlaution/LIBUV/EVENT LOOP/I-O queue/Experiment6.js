const fs=require("fs");

fs.readFile(__filename,()=>{
   console.log("This is ReadFile 1")
})

process.nextTick(()=>{
  console.log("This is process.nexttick 1")
})

Promise.resolve().then(()=>{
    console.log("This is Promice.Resolve 1")
})
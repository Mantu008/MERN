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

setTimeout(()=>{
console.log("setTimeout 1")
},0)

setImmediate(()=>{
  console.log("setImmediate 1")
})

for(let i=0;i<500000;i++){}
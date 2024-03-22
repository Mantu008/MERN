const fs=require("fs");
fs.readFile(__filename,()=>{
  console.log("ReadFile 1");
  setImmediate(()=>console.log("SetImmediate 1"));
  Promise.resolve().then(()=>console.log("Promice.resolve inside readfile 1"));
  process.nextTick(()=>console.log("process.nextTick inside readfile 1"))
})

Promise.resolve().then(()=>console.log("Promice.resolve 1"));
process.nextTick(()=>console.log("process.nextTick 1"))
setTimeout(() => {
  console.log("setTimeout 1")
}, 0);

for(let i=0;i<20000;i++){}
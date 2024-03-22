//first execute the user written sync code then async code will run

console.log("Console log 1");
process.nextTick(()=>console.log("This is process.nextTick() 1"))
console.log("Console log 2");
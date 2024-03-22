setImmediate(()=>console.log("SetImmediate 1"));
setImmediate(()=>{
   console.log("SetImmediate 2");
   Promise.resolve().then(()=>console.log("promise 1"));
   process.nextTick(()=>console.log("nexttick 1"))
});
setImmediate(()=>console.log("SetImmediate 3"));
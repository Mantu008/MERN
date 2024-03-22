// this time out function is called after the microtasks callbacks

//Timer Queue Function
setTimeout(()=>{
   console.log("first SetTimeout");
},0);
setTimeout(()=>{
  console.log("Second SetTimeout");
},0);
setTimeout(()=>{
  console.log("Third SetTimeout")
},0);

//MicroTasks Queue Function
process.nextTick(()=>console.log("This is process.nextTick() callback 1"));
process.nextTick(()=>{
  console.log("This is process.nextTick() callback 2 outer")
  process.nextTick(()=>console.log("This is process.nextTick() callback 2 inner"));
});
process.nextTick(()=>console.log("This is process.nextTick() callback 3"));

Promise.resolve().then(()=>console.log("This is promise.resolve() callback 1"));
Promise.resolve().then(()=>{
  console.log("This is promise.resolve() callback 2 outer");
  Promise.resolve().then(()=>console.log("This is promise.resolve() callback 2 inner for prom"));
  process.nextTick(()=>console.log("This is promise.resolve() callback 2 inner")); 
});
Promise.resolve().then(()=>{
  console.log("This is promise.resolve() callback 3 outer");
  process.nextTick(()=>console.log("This is promise.resolve() callback 3 inner")); 
});
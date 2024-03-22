
//priority in MicroTasks

//process.nextTick() block will execute first then Promice.resolve().then() block run because the priority of process.nextTick() is grator then the Promice.resolve().then()

//if our process is in process.nextTick() block then it complete this block then after it goes to the next block ( Promice.resolve().then() block) same as Promice.resolve().then() block ( process.nextTick() block) 


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
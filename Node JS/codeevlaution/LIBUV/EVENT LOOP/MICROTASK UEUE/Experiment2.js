
//priority in MicroTasks

//process.nextTick() block will execute first then Promice.resolve().then() block run because the priority of process.nextTick() is grator then the Promice.resolve().then()

Promise.resolve().then(()=>console.log("This is promise.resolve() callback 1"));
process.nextTick(()=>console.log("This is process.nextTick() callback 1"));
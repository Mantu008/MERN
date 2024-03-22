const EventEmitter=require("events");
const emitter=new EventEmitter();

//response action

emitter.on("order pizza",(size,topping)=>{
  console.log(`Order Receved! Backing a ${size} Pizza with ${topping}`);
})

emitter.on("order pizza",(size)=>{
    if(size==="large"){
       console.log("surving complementry drink")
    }
})

emitter.on("order pizza",(size,topping)=>{
  if(topping==="mashrume"){
     console.log(`Topiing is only be ${topping}`)
  }
})

//dispatch action
emitter.emit("order pizza","large","mashrume");
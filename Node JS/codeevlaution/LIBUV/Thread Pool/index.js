const fs=require("fs");
console.log("First");
fs.readFile("./hello.txt","utf-8",(err,data)=>{
      if(err){
         console.log("jiii")
         console.log(err)
      }else{
         console.log("hello")
         console.log(data)
      }
})

console.log("Last");
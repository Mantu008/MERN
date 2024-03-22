const { error } = require("console");
const fs = require("fs");

console.log("first")
const content=fs.readFileSync("hello.txt","utf-8")
console.log(content," from sync");

console.log("second")
fs.readFile("hello.txt","utf-8",(error,data)=>{
     if(error){
       console.log(error);
     }else{
      console.log(data,"from async")
     }
})
console.log("third")

fs.writeFileSync("./greet.txt","Hello World!")

//{flag:"a"} it is append the code

fs.writeFile("./greet.txt"," Hello Mantu",{ flag:"a"},(error)=>{
    if(error){
      console.log(error)
    }else{
      console.log("file written")
    }
})
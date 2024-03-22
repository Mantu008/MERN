const fs=require("fs")
const path=require("path");

const dirPath=path.join(__dirname,'crud/')
const filePath=path.join(dirPath,"hello.txt")
console.log(filePath)

//proforming crud operation on file..

// 1. Create Operation

// fs.writeFile(filePath,"Hello i am mantu Kumar morya",(err)=>{
//    if(!err){
//     console.log("file is created");
//    }
// })


// 2. Read Operation

// fs.readFile(filePath,(err,data)=>{
//    if(!err){
//     console.log(data.toString())
//    }
// })


// 3. Update Operation

// fs.appendFile(filePath," from Jaipur",(err)=>{
//    if(!err){
//      console.log("fiel is updated..")
//    }
// })


// 3. Delete Operation

fs.unlink(dirPath+'/hello1.txt',(err)=>{
   if(!err){
     console.log("file is deleted sucessfully");
   }
})


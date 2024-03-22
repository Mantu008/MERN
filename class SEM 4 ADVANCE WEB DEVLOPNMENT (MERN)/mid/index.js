


// let a=10;
// let b=0;

// let weatingData=new Promise((resolve,rejece)=>{
//   setTimeout(()=>{
//     b=20;
//     resolve(40);
//  })  
// })

// weatingData.then((data)=>{
//    console.log("the data is:-"+data);
//    console.log("the addition of two number is:-"+a+b);
// })





// fs modele

//fs write file...

const { error } = require("console");
const fs=require("fs");

// console.log("first")
// fs.writeFileSync("hello.txt","i am prince kumar");
// console.log("second")
// fs.writeFile("hello1j.txt","i am mantu kumar morya",(error)=>{
//     if(error){
//      console.log(error)
//     }else{
//       console.log("file written sucessfully using async way")
//     }
// });
// console.log("third")




//fs read file...

// const fs=require("fs");
// console.log("first");
// const fileContent=fs.readFileSync("hello.txt","utf-8");
// console.log(fileContent)
// console.log("second");
// fs.readFile("hello1j.txt", "utf-8",(error,data)=>{
//     if(error){
//       console.log(error);
//     }else{
//       console.log(data);
//     }
// })
// console.log("third");


//fs rename file...


// fs.renameSync("hello.txt","hi.txt")

// fs.rename("hello1j.txt","hi1j.txt",(err)=>{
//     if(!err){
//       console.log("file renamed..")
//     }
// })





//fs update file

// fs.appendFile("hi.txt"," i am a devloper",(err)=>{
//    if(!err){
//      console.log("file is updated sucessfully")
//    }
// })


//fs delete file.

// fs.writeFile("hey.txt","i am hey",(err)=>{
//     if(!err){
//       console.log("file is created...")
//     }
// })

// fs.unlink("hey.txt",(err)=>{
//     if(!err){
//       console.log("file is deleted sucessfully")
//     }
// })

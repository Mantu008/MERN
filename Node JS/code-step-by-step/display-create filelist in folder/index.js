const fs=require('fs');
const path=require("path");

//hwre we are set the dirPath for files folder for creating and displaying files

const dirPath=path.join(__dirname,'files');

//create 5 file in files folder using loop

for(i=0;i<5;i++){
  console.log(dirPath)
  fs.writeFileSync(dirPath+`/Hello${i}.txt`,`i am mantu${i}`);
}

//for displiyanig files 

fs.readdir(dirPath,(err,data)=>{
    if(!err){
      data.forEach(item=>{
         console.log("content in file ",item);
         const content=fs.readFileSync(dirPath+"/"+item,"utf-8")
         console.log(content)
      })
    }
})


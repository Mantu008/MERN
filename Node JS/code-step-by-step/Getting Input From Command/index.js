const fs=require("fs");
if(process.argv[2]=='add'){
  fs.writeFileSync(`${process.argv[3]}.txt`,process.argv[4])
  console.log("file created sucessfully...")
}else if(process.argv[2]=='remove'){
  fs.unlinkSync(`${process.argv[3]}.txt`)
  console.log("file deleted sucessfully...")
}else{
   console.log("file not exist")
}
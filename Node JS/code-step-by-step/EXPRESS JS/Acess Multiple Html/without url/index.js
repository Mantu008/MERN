const express=require("express");
const path=require("path");

const app=express();


const fileDir=path.join(__dirname,'public');

app.get('/',(req,resp)=>{
  resp.sendFile(`${fileDir}/index.html`)
})


app.get('/about',(req,resp)=>{
  resp.sendFile(`${fileDir}${req.url}.html`)
})

app.get('/data',(req,resp)=>{
  resp.sendFile(`${fileDir}${req.url}.html`)
})



app.get('*',(req,resp)=>{
  resp.sendFile(`${fileDir}/PagenotFound.html`)
})

app.listen(3000,()=>console.log("server is running on port [ http://localhost:3000 ]"));
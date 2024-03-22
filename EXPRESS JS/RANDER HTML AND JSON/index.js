const express=require("express");
const fs=require("fs");
const app=express();


//rander html tag in express and go to another tab using link

app.get('/',(req,resp)=>{
     let html=fs.readFileSync('./index.html',"utf-8")
     resp.send(html)
})

const midelwere=(req,resp,next)=>{
    if(!req.query.Name){
       resp.send('plese Enter the neme')
    }else{
      next();
    }
}

app.get('/getdata',midelwere,(req,resp)=>{
  resp.send(`
    <h1>${req.query.Name}</h1>
    <a href='/'>Go to Home Page</a>
  `)
})


//rander json tag in express

app.get('/json',(req,resp)=>{
  let stdData=[
    {
      name:"mantu kumar morya",
      class:"EC1",
      ENR:92201703001,
      Gr:115767
    },
    {
      name:"Sahil kumar",
      class:"EC1",
      ENR:92201703152,
      Gr:115797
    },
    {
      name:"prince kumar",
      class:"EC1",
      ENR:92201703241,
      Gr:334412
    },
    {
      name:"Anish kumar",
      class:"EC1",
      ENR:92201703067,
      Gr:5578222
    }
  ]
  resp.send(stdData)
})

app.listen(3000,()=>console.log("this server is run on the port  [ http://localhost:3000 ]"))
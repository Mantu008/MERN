const express=require("express");
const app=express();

app.set("view engine","ejs");
// Middleware to parse URL-encoded data(for getting post data send via post method)
app.use(express.urlencoded({ extended: true })); 

const users=[];

app.get('/',(req,resp)=>{
  resp.render('index')
})

app.post('/data',(req,resp)=>{
   const userData={
    name:req.body.name,
    email:req.body.email
  }
  users.push(userData)
  resp.render('data',{userData})
})

app.get("/users",(req,resp)=>{
   resp.json({
    users,
   })
})

app.listen(3000,()=>console.log("server is lisiten on the port number [ http://localhost:3000 ] "))
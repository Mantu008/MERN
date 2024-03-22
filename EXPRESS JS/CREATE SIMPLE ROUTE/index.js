const express=require("express");
const app=express();


app.get('/',(req,resp)=>{
    console.log(req.query.name,req.query.class)
    resp.send(req.query.name+" "+req.query.class);
    // resp.send('Home Page')
})

app.get('/about',(req,resp)=>{
  resp.send('About Page')
})

const name={
    name:"mantu kumar morya",
    class:"Ec1",
    enr:92201703001,
}

app.get('/help',(req,resp)=>{
  resp.send(name)

})

app.listen(3000,()=>console.log('Server is runnin on Port [ http://localhost:3000 ]'))
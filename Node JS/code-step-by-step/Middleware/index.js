const express=require('express')
const app=express();

const middleware=(req,resp,next)=>{
    if(!req.query.age){
      resp.send('Plese Enter The age')
    }else if(req.query.age<18){
      resp.send('You Cannot Acess This page')
    }else{
      next();
    }
   
}

// app.use(middleware)

app.get('/',(req,resp)=>{
  resp.send('This is Home Page')
})

app.get('/about',middleware,(req,resp)=>{
  resp.send('This is About Page')
})


//for authentacate specfic route so we can pass middleware inside route like this  and remove the app.use(middleware) ..

// app.get('/about',middleware,(req,resp)=>{
//   resp.send('This is About Page')
// })

app.listen(3000,()=>console.log('The Server is Listen on the Port [ http://localhost:3000 ]'))
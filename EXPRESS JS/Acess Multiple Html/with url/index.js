const express=require('express');
const path = require('path');

const app=express();
const filePath=path.join(__dirname,'public');

app.use(express.static(filePath));

app.listen(3000,()=>console.log("server is listen on port [ http://localhost:3000 ]"))
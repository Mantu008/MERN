const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
     name="mantu";
     res.writeHead(200,{"Content-Type":"text/html"});
     let html=fs.readFileSync("./index.html","utf-8");
    html=html.replace("{{name}}",name)
    res.end(html);  
})

server.listen(3000,()=>{
    console.log("Server Running On Port 3000");
})

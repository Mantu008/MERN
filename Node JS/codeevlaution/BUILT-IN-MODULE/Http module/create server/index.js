const http=require("http");

const server=http.createServer((req,res)=>{
     res.writeHead(200,{"Content-Type":"text/plain"});
     res.end("Hello Mantu");
})

server.listen(3000,()=>{
    console.log("Server Running On Port 3000");
})

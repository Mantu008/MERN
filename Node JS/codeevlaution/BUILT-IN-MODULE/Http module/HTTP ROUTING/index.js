const http=require("http");

const server=http.createServer((req,res)=>{
     if(req.url=="/"){
        res.writeHead(200,{"Content-type":"text/html"});
        res.end("<h1>Home Page</h1>")
     }else if(req.url=="/about"){
        res.writeHead(200,{"Content-type":"text/html"});
        res.end("<h1>About Page</h1>")
     }else if(req.url=="/api"){
      res.writeHead(200,{"Content-type":"application/json"});
      res.end(JSON.stringify({
        "naem":"mantu",
        "age":"20",
    }))
   }else{
       res.writeHead(404);
       res.end("Page Not Found.")
   }
     
})

server.listen(3000,()=>console.log("Server is now Started On 3000..."))
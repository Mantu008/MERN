const http=require("http");
http.createServer((req,resp)=>{
    //  resp.writeHead(200,{'content-type':'text/plain'});
     resp.write("<h1>i am mantu kumar morya</h1>");
     resp.end();
}).listen(3000,()=>console.log("server run on the port 3000"));
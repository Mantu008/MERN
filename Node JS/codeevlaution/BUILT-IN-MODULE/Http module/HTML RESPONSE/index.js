const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{

     res.writeHead(200,{"Content-Type":"text/html"});
    //  const html=fs.readFileSync("./index.html","utf-8")
    // res.end(html);
    //if we have large data the we send file using stream
    fs.createReadStream("./index.html",{
       encoding:"utf-8",
       highWaterMark:2,
    }).pipe(res);
    
})

server.listen(3000,()=>{
    console.log("Server Running On Port 3000");
})

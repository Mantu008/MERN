const http=require("http");

const server=http.createServer((req,res)=>{
 
    const superHero={
       firstName:"Mantu",
       lastname:"Kumar Morya"
    }

     res.writeHead(200,{"Content-Type":"application/json"});
     res.end(JSON.stringify(superHero));
})

server.listen(3000,()=>{
    console.log("Server Running On Port 3000");
})

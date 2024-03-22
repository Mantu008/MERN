const http=require("http");
http.createServer((req,resp)=>{
  const stdData=require('./data') 
  resp.writeHead(200,{'content-type':'text/plain'});
  resp.write(JSON.stringify(stdData));
  resp.end();
}).listen(3000,()=>console.log("This Server is run on the port  [ http://localhost:3000 ]"));
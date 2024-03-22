const crypto=require("node:crypto")



//sync code (blocking code)....

// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// console.log("Mantu ",Date.now()-start)



//async code (non blocking)

process.env.UV_THREADPOOL_SIZE = 16;
const start=Date.now();
const MAX_CALLS=16;
for(let i=0;i<MAX_CALLS;i++){
   crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
     console.log(`Mantu: ${i+1} ${Date.now()-start}`)
   })
}


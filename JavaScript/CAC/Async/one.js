
//setTimeout

// let  chengeText=(str)=>{
//   console.log("chenge text within 2 second");
//   return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//       document.querySelector("h1").innerText=str;
//       console.log("text chenged..");
//       resolve("sucess")
//     },2000);
//   })
 
// }
  
//  async function callChenge(){
//        await chengeText("mantu").then((res)=>{
//          console.log(res);
//        });
//        await chengeText("ashish");
//  }
 
//  callChenge()


// document.querySelector("button").addEventListener("click",()=>{
//     clearTimeout(changeMe);
//     console.log("timeout stoped..");
// });



// setInterval

  
const sayDate=(str)=>{
    console.log(str,Date.now());
}

var intervalId;

document.getElementById("start").addEventListener("click",()=>{
  console.log("start interval");
   intervalId=setInterval(sayDate,1000,"mantu");
});

document.getElementById("stop").addEventListener("click",()=>{
     clearInterval(intervalId);
     console.log("stoped interval...");
});




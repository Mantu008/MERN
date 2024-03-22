let div=document.querySelector("#box");
let body=document.querySelector("body");
let color="white";
div.addEventListener("mouseover",()=>{
    if(color==="white"){
       color="black";
       alert("background is now black");
       body.style.backgroundColor="black";
       div.style.backgroundColor="yellow";
    }else{
      color="white";
      alert("background is now white");
      body.style.backgroundColor="white";
      div.style.backgroundColor="red";
    }
})
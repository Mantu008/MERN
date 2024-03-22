

//q1.

let modbutton=document.querySelector("#mod");
let beg=document.querySelector("body");
let currmode="light";   
modbutton.addEventListener("click",()=>{
   if(currmode=="light"){
       currmode="dark";
       beg.classList.add("dark");
       beg.classList.remove("light");
       modbutton.innerText="light";
   }else{
       currmode="light";
       beg.classList.add("light");
       beg.classList.remove("dark");
       modbutton.innerText="dark";
   }

   console.log(currmode);
})


let para=document.querySelector("#box");
let state="blue";
para.addEventListener("click",()=>{
    alert("i am mantu");
     if(state=="blue"){
        state="red";
        para.style.backgroundColor="red"; 
     }else{
        state="blue";
        para.style.backgroundColor="blue"; 
     }
})






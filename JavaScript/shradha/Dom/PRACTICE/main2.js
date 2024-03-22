//q1

let mybutton=document.createElement("button");
mybutton.innerText="Click Me";
mybutton.style.backgroundColor="red";
mybutton.style.color="white";

document.querySelector("body").prepend(mybutton)



//q2

let para=document.querySelector("p");
// para.setAttribute("class","newclass")  // here it is not use because it is completly override the older style
para.classList.add("newclass");
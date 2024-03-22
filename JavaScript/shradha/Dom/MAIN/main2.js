let div=document.querySelector("div");
console.log(div);
let id=div.getAttribute("id")+"->"+div.getAttribute("name");
console.log(id);
div.setAttribute("name","8989");
// div.style.visibility="hidden";

let para=document.querySelector("p").getAttribute("class");
console.log(para);

let hed=document.querySelector("h1");
let headname=hed.setAttribute("class","newhead");


// style attribute

let div1=document.querySelector("div");
div1.style.backgroundColor="red";


// insert new element

//step 1 :- creat a new  element first
let newbtn=document.createElement("button");
newbtn.innerText="Click";
console.log(newbtn);

// step2 decide where to put this new element  
 
let div3=document.querySelector("div");
div3.prepend(newbtn);


let newhedding=document.createElement("h1");
newhedding.innerHTML="<em>hey i am new heading</em>";

document.querySelector("body").prepend(newhedding);


//for removing

let para1=document.querySelector("p");
para1.remove();
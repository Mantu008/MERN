// console.log("hello");   
// alert("click karo bhai")


// console.log(window);
// document.body.childNodes[3].innerText="mantu";    //this is dynamic manuplation

let iddom=document.getElementById("hedding1").innerText;
console.log(iddom);
let classdom=document.getElementsByClassName("cls");
console.log(classdom);
console.dir(classdom);

let elemetdom=document.getElementsByTagName("p");
console.dir(elemetdom)

let element=document.querySelector("p")
let element1=document.querySelectorAll("p")
console.dir(element)
console.dir(element1)

let button=document.querySelector("#myId");
console.dir(button)

let frut=document.querySelector("#frut");
console.dir(frut);
console.log(frut.innerText)
console.log(frut.innerHTML);
  
let hidden=document.querySelector(".hidd");
console.log(hidden.textContent)
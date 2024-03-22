let message=document.querySelector(".message").innerText;
let message1="from apna collage students";
document.querySelector(".message").innerText=`${message} ${message1} `;


let divs=document.querySelectorAll(".box");
console.log(divs);

// divs[0].innerText="mantu";
// divs[1].innerText="hari";      //instead of we use array
// divs[2].innerText="ashish";

let i=1;
 for(div of divs){
      div.innerText=`new value ${i}`;
      i++;
 }

 for(val of divs){                      // print the chenged values
    console.log(val.innerText);
 }



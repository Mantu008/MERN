

//jsvascript for button1

// let btn1=document.querySelector("#btn1");
// btn1.onclick =()=>{
//    console.log("btn1 is clece done time");
//    alert("hello one time")
// };

 // we can use eventlitsner to run one event to multiple time

 let btn1=document.querySelector("#btn1");
 btn1.addEventListener("click",(evt)=>{
    console.log(evt);
    console.log("btn1 is clece done time");
 });

 btn1.addEventListener("click",()=>{
   alert("btn1 is clece done time");
});



//jsvascript for button2

let btn2=document.querySelector("#btn2");
btn2.ondblclick=()=>{
   console.log("btn2 is clicked two time");
   alert("hello two time");
};

//jsvascript for divarea

let box=document.querySelector("#box");
box.onmouseover=(evt)=>{  //here this event object
   //print event type using event object
   console.log(evt.type); 
  //print event target using event object 
   console.log(evt.target);
   console.log("cruser is in the div area..");
   alert("hey")
};



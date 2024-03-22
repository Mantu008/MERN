let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let message=document.querySelector("#message");
let turnO=true;

const winPatterns=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      if(turnO==true){
        turnO=false;
        box.innerText="O";
     }else{
        turnO=true;
        box.innerText="X";
     }
      box.disabled=true;
      chechWinner();
    })
});

let chechWinner=()=>{
   for(pattern of winPatterns){
     let pos1val=boxes[pattern[0]].innerText;
     let pos2val=boxes[pattern[1]].innerText;
     let pos3val=boxes[pattern[2]].innerText;

     if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val==pos2val && pos2val==pos3val){
          message.innerText=`Plyar ${pos1val} is Win The Game`;
          for(box of boxes){
             box.disabled=true;
          }
        }
     }
   }
};

const resetGame=()=>{
  turnO=true;
  for(box of boxes){
    box.disabled=false;
    box.innerText="";
   }
  message.innerText="";
};

resetBtn.addEventListener("click",resetGame);


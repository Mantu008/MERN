let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let message=document.querySelector("#message");
let turnO=true;    //playerX,PlayerO

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

const enableBoxes=()=>{
    for(box of boxes){
       box.innerText="";
       box.disabled=false
    }
}

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    message.innerText="";
};

resetBtn.addEventListener("click",resetGame);

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
        chickWinner();
    });
  });

const chickWinner=()=>{
    for(pattern of winPatterns){
      let pos1Val=boxes[pattern[0]].innerText;
      let pos2Val=boxes[pattern[1]].innerText;
      let pos3Val=boxes[pattern[2]].innerText;

      if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
         if(pos1Val ===pos2Val && pos2Val===pos3Val){
            message.innerText=`Player ${pos1Val} is Win This Game`
            for(box of boxes){
              box.disabled=true;  
           }
         }
         
      }
    }
};



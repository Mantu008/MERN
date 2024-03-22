let userScore=0;
let compScore=0;
let userPara=document.querySelector("#user-score");
let compPara=document.querySelector("#comp-score");
let message=document.querySelector(".message");

let choices=document.querySelectorAll(".btnn");

const genCompChoice=()=>{
     let options=["rock","paper","scissors"];
     return options[Math.floor(Math.random()*3)];
}

 let drawGame=()=>{
  message.innerText="Drow..";
 }

 let showWinner=(userWin)=>{
      if(userWin==true){
        userScore++;
        userPara.innerText=userScore;
        message.innerText="User Win..!";
        message.style.backgroundColor="green"
      }else{
        compScore++;
        compPara.innerText=compScore;
        message.innerText="User Loss..!";
        message.style.backgroundColor="red"
      }
 }

const playGame=(userChoice)=>{
    //generate computer choice....
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
       drawGame();
    }else{
      let userWin=true;
      
      if(userChoice=="rock"){
          //scissors , paper
           userWin=compChoice==="paper"?false:true;
      }else if(userChoice=="paper"){
          //scissors , rock
          userWin=compChoice==="scissors"?false:true;
      }else{
        //paper , rock
        userWin=compChoice==="rock"?false:true;
      }

     showWinner(userWin);
    }
}

choices.forEach((choice)=>{
     console.log(choice);
     choice.addEventListener("click",()=>{
         const userChoice=choice.getAttribute("id");
         playGame(userChoice);
     });
      
});
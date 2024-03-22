//Q1.
{
   for(let i=0;i<=100;i++){
       if(i%2===0 && i!==0){
          console.log(i);
       }
   }
}

//Q2.Random Number Gussing Game
{

   let gameNumber=Math.ceil(Math.random()*100);
   console.log(gameNumber);
   let userNumber=prompt("Guss your Number");

   while(gameNumber!=userNumber){
     userNumber=prompt("You Guess wrong Number Guss your Number Again");
   }

   console.log("Congratulations you guess the right number");


}
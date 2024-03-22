//Random Number 1 to 100
var randomNumber=parseInt((Math.random()*100)+1);
var userInput=document.getElementById('txt1');
var submitBtn=document.getElementById('btn1');
var guessNo=document.getElementById('hh1');
var remainingCount=document.getElementById('hh2');
var lowHigh=document.getElementById('lowHigh');
var parentDiv=document.getElementById('box');
var newResetButton=document.createElement('button');
var playGame=true;
var previousGuesses=[];
var numberGuess=1;
$("#btn2").hide();
if(playGame)
{
    submitBtn.addEventListener('click',function(e)
    {
        e.preventDefault();
        var guess=parseInt(userInput.value);
        validateGuess(guess);
    });
}

let clearButton=document.getElementById("btn2");

 clearButton.addEventListener("click",function(e){
     e.preventDefault();
     userInput.innerText="";
     guessNo.innerText="";
     remainingCount.innerText="";
     lowHigh.innerText="";
     
 })

 
function validateGuess(guess)
{
    if(isNaN(guess))
    {
        alert('please enter number ');
    }
    else if(guess<1 || guess>100)
    {
        alert('number must be in between 1 to 100');
    }
    else 
    {
        previousGuesses.push(guess);
        if(numberGuess==5)
        {
            displayGuess(guess);
            endGame();
        }
        else 
        {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function displayGuess(guess)
{
    $("#btn2").show();
    guessNo.innerHTML+=' '+guess;
    userInput.value='';
    numberGuess++;
    remainingCount.innerHTML=6-numberGuess;
}
function checkGuess(guess)
{
    if(guess==randomNumber)
    {
        lowHigh.innerHTML='You guess correct number';       
    }
    else if(guess<randomNumber)
    {
        lowHigh.innerHTML='Too Low!Try again';       
    }
    else if(guess>randomNumber)
    {
        lowHigh.innerHTML='Too High!Try again';       
    }
}
function endGame()
{
    userInput.value='';
    userInput.setAttribute('disabled','');
    newResetButton.innerHTML='StartNewGame';
    newResetButton.id="newGame";
    lowHigh.innerText=`Your count is end and the random number is ${randomNumber}`;
    parentDiv.appendChild(newResetButton);
    $("#btn2").hide();
    numberGuess=1;
    newGame();
}
function newGame()
{
    document.getElementById('newGame').addEventListener('click',function()
    {
        randomNumber=parseInt((Math.random()*100)+1);
        
        userInput.removeAttribute('disabled');
        guessNo.innerHTML='';
        remainingCount.innerHTML='';
        lowHigh.innerHTML='';
        parentDiv.removeChild(newResetButton);
    });
}
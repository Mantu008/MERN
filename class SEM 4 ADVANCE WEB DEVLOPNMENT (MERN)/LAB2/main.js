let screen=document.getElementById("screen");
let btn=document.getElementsByclassNameName("btn");

for(item of btn){
    item.addEventListener("click",(e)=>{
       btnText=e.target.innerText;
       screen.value+=btnText;
    });
};


function backspace(){
    screen.value=screen.value.substr(0,screen.value.length-1);
}

function fact(){
     let fact=1;
     let i;
     let ans=screen.value;

     for(i=1;i<=screen.value;i++){
          fact=fact*ans;
          ans--;
     }

     screen.value=fact;
};

function sin(){
    screen.value=Math.sin(screen.value);
}

function cos(){
    screen.value=Math.cos(screen.value);
}

function tan(){
    screen.value=Math.tan(screen.value);
}

function pi(){
    screen.value=3.14;
}


function log(){
    screen.value=Math.log(screen.value);
}

function sqrt(){
    screen.value=Math.sqrt(screen.value);
}

function e(){
    screen.value=Math.exp(screen.value);
}

function pow(){
    screen.value=Math.pow(screen.value,2);
}

function radian(){
    let radion=screen.value;
    let ans=(radion*180)/3.14;
    screen.value=ans;
}

function degree(){
    let degree=screen.value;
    let ans=(degree*180)/3.14;
    screen.value=ans;
}
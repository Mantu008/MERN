
document.getElementById("message").style.color="red"

function check(elem){
      if(isNaN(elem.value)){
          document.getElementById("message").innerText="Pleses Number Only!"
      }else{
           if(elem.value.length>10){
            document.getElementById("message").innerText="Enter Only 10 Digit Number Only!"
           }else{
            document.getElementById("message").innerText=""
           }
      }
}


